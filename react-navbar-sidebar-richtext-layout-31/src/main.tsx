import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ActiveThemeProvider from './store/ActiveThemeProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ActiveThemeProvider>
      <App />
    </ActiveThemeProvider>
  </StrictMode>,
)
