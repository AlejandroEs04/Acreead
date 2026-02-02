import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from './context/RouteContext.tsx'
import Index from './views/home/Index.tsx'
import Layout from './layouts/Layout.tsx'
import Portfolio from './views/home/Portfolio.tsx'
import './styles/index.css'
import { ThemeProvider } from './context/ThemeContext.tsx'
import ContactMe from './views/home/ContactMe.tsx'
import Resume from './views/home/Resume.tsx'

const routes = [
  {
    path: '/', 
    view: Index,
    layout: Layout
  }, 
  {
    path: '/portfolio',
    view: Portfolio,
    layout: Layout
  }, 
  {
    path: '/contact-me', 
    view: ContactMe, 
    layout: Layout
  },
  {
    path: '/resume',
    view: Resume, 
    layout: Layout
  }
]

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider routes={routes} />
    </ThemeProvider>
  </StrictMode>,
)
