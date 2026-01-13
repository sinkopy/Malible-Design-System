import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import ControlsDocs from './pages/controls-docs'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ControlsDocs />
  </StrictMode>,
)
