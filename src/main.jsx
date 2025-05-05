import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter } from 'react-router'
import Footer from './components/Footer.jsx'
import { ToastContainer } from 'react-toastify';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Navbar />
      <App />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        // toastStyle={{ backgroundColor: "da" }}
        
      />
      <Footer />
    </StrictMode>
  </BrowserRouter>

)
