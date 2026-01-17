import { DocPage, DocSection, Timestamp } from "@/components/docs";

export default function TypographyDocs() {
  return (
    <DocPage
      title="Typography"
      description="A consistent type scale for hierarchy and readability."
      category="Foundation"
    >
      {/* Scale Overview */}
      <DocSection title="Examples" description="Visual demonstrations and technical specifications of the type scale." level={2}>
        <DocSection title="Type Scale" description="Five levels for clear visual hierarchy.">
          <div className="rounded-lg border border-border/50 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/30">
                <tr>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Role</th>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Element</th>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Size</th>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Line Height</th>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Weight</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50 font-mono text-[11px] text-muted-foreground">
                <tr>
                  <td className="p-4 font-sans font-medium text-[13px] text-foreground">Display</td>
                  <td className="p-4">h1</td>
                  <td className="p-4 text-info/80">36px</td>
                  <td className="p-4 text-info/80">40px</td>
                  <td className="p-4">600</td>
                </tr>
                <tr>
                  <td className="p-4 font-sans font-medium text-[13px] text-foreground">Heading</td>
                  <td className="p-4">h2</td>
                  <td className="p-4 text-info/80">24px</td>
                  <td className="p-4 text-info/80">32px</td>
                  <td className="p-4">600</td>
                </tr>
                <tr>
                  <td className="p-4 font-sans font-medium text-[13px] text-foreground">Title</td>
                  <td className="p-4">h3, h4</td>
                  <td className="p-4 text-info/80">18px</td>
                  <td className="p-4 text-info/80">24px</td>
                  <td className="p-4">600</td>
                </tr>
                <tr>
                  <td className="p-4 font-sans font-medium text-[13px] text-foreground">Body</td>
                  <td className="p-4">p, default</td>
                  <td className="p-4 text-info/80">14px</td>
                  <td className="p-4 text-info/80">20px</td>
                  <td className="p-4">400</td>
                </tr>
                <tr>
                  <td className="p-4 font-sans font-medium text-[13px] text-foreground">Caption</td>
                  <td className="p-4">h5, h6, small</td>
                  <td className="p-4 text-info/80">12px</td>
                  <td className="p-4 text-info/80">16px</td>
                  <td className="p-4">400</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DocSection>

        <DocSection title="Visual Samples" description="Visual reference for each typography level.">
          <div className="space-y-12 rounded-lg border border-border/50 bg-muted/20 p-8">
            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-mono">Display / h1 / 36px</p>
              <h1 className="tracking-tight">The quick brown fox jumps</h1>
            </div>

            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-mono">Heading / h2 / 24px</p>
              <h2 className="tracking-tight">The quick brown fox jumps over</h2>
            </div>

            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-mono">Title / h3 / 18px</p>
              <h3 className="tracking-tight font-semibold">The quick brown fox jumps over the lazy dog</h3>
            </div>

            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-mono">Body / p / 14px</p>
              <p className="leading-relaxed">The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.</p>
            </div>

            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-mono">Caption / small / 12px</p>
              <small className="block text-muted-foreground">The quick brown fox jumps over the lazy dog.</small>
            </div>
          </div>
        </DocSection>
      </DocSection>

      <DocSection title="Reference" description="Technical specifications and usage guidelines." level={2}>
        <DocSection title="Font Families" description="Three families for different content types.">
          <div className="rounded-lg border border-border/50 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/30">
                <tr>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Role</th>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Font</th>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">CSS Variable</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr>
                  <td className="p-4 font-medium text-[13px]">Headings</td>
                  <td className="p-4 text-muted-foreground">TT Commons Pro</td>
                  <td className="p-4"><code className="text-xs font-mono bg-muted/50 px-1.5 py-0.5 rounded text-info/80">--font-heading</code></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[13px]">Body</td>
                  <td className="p-4 text-muted-foreground">Inter</td>
                  <td className="p-4"><code className="text-xs font-mono bg-muted/50 px-1.5 py-0.5 rounded text-info/80">--font-body</code></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[13px]">Code</td>
                  <td className="p-4 text-muted-foreground">Menlo</td>
                  <td className="p-4"><code className="text-xs font-mono bg-muted/50 px-1.5 py-0.5 rounded text-info/80">--font-mono</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </DocSection>

        <DocSection title="Font Samples" description="Character specimens for each typeface.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 p-6 rounded-lg border border-border/50 bg-muted/10">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-mono">TT Commons Pro (Headings)</p>
              <p className="font-heading text-xl font-semibold leading-none break-all">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                abcdefghijklmnopqrstuvwxyz<br />
                0123456789
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-lg border border-border/50 bg-muted/10">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-mono">Inter (Body)</p>
              <p className="font-body text-base leading-snug break-all">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                abcdefghijklmnopqrstuvwxyz<br />
                0123456789
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-lg border border-border/50 bg-muted/10 md:col-span-2">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-mono">Menlo (Code)</p>
              <p className="font-mono text-[13px] leading-relaxed break-all text-info/80">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                abcdefghijklmnopqrstuvwxyz<br />
                0123456789
              </p>
            </div>
          </div>
        </DocSection>

        <DocSection title="Hierarchy Ratios" description="Mathematical relationships between sizes.">
          <div className="rounded-lg border border-border/50 p-8 space-y-4 bg-muted/10">
            <p className="text-muted-foreground">
              The type scale uses clear ratios for visual hierarchy:
            </p>
            <div className="space-y-1 font-mono text-sm">
              <p>Display (36px) → Heading (24px) = <span className="text-success font-semibold">1.5×</span></p>
              <p>Heading (24px) → Title (18px) = <span className="text-success font-semibold">1.33×</span></p>
              <p>Title (18px) → Body (14px) = <span className="text-success font-semibold">1.29×</span></p>
              <p>Body (14px) → Caption (12px) = <span className="text-success font-semibold">1.17×</span></p>
            </div>
            <p className="text-sm text-muted-foreground border-t border-border/50 pt-4 mt-4">
              All line heights align to a 4px baseline grid.
            </p>
          </div>
        </DocSection>

        <DocSection title="Usage Guidelines" description="When to apply each typography level.">
          <div className="rounded-lg border border-border/50 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/30">
                <tr>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Role</th>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">When to Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr>
                  <td className="p-4 font-medium text-[13px]">Display</td>
                  <td className="p-4 text-muted-foreground">Page titles, hero sections, one per page max</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[13px]">Heading</td>
                  <td className="p-4 text-muted-foreground">Major section headers, content divisions</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[13px]">Title</td>
                  <td className="p-4 text-muted-foreground">Card headers, panel titles, subsections</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[13px]">Body</td>
                  <td className="p-4 text-muted-foreground">Default text, paragraphs, UI labels</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-[13px]">Caption</td>
                  <td className="p-4 text-muted-foreground">Help text, timestamps, metadata, hints</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DocSection>
      </DocSection>

      <Timestamp date="13-01-2026" />
    </DocPage>
  );
}
