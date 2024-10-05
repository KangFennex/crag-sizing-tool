import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { NextUIProvider } from '@nextui-org/react'
import './main.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </StrictMode>,
)
