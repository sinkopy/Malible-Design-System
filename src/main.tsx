import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import ButtonPage from './button-page-shadcn'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ButtonPage />
  </StrictMode>,
)
