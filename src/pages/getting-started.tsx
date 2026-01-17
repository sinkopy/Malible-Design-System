import { Link } from "react-router-dom"
import { CodeBlock } from "@/components/docs/code-block"

const cssVariables = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 6% 10%;
    
    --card: 0 0% 100%;
    --card-foreground: 240 6% 10%;
    
    --popover: 0 0% 100%;
    --popover-foreground: 240 6% 10%;
    
    --primary: 18 74% 53%;
    --primary-foreground: 0 0% 100%;
    
    --secondary: 240 5% 96%;
    --secondary-foreground: 240 4% 26%;
    
    --muted: 0 0% 96%;
    --muted-foreground: 240 4% 46%;
    
    --accent: 240 5% 96%;
    --accent-foreground: 240 6% 10%;
    
    --info: 200 100% 42%;
    --info-foreground: 0 0% 100%;
    --info-subtle: 200 100% 95%;
    
    --success: 152 48% 45%;
    --success-foreground: 0 0% 100%;
    --success-subtle: 145 47% 93%;
    
    --warning: 38 100% 44%;
    --warning-foreground: 0 0% 100%;
    --warning-subtle: 40 95% 95%;
    
    --destructive: 0 79% 42%;
    --destructive-foreground: 0 0% 100%;
    --destructive-subtle: 0 90% 95%;
    
    --border: 0 0% 90%;
    --input: 0 0% 83%;
    --ring: 200 100% 36%;
    
    --radius: 0.5rem;
  }
}`

const tailwindConfig = `import type { Config } from "tailwindcss"
import tailwindcssAnimate from "tailwindcss-animate"

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
          subtle: "hsl(var(--destructive-subtle))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
          subtle: "hsl(var(--success-subtle))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
          subtle: "hsl(var(--warning-subtle))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
          subtle: "hsl(var(--info-subtle))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
      },
      boxShadow: {
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config

export default config`

const utilsCode = `// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`

const usageExample = `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function MyForm() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Enter your email" />
      </div>
      <Button>Submit</Button>
    </div>
  )
}`

const installCommand = `npm install @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-label @radix-ui/react-popover @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toggle-group @radix-ui/react-tooltip class-variance-authority clsx tailwind-merge @phosphor-icons/react`

export default function GettingStarted() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-8">
      {/* Header */}
      <h1 className="font-heading text-3xl font-medium tracking-tight mb-4">
        Getting Started
      </h1>
      <p className="text-muted-foreground mb-12">
        Get up and running with Malible in minutes.
      </p>

      {/* Installation */}
      <section className="mb-12">
        <h2 className="font-heading text-xl font-medium mb-4">Installation</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Install the required dependencies:
        </p>
        <CodeBlock 
          code={installCommand}
          language="bash"
        />
      </section>

      {/* CSS Variables */}
      <section className="mb-12">
        <h2 className="font-heading text-xl font-medium mb-4">CSS Variables</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Add these CSS variables to your global stylesheet:
        </p>
        <CodeBlock 
          code={cssVariables}
          language="css"
        />
      </section>

      {/* Tailwind Config */}
      <section className="mb-12">
        <h2 className="font-heading text-xl font-medium mb-4">Tailwind Configuration</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Extend your Tailwind config to use the CSS variables:
        </p>
        <CodeBlock 
          code={tailwindConfig}
          language="typescript"
        />
      </section>

      {/* Utils */}
      <section className="mb-12">
        <h2 className="font-heading text-xl font-medium mb-4">Utility Function</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Create a utility function for merging class names:
        </p>
        <CodeBlock 
          code={utilsCode}
          language="typescript"
        />
      </section>

      {/* Usage */}
      <section className="mb-12">
        <h2 className="font-heading text-xl font-medium mb-4">Usage</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Import and use components:
        </p>
        <CodeBlock 
          code={usageExample}
          language="tsx"
        />
      </section>

      {/* Next Steps */}
      <section>
        <h2 className="font-heading text-xl font-medium mb-4">Next Steps</h2>
        <p className="text-sm text-muted-foreground">
          Browse the <Link to="/" className="text-info hover:underline">component library</Link> to see all available components.
        </p>
      </section>
    </div>
  )
}
