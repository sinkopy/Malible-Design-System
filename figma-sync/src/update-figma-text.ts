/**
 * Update Figma Text Node
 * Uses Figma REST API to update a specific text node
 * 
 * NOTE: Figma REST API cannot directly edit text content in files.
 * This script fetches the current node data for verification.
 * For actual text editing, you need the Figma Plugin API.
 */

import 'dotenv/config';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const FIGMA_TOKEN = process.env.FIGMA_PERSONAL_TOKEN;
const FILE_KEY = process.env.FIGMA_FILE_KEY || 'F0uwJvl8PSwAkciuZfE6Ed';

// Target node ID for changelog (from URL: node-id=842-52081 → "842:52081")
const CHANGELOG_NODE_ID = '842:52081';

if (!FIGMA_TOKEN) {
    console.error('❌ FIGMA_PERSONAL_TOKEN not found in .env');
    process.exit(1);
}

interface FigmaNode {
    id: string;
    name: string;
    type: string;
    characters?: string;
    children?: FigmaNode[];
}

async function getNodeData(nodeId: string): Promise<FigmaNode | null> {
    console.log(`📡 Fetching node ${nodeId} from Figma...`);

    const response = await fetch(
        `https://api.figma.com/v1/files/${FILE_KEY}/nodes?ids=${encodeURIComponent(nodeId)}`,
        {
            headers: {
                'X-Figma-Token': FIGMA_TOKEN,
            },
        }
    );

    if (!response.ok) {
        throw new Error(`Figma API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.nodes?.[nodeId]?.document ?? null;
}

function findTextNodes(node: FigmaNode, results: FigmaNode[] = []): FigmaNode[] {
    if (node.type === 'TEXT') {
        results.push(node);
    }
    if (node.children) {
        for (const child of node.children) {
            findTextNodes(child, results);
        }
    }
    return results;
}

async function analyzeChangelogNode() {
    try {
        const node = await getNodeData(CHANGELOG_NODE_ID);

        if (!node) {
            console.error('❌ Node not found');
            process.exit(1);
        }

        console.log(`\n✅ Found node: "${node.name}" (${node.type})`);

        // Find all text nodes within
        const textNodes = findTextNodes(node);

        if (textNodes.length === 0) {
            console.log('\n⚠️  No text nodes found in this frame');
        } else {
            console.log(`\n📝 Found ${textNodes.length} text node(s):\n`);

            for (const textNode of textNodes) {
                console.log(`  Name: ${textNode.name}`);
                console.log(`  ID: ${textNode.id}`);
                console.log(`  Characters: ${textNode.characters?.substring(0, 100)}...`);
                console.log('');
            }
        }

        // Read local changelog for comparison
        const changelogPath = join(__dirname, '../../CHANGELOG.md');
        const localChangelog = readFileSync(changelogPath, 'utf-8');

        console.log('\n📋 Local CHANGELOG.md preview:');
        console.log(localChangelog.substring(0, 500) + '...');

        console.log('\n---');
        console.log('ℹ️  To update text in Figma, you need to:');
        console.log('   1. Install the Figma plugin (figma-plugin/)');
        console.log('   2. Run: npm run serve-changelog');
        console.log('   3. Use the plugin to fetch and update the text');

    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
}

analyzeChangelogNode();
