import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CustomCursor from './components/common/CustomCursor.tsx'
import ScrollToTopButton from './components/common/ScrollToTopButton.tsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <CustomCursor/>
    <ScrollToTopButton/>
    <ToastContainer position="top-right" autoClose={3000}/>
  </StrictMode>
)
