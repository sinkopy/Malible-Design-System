# Figma Sync

Tools for syncing design tokens and changelog between codebase and Figma.

## Setup

1. Copy `.env.example` to `.env` and add your Figma token
2. Run `npm install`
3. Run sync scripts as needed

## Scripts

- `npm run sync-tokens` - Fetch Figma Variables and export to theme.json
- `npm run serve-changelog` - Start changelog server for Figma plugin
