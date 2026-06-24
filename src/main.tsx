// ── Entry point ──────────────────────────────────────────────────────────────
// Mounts the React tree into <div id="root"> (defined in index.html) and loads
// the global Tailwind stylesheet. This is a single-page site, so there is no
// router here — App renders every section in order.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App'
import '@/index.css'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element #root not found')

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
