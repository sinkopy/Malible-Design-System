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

      <DocSection title="Without Icon" description="Cleaner look without icon.">
        <ComponentExample
          code={`<Alert variant="warning">
  <AlertTitle>Unsaved changes</AlertTitle>
  <AlertDescription>You have unsaved changes that will be lost.</AlertDescription>
</Alert>`}
        >
          <Alert variant="warning" className="max-w-md">
            <AlertTitle>Unsaved changes</AlertTitle>
            <AlertDescription>You have unsaved changes that will be lost.</AlertDescription>
          </Alert>
        </ComponentExample>
      </DocSection>

      <DocSection title="Title Only" description="Compact alert with just a title.">
        <ComponentExample
          code={`<Alert variant="success">
  <CheckCircle weight="fill" />
  <AlertTitle>Changes saved</AlertTitle>
</Alert>`}
        >
          <Alert variant="success" className="max-w-md">
            <CheckCircle weight="fill" />
            <AlertTitle>Changes saved</AlertTitle>
          </Alert>
        </ComponentExample>
      </DocSection>
    </DocPage>
  )
}
