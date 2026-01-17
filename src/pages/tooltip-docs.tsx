import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { DocPage, DocSection, ComponentExample, Timestamp } from "@/components/docs"
import { Info, Question, Warning, X } from "@phosphor-icons/react"

export default function TooltipDocs() {
  return (
    <DocPage
      title="Tooltip"
      description="A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
      category="Components"
    >
      <DocSection title="Positions" description="Tooltips can appear on all four sides of the trigger element.">
        <ComponentExample
          code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button size="icon" variant="ghost">
        <Info size={20} />
      </Button>
    </TooltipTrigger>
    <TooltipContent side="top">
      <p>Top tooltip</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
        >
          <div className="flex flex-col items-center gap-8 py-8">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <Info size={20} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>Top tooltip</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <div className="flex items-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <Question size={20} />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="left">
                      <p>Left tooltip</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <span className="text-xs text-muted-foreground">left</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <Warning size={20} />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>Right tooltip</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <span className="text-xs text-muted-foreground">right</span>
              </div>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <X size={20} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Bottom tooltip</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="Text Wrap" description="Longer tooltip text wraps within the 200px max-width constraint.">
        <ComponentExample
          code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button size="icon" variant="ghost">
        <Info size={20} />
      </Button>
    </TooltipTrigger>
    <TooltipContent side="top">
      <p>To learn more about how this works, check out the docs.</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
        >
          <div className="flex items-center justify-center py-8">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <Info size={20} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>To learn more about how this works, check out the docs.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="Usage" description="Basic usage pattern with TooltipProvider wrapper.">
        <ComponentExample
          code={`import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Info } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button size="icon" variant="ghost">
        <Info size={20} />
      </Button>
    </TooltipTrigger>
    <TooltipContent side="top">
      <p>Tooltip text</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
        >
          <div className="flex items-center justify-center py-8">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <Info size={20} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>Tooltip text</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="Props" description="TooltipContent props for positioning and customization.">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-4 text-sm font-semibold text-foreground">Prop</th>
                <th className="text-left py-2 px-4 text-sm font-semibold text-foreground">Type</th>
                <th className="text-left py-2 px-4 text-sm font-semibold text-foreground">Default</th>
                <th className="text-left py-2 px-4 text-sm font-semibold text-foreground">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-sm text-foreground font-medium">side</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">"top" | "bottom" | "left" | "right"</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">"top"</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Side of the trigger to show tooltip</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-4 text-sm text-foreground font-medium">sideOffset</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">number</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">4</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Distance in pixels from the trigger</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-sm text-foreground font-medium">align</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">"start" | "center" | "end"</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">"center"</td>
                <td className="py-2 px-4 text-sm text-muted-foreground">Alignment along the side</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection title="Best Practices">
        <div className="space-y-4 text-sm">
          <div className="flex gap-3">
            <span className="text-green-600 font-medium">✅ Do:</span>
            <p className="text-muted-foreground">Use tooltips to explain icon-only buttons or provide additional context.</p>
          </div>
          <div className="flex gap-3">
            <span className="text-red-600 font-medium">❌ Don't:</span>
            <p className="text-muted-foreground">Put essential information only in tooltips—some users can't access them.</p>
          </div>

          <div className="flex gap-3">
            <span className="text-green-600 font-medium">✅ Do:</span>
            <p className="text-muted-foreground">Keep tooltip text brief (1-2 short sentences max).</p>
          </div>
          <div className="flex gap-3">
            <span className="text-red-600 font-medium">❌ Don't:</span>
            <p className="text-muted-foreground">Use tooltips for long content—use a popover instead.</p>
          </div>
        </div>
      </DocSection>

      <Timestamp date="13-01-2026" />
    </DocPage>
  );
}
