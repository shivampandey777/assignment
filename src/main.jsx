import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {NextUIProvider} from '@nextui-org/react'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </React.StrictMode>,
)
