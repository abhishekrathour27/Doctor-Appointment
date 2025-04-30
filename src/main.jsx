import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter } from 'react-router'
import Footer from './components/Footer.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Navbar />
      <App />
      <Footer />
    </StrictMode>
  </BrowserRouter>

)
