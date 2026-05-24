import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { VieiraAnalytics } from '@vieira/analytics/react'
import App from './App.tsx'
import './main.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <VieiraAnalytics projectKey="gericht-restaurant" />
  </StrictMode>
)
