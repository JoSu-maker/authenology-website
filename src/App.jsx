import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import LoadingScreen from './components/LoadingScreen'

// Pages
import Home from './pages/Home'
import PlansPage from './pages/PlansPage'
import ContactPage from './pages/ContactPage'
import LegalPage from './pages/LegalPage'
import SupportPage from './pages/SupportPage'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <Navbar />
      
                        <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/planes" element={<PlansPage />} />
                    <Route path="/contacto" element={<ContactPage />} />
                    <Route path="/legal" element={<LegalPage />} />
                    <Route path="/support" element={<SupportPage />} />

                  </Routes>
      
      <Footer />
      
      <Chatbot 
        isOpen={isChatbotOpen}
        onToggle={() => setIsChatbotOpen(!isChatbotOpen)}
      />
    </div>
  )
}

export default App 