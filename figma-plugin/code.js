// Malible Changelog Sync - Enhanced Plugin
// Creates structured changelog entries matching the Figma component structure
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__, { width: 400, height: 520 });
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
    if (msg.type === 'create-changelog-entries') {
        const entries = msg.entries || [];
        const targetNodeId = msg.nodeId;
        if (!targetNodeId || entries.length === 0) {
            figma.notify('❌ No entries to create');
            figma.ui.postMessage({ type: 'error', message: 'No entries provided' });
            return;
        }
        try {
            // Find the List frame (parent of all Section frames)
            const listNode = figma.getNodeById(targetNodeId);
            if (!listNode || listNode.type !== 'FRAME') {
                figma.notify('❌ Target must be a FRAME');
                figma.ui.postMessage({ type: 'error', message: 'Target must be a FRAME' });
                return;
            }
            const listFrame = listNode;
            // Load fonts we'll need
            yield figma.loadFontAsync({ family: "Inter", style: "Bold" });
            yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
            let createdCount = 0;
            for (const entry of entries) {
                // Create Section frame (horizontal layout)
                const sectionFrame = figma.createFrame();
                sectionFrame.name = "Section";
                sectionFrame.layoutMode = "HORIZONTAL";
                sectionFrame.primaryAxisSizingMode = "AUTO";
                sectionFrame.counterAxisSizingMode = "AUTO";
                sectionFrame.itemSpacing = 24;
                sectionFrame.fills = [];
                // Create Text frame (vertical layout for version + date)
                const textFrame = figma.createFrame();
                textFrame.name = "Text";
                textFrame.layoutMode = "VERTICAL";
                textFrame.primaryAxisSizingMode = "AUTO";
                textFrame.counterAxisSizingMode = "FIXED";
                textFrame.resize(120, textFrame.height);
                textFrame.itemSpacing = 4;
                textFrame.fills = [];
                // Create Version text
                const versionText = figma.createText();
                versionText.name = entry.version;
                versionText.characters = entry.version;
                versionText.fontSize = 16;
                versionText.fontName = { family: "Inter", style: "Bold" };
                versionText.fills = [{ type: 'SOLID', color: { r: 0.09, g: 0.09, b: 0.11 } }];
                // Create Date text
                const dateText = figma.createText();
                dateText.name = entry.date;
                dateText.characters = entry.date;
                dateText.fontSize = 12;
                dateText.fontName = { family: "Inter", style: "Regular" };
                dateText.fills = [{ type: 'SOLID', color: { r: 0.4, g: 0.4, b: 0.4 } }];
                // Create Content text
                const contentText = figma.createText();
                contentText.name = entry.content.substring(0, 50) + (entry.content.length > 50 ? '...' : '');
                contentText.characters = entry.content;
                contentText.fontSize = 14;
                contentText.fontName = { family: "Inter", style: "Regular" };
                contentText.fills = [{ type: 'SOLID', color: { r: 0.09, g: 0.09, b: 0.11 } }];
                contentText.layoutGrow = 1;
                contentText.textAutoResize = "HEIGHT";
                contentText.resize(600, contentText.height);
                // Assemble the structure
                textFrame.appendChild(versionText);
                textFrame.appendChild(dateText);
                sectionFrame.appendChild(textFrame);
                sectionFrame.appendChild(contentText);
                // Add to list frame at the top (newest first)
                listFrame.insertChild(0, sectionFrame);
                createdCount++;
            }
            figma.notify(`✅ Created ${createdCount} changelog entries!`);
            figma.ui.postMessage({ type: 'success', message: `Created ${createdCount} entries` });
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            figma.notify(`❌ Error: ${errorMessage}`);
            figma.ui.postMessage({ type: 'error', message: errorMessage });
        }
    }
    if (msg.type === 'get-selection') {
        const selection = figma.currentPage.selection;
        if (selection.length === 0) {
            figma.ui.postMessage({ type: 'selection', nodeId: null, nodeName: null });
            return;
        }
        const node = selection[0];
        figma.ui.postMessage({
            type: 'selection',
            nodeId: node.id,
            nodeName: node.name,
            nodeType: node.type
        });
    }
    if (msg.type === 'close') {
        figma.closePlugin();
    }
});
