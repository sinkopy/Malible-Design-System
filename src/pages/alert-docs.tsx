import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Info, CheckCircle, Warning, WarningCircle } from "@phosphor-icons/react"
import { DocPage, DocSection, ComponentExample, StateTable, PropsTable } from "@/components/docs"

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
        <DocSection title="Accessibility">
          <div className="space-y-4 text-[14px] text-muted-foreground leading-relaxed">
            <p>
              Alerts use the <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">alert</code> role to provide an automated way to communicate important information to assistive technologies.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Use the <code className="text-[13px] bg-muted/20 border border-border/30 px-1 rounded">alert</code> role for messages that are not interactive.</li>
              <li>Ensure the alert is visible and clear to the user.</li>
              <li>Avoid using alerts for information that is not critical or time-sensitive.</li>
            </ul>
          </div>
        </DocSection>

        <DocSection title="Variant Reference">
          <StateTable
            states={[
              { state: "Default", style: "Neutral information", token: "border-border" },
              { state: "Info", style: "Informational context", token: "border-info/50 bg-info/5" },
              { state: "Success", style: "Positive confirmation", token: "border-success/50 bg-success/5" },
              { state: "Warning", style: "Cautionary notice", token: "border-warning/50 bg-warning/5" },
              { state: "Destructive", style: "Critical error", token: "border-destructive/50 bg-destructive/5" },
            ]}
          />
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
