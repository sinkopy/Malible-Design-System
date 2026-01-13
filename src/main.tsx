import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import InputDocs from './pages/input-docs'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InputDocs />
  </StrictMode>,
)
