/**
 * Changelog Server
 * Serves changelog content for the Figma plugin to fetch
 */

import 'dotenv/config';
import { createServer } from 'http';
import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = 3001;

const server = createServer((req, res) => {
    // CORS headers for Figma plugin
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    if (req.url === '/changelog' || req.url === '/changelog/') {
        const changelogPath = join(__dirname, '../../CHANGELOG.md');

        if (!existsSync(changelogPath)) {
            res.writeHead(404);
            res.end('CHANGELOG.md not found');
            return;
        }

        try {
            const changelog = readFileSync(changelogPath, 'utf-8');
            res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end(changelog);
        } catch (error) {
            res.writeHead(500);
            res.end('Error reading changelog');
        }
        return;
    }

    if (req.url === '/health' || req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'ok', service: 'figma-sync' }));
        return;
    }

    res.writeHead(404);
    res.end('Not found');
});

server.listen(PORT, () => {
    console.log(`\n🚀 Changelog server running at http://localhost:${PORT}`);
    console.log(`\nEndpoints:`);
    console.log(`  GET /changelog - Fetch CHANGELOG.md content`);
    console.log(`  GET /health    - Health check`);
    console.log(`\nPress Ctrl+C to stop\n`);
});
