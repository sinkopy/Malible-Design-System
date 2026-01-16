import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { User } from "@phosphor-icons/react"
import { DocPage, DocSection, ComponentExample } from "@/components/docs"

export default function AvatarDocs() {
  return (
    <DocPage
      title="Avatar"
      description="Displays a user's profile picture or initials."
      category="Components"
    >
      <DocSection title="Default" description="32px circle avatar with initials fallback.">
        <ComponentExample
          code={`<Avatar>
  <AvatarImage src="/user.jpg" alt="User" />
  <AvatarFallback>SA</AvatarFallback>
</Avatar>`}
        >
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="User" />
              <AvatarFallback>SA</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="Sizes" description="Three size variants: sm (24px), default (32px), lg (40px).">
        <ComponentExample
          code={`<Avatar size="sm">
  <AvatarFallback size="sm">SA</AvatarFallback>
</Avatar>
<Avatar>
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
<Avatar size="lg">
  <AvatarFallback size="lg">MB</AvatarFallback>
</Avatar>`}
        >
          <div className="flex items-center gap-4">
            <Avatar size="sm">
              <AvatarFallback size="sm">SA</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar size="lg">
              <AvatarFallback size="lg">MB</AvatarFallback>
            </Avatar>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="Shapes" description="Circle (default) or square (6px radius).">
        <ComponentExample
          code={`<Avatar shape="circle">
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
<Avatar shape="square">
  <AvatarFallback>MB</AvatarFallback>
</Avatar>`}
        >
          <div className="flex items-center gap-4">
            <Avatar shape="circle">
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar shape="square">
              <AvatarFallback>MB</AvatarFallback>
            </Avatar>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="With Image" description="Shows image when available, falls back to initials.">
        <ComponentExample
          code={`<Avatar>
  <AvatarImage src="/user.jpg" alt="User" />
  <AvatarFallback>SA</AvatarFallback>
</Avatar>`}
        >
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="User" />
              <AvatarFallback>SA</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://invalid-url.jpg" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="Icon Fallback" description="Use an icon when no initials are available.">
        <ComponentExample
          code={`<Avatar>
  <AvatarFallback>
    <User size={16} />
  </AvatarFallback>
</Avatar>`}
        >
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarFallback>
                <User size={16} />
              </AvatarFallback>
            </Avatar>
            <Avatar size="lg">
              <AvatarFallback size="lg">
                <User size={20} />
              </AvatarFallback>
            </Avatar>
          </div>
        </ComponentExample>
      </DocSection>

      <DocSection title="Square Brand" description="Square avatars for brands or workspaces.">
        <ComponentExample
          code={`<Avatar size="lg" shape="square">
  <AvatarImage src="/brand.png" alt="Brand" />
  <AvatarFallback size="lg">MB</AvatarFallback>
</Avatar>`}
        >
          <div className="flex items-center gap-4">
            <Avatar size="lg" shape="square">
              <AvatarFallback size="lg">MB</AvatarFallback>
            </Avatar>
            <Avatar size="lg" shape="square">
              <AvatarFallback size="lg">WS</AvatarFallback>
            </Avatar>
          </div>
        </ComponentExample>
      </DocSection>
    </DocPage>
  )
}
