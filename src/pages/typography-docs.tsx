import { DocPage, DocSection, Timestamp } from "@/components/docs";

export default function TypographyDocs() {
  return (
    <DocPage
      title="Typography"
      description="A consistent type scale for hierarchy and readability."
    >
      {/* Scale Overview */}
      <DocSection title="Type Scale">
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4 font-medium">Role</th>
                <th className="text-left p-4 font-medium">Element</th>
                <th className="text-left p-4 font-medium">Size</th>
                <th className="text-left p-4 font-medium">Line Height</th>
                <th className="text-left p-4 font-medium">Weight</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-4">Display</td>
                <td className="p-4 font-mono text-xs">h1</td>
                <td className="p-4 font-mono text-xs">36px</td>
                <td className="p-4 font-mono text-xs">40px</td>
                <td className="p-4 font-mono text-xs">600</td>
              </tr>
              <tr>
                <td className="p-4">Heading</td>
                <td className="p-4 font-mono text-xs">h2</td>
                <td className="p-4 font-mono text-xs">24px</td>
                <td className="p-4 font-mono text-xs">32px</td>
                <td className="p-4 font-mono text-xs">600</td>
              </tr>
              <tr>
                <td className="p-4">Title</td>
                <td className="p-4 font-mono text-xs">h3, h4</td>
                <td className="p-4 font-mono text-xs">18px</td>
                <td className="p-4 font-mono text-xs">24px</td>
                <td className="p-4 font-mono text-xs">600</td>
              </tr>
              <tr>
                <td className="p-4">Body</td>
                <td className="p-4 font-mono text-xs">p, default</td>
                <td className="p-4 font-mono text-xs">14px</td>
                <td className="p-4 font-mono text-xs">20px</td>
                <td className="p-4 font-mono text-xs">400</td>
              </tr>
              <tr>
                <td className="p-4">Caption</td>
                <td className="p-4 font-mono text-xs">h5, h6, small</td>
                <td className="p-4 font-mono text-xs">12px</td>
                <td className="p-4 font-mono text-xs">16px</td>
                <td className="p-4 font-mono text-xs">400</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocSection>

      {/* Visual Examples */}
      <DocSection title="Examples">
        <div className="space-y-6 rounded-lg border p-8">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground font-mono">Display / h1 / 36px</p>
            <h1>The quick brown fox jumps</h1>
          </div>
          
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground font-mono">Heading / h2 / 24px</p>
            <h2>The quick brown fox jumps over</h2>
          </div>
          
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground font-mono">Title / h3 / 18px</p>
            <h3>The quick brown fox jumps over the lazy dog</h3>
          </div>
          
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground font-mono">Body / p / 14px</p>
            <p>The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground font-mono">Caption / small / 12px</p>
            <small className="block">The quick brown fox jumps over the lazy dog.</small>
          </div>
        </div>
      </DocSection>

      {/* Font Families */}
      <DocSection title="Font Families">
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4 font-medium">Role</th>
                <th className="text-left p-4 font-medium">Font</th>
                <th className="text-left p-4 font-medium">CSS Variable</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-4">Headings</td>
                <td className="p-4">TT Commons Pro</td>
                <td className="p-4 font-mono text-xs">--font-heading</td>
              </tr>
              <tr>
                <td className="p-4">Body</td>
                <td className="p-4">Inter</td>
                <td className="p-4 font-mono text-xs">--font-body</td>
              </tr>
              <tr>
                <td className="p-4">Code</td>
                <td className="p-4">Menlo</td>
                <td className="p-4 font-mono text-xs">--font-mono</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocSection>

      {/* Font Samples */}
      <DocSection title="Font Samples">
        <div className="space-y-4 rounded-lg border p-8">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">TT Commons Pro (Headings)</p>
            <p className="font-heading text-2xl font-semibold">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
              abcdefghijklmnopqrstuvwxyz<br />
              0123456789
            </p>
          </div>
          
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Inter (Body)</p>
            <p className="font-body text-base">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
              abcdefghijklmnopqrstuvwxyz<br />
              0123456789
            </p>
          </div>
          
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Menlo (Code)</p>
            <p className="font-mono text-sm">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
              abcdefghijklmnopqrstuvwxyz<br />
              0123456789
            </p>
          </div>
        </div>
      </DocSection>

      {/* Hierarchy Ratios */}
      <DocSection title="Hierarchy Ratios">
        <div className="rounded-lg border p-8 space-y-4">
          <p className="text-muted-foreground">
            The type scale uses clear ratios for visual hierarchy:
          </p>
          <div className="space-y-2 font-mono text-sm">
            <p>Display (36px) → Heading (24px) = <span className="text-success font-semibold">1.5×</span></p>
            <p>Heading (24px) → Title (18px) = <span className="text-success font-semibold">1.33×</span></p>
            <p>Title (18px) → Body (14px) = <span className="text-success font-semibold">1.29×</span></p>
            <p>Body (14px) → Caption (12px) = <span className="text-success font-semibold">1.17×</span></p>
          </div>
          <p className="text-sm text-muted-foreground">
            All line heights align to a 4px baseline grid.
          </p>
        </div>
      </DocSection>

      {/* Usage Guidelines */}
      <DocSection title="Usage">
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4 font-medium">Role</th>
                <th className="text-left p-4 font-medium">When to Use</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-4 font-medium">Display</td>
                <td className="p-4 text-muted-foreground">Page titles, hero sections, one per page max</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Heading</td>
                <td className="p-4 text-muted-foreground">Major section headers, content divisions</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Title</td>
                <td className="p-4 text-muted-foreground">Card headers, panel titles, subsections</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Body</td>
                <td className="p-4 text-muted-foreground">Default text, paragraphs, UI labels</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Caption</td>
                <td className="p-4 text-muted-foreground">Help text, timestamps, metadata, hints</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocSection>

      <Timestamp date="13-01-2026" />
    </DocPage>
  );
}
