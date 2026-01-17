import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Info, CheckCircle, Warning, WarningCircle } from "@phosphor-icons/react"
import { DocPage, DocSection, ComponentExample } from "@/components/docs"

export default function AlertDocs() {
  return (
    <DocPage
      title="Alert"
      description="Displays important messages to users."
      category="Components"
    >
      <DocSection title="Examples" description="Common use cases and variations of the alert component." level={2}>
        <DocSection title="Default" description="Neutral alert for general information.">
          <ComponentExample
            code={`<Alert>
  <Info weight="fill" />
  <AlertTitle>Heads up</AlertTitle>
  <AlertDescription>This action will affect all items in your workspace.</AlertDescription>
</Alert>`}
          >
            <Alert className="max-w-md">
              <Info weight="fill" />
              <AlertTitle>Heads up</AlertTitle>
              <AlertDescription>This action will affect all items in your workspace.</AlertDescription>
            </Alert>
          </ComponentExample>
        </DocSection>

        <DocSection title="Info" description="Informational messages and tips.">
          <ComponentExample
            code={`<Alert variant="info">
  <Info weight="fill" />
  <AlertTitle>New feature available</AlertTitle>
  <AlertDescription>You can now export reports directly to PDF.</AlertDescription>
</Alert>`}
          >
            <Alert variant="info" className="max-w-md">
              <Info weight="fill" />
              <AlertTitle>New feature available</AlertTitle>
              <AlertDescription>You can now export reports directly to PDF.</AlertDescription>
            </Alert>
          </ComponentExample>
        </DocSection>

        <DocSection title="Success" description="Positive feedback and confirmations.">
          <ComponentExample
            code={`<Alert variant="success">
  <CheckCircle weight="fill" />
  <AlertTitle>Changes saved</AlertTitle>
  <AlertDescription>Your profile information has been updated successfully.</AlertDescription>
</Alert>`}
          >
            <Alert variant="success" className="max-w-md">
              <CheckCircle weight="fill" />
              <AlertTitle>Changes saved</AlertTitle>
              <AlertDescription>Your profile information has been updated successfully.</AlertDescription>
            </Alert>
          </ComponentExample>
        </DocSection>

        <DocSection title="Warning" description="Caution notices and potential issues.">
          <ComponentExample
            code={`<Alert variant="warning">
  <Warning weight="fill" />
  <AlertTitle>Storage almost full</AlertTitle>
  <AlertDescription>You've used 90% of your storage. Consider upgrading your plan.</AlertDescription>
</Alert>`}
          >
            <Alert variant="warning" className="max-w-md">
              <Warning weight="fill" />
              <AlertTitle>Storage almost full</AlertTitle>
              <AlertDescription>You've used 90% of your storage. Consider upgrading your plan.</AlertDescription>
            </Alert>
          </ComponentExample>
        </DocSection>

        <DocSection title="Destructive" description="Errors and critical issues.">
          <ComponentExample
            code={`<Alert variant="destructive">
  <WarningCircle weight="fill" />
  <AlertTitle>Unable to save changes</AlertTitle>
  <AlertDescription>Please check your connection and try again.</AlertDescription>
</Alert>`}
          >
            <Alert variant="destructive" className="max-w-md">
              <WarningCircle weight="fill" />
              <AlertTitle>Unable to save changes</AlertTitle>
              <AlertDescription>Please check your connection and try again.</AlertDescription>
            </Alert>
          </ComponentExample>
        </DocSection>
      </DocSection>

      <DocSection title="Reference" description="Technical details and configuration for the alert component." level={2}>
        <DocSection title="Variant Reference">
          <div className="rounded-lg border border-border/50 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/30">
                <tr>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Variant</th>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Use Case</th>
                  <th className="text-left p-4 font-medium uppercase tracking-wider text-[11px] text-muted-foreground">Token</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr>
                  <td className="p-4 font-medium">Default</td>
                  <td className="p-4 text-muted-foreground text-[13px]">General information</td>
                  <td className="p-4 font-mono text-xs text-info/80">--foreground</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-info">Info</td>
                  <td className="p-4 text-muted-foreground text-[13px]">Tips and helpful context</td>
                  <td className="p-4 font-mono text-xs text-info/80">--info</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-success">Success</td>
                  <td className="p-4 text-muted-foreground text-[13px]">Confirmations</td>
                  <td className="p-4 font-mono text-xs text-info/80">--success</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-warning">Warning</td>
                  <td className="p-4 text-muted-foreground text-[13px]">Caution notices</td>
                  <td className="p-4 font-mono text-xs text-info/80">--warning</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-destructive">Destructive</td>
                  <td className="p-4 text-muted-foreground text-[13px]">Errors</td>
                  <td className="p-4 font-mono text-xs text-info/80">--destructive</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DocSection>

        <DocSection title="Best Practices">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[14px]">
            <div className="space-y-4 p-4 rounded-lg bg-success/5 border border-success/10">
              <div className="flex gap-3">
                <span className="text-success font-bold">✅ Do:</span>
                <p className="text-muted-foreground leading-snug">Match alert severity to message importance: destructive for errors, success for confirmations.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-success font-bold">✅ Do:</span>
                <p className="text-muted-foreground leading-snug">Provide specific, actionable messages that help users solve the issue.</p>
              </div>
            </div>
            <div className="space-y-4 p-4 rounded-lg bg-destructive/5 border border-destructive/10">
              <div className="flex gap-3">
                <span className="text-destructive font-bold">❌ Don't:</span>
                <p className="text-muted-foreground leading-snug">Overuse destructive alerts—reserve for actual errors that need immediate attention.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-destructive font-bold">❌ Don't:</span>
                <p className="text-muted-foreground leading-snug">Show vague alerts like "Something went wrong" without providing any guidance.</p>
              </div>
            </div>
          </div>
        </DocSection>
      </DocSection>
    </DocPage>
  )
}
