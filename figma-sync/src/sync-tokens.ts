/**
 * Figma Token Sync Script
 * Fetches variables from Figma and exports to theme.json
 */

import 'dotenv/config';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const FIGMA_TOKEN = process.env.FIGMA_PERSONAL_TOKEN;
const FILE_KEY = process.env.FIGMA_FILE_KEY || 'F0uwJvl8PSwAkciuZfE6Ed';

if (!FIGMA_TOKEN) {
    console.error('❌ FIGMA_PERSONAL_TOKEN not found in .env');
    process.exit(1);
}

interface FigmaVariable {
    id: string;
    name: string;
    key: string;
    variableCollectionId: string;
    resolvedType: string;
    valuesByMode: Record<string, any>;
}

interface FigmaVariablesResponse {
    status: number;
    error: boolean;
    meta: {
        variables: Record<string, FigmaVariable>;
        variableCollections: Record<string, { name: string; modes: { modeId: string; name: string }[] }>;
    };
}

async function fetchVariables(): Promise<FigmaVariablesResponse> {
    console.log('📡 Fetching variables from Figma...');

    const response = await fetch(
        `https://api.figma.com/v1/files/${FILE_KEY}/variables/local`,
        {
            headers: {
                'X-Figma-Token': FIGMA_TOKEN,
            },
        }
    );

    if (!response.ok) {
        throw new Error(`Figma API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
}

function resolveColorValue(value: any): string | null {
    if (typeof value === 'object' && 'r' in value) {
        // RGBA color
        const r = Math.round(value.r * 255);
        const g = Math.round(value.g * 255);
        const b = Math.round(value.b * 255);
        const a = value.a ?? 1;

        if (a === 1) {
            return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        }
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
    return null;
}

async function syncTokens() {
    try {
        const data = await fetchVariables();

        if (data.error) {
            console.error('❌ Figma API returned an error');
            process.exit(1);
        }

        const { variables, variableCollections } = data.meta;

        // Find the Theme collection
        const themeCollection = Object.values(variableCollections).find(
            (c) => c.name.toLowerCase() === 'theme'
        );

        if (!themeCollection) {
            console.error('❌ Theme collection not found in Figma');
            console.log('Available collections:', Object.values(variableCollections).map(c => c.name));
            process.exit(1);
        }

        console.log(`✅ Found Theme collection`);

        // Get the first mode (usually "Mode 1" or "Light")
        const modeId = themeCollection.modes[0]?.modeId;
        if (!modeId) {
            console.error('❌ No modes found in Theme collection');
            process.exit(1);
        }

        // Build theme.json structure
        const themeVars = Object.values(variables).filter(
            (v) => v.variableCollectionId === Object.keys(variableCollections).find(
                (k) => variableCollections[k] === themeCollection
            )
        );

        const theme: Record<string, { type: string; values: Record<string, any> }> = {};

        for (const variable of themeVars) {
            const value = variable.valuesByMode[modeId];
            let resolvedValue = value;

            // If it's a color, convert to hex
            if (variable.resolvedType === 'COLOR') {
                resolvedValue = resolveColorValue(value) ?? value;
            }

            theme[variable.name] = {
                type: variable.resolvedType.toLowerCase(),
                values: {
                    'Mode 1': resolvedValue,
                },
            };
        }

        // Write to Figma/Tokens/theme.json
        const outputPath = join(__dirname, '../../Figma/Tokens/theme.json');
        const outputDir = dirname(outputPath);

        if (!existsSync(outputDir)) {
            mkdirSync(outputDir, { recursive: true });
        }

        const output = {
            collections: [
                {
                    name: 'Theme',
                    modes: ['Mode 1'],
                    variables: theme,
                },
            ],
        };

        writeFileSync(outputPath, JSON.stringify(output, null, 2));

        console.log(`✅ Exported ${Object.keys(theme).length} tokens to Figma/Tokens/theme.json`);
        console.log('\nTokens exported:');
        Object.keys(theme).sort().forEach(name => {
            console.log(`  - ${name}`);
        });

    } catch (error) {
        console.error('❌ Error syncing tokens:', error);
        process.exit(1);
    }
}

syncTokens();
