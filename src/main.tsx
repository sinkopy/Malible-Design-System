import React from 'react'
import ReactDOM from 'react-dom/client'
import { Button } from './components/ui/button'
import './styles/globals.css'

function App() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Malible Button Component
          </h1>
          <p className="text-muted-foreground">
            Testing all variants and sizes
          </p>
        </div>

        {/* Default Buttons */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Default (Primary)</h2>
          <div className="flex flex-wrap gap-3">
            <Button variant="default" size="sm">Small</Button>
            <Button variant="default" size="default">Regular</Button>
            <Button variant="default" size="lg">Large</Button>
            <Button variant="default" disabled>Disabled</Button>
          </div>
        </section>

        {/* Secondary Buttons */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Secondary</h2>
          <div className="flex flex-wrap gap-3">
            <Button variant="secondary" size="sm">Small</Button>
            <Button variant="secondary" size="default">Regular</Button>
            <Button variant="secondary" size="lg">Large</Button>
            <Button variant="secondary" disabled>Disabled</Button>
          </div>
        </section>

        {/* Destructive Buttons */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Destructive</h2>
          <div className="flex flex-wrap gap-3">
            <Button variant="destructive" size="sm">Small</Button>
            <Button variant="destructive" size="default">Regular</Button>
            <Button variant="destructive" size="lg">Large</Button>
            <Button variant="destructive" disabled>Disabled</Button>
          </div>
        </section>

        {/* Ghost Buttons */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Ghost</h2>
          <div className="flex flex-wrap gap-3">
            <Button variant="ghost" size="sm">Small</Button>
            <Button variant="ghost" size="default">Regular</Button>
            <Button variant="ghost" size="lg">Large</Button>
            <Button variant="ghost" disabled>Disabled</Button>
          </div>
        </section>

        {/* Interactive Test */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Interactive (Hover & Click)</h2>
          <div className="flex flex-wrap gap-3">
            <Button variant="default" onClick={() => alert('Clicked!')}>
              Click Me
            </Button>
            <Button variant="secondary">Hover for Shadow</Button>
            <Button variant="destructive">Active State</Button>
          </div>
        </section>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
