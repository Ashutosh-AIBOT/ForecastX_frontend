import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Home from './pages/Home'

// ========================================
// FORECASTX PROJECT
// ========================================
import ForecastxProject from './pages/ForecastxProject'
import ForecastxModelPage from './pages/ForecastxModelPage'

import WelcomeModal from './components/WelcomeModal'
import AIAssistant from './components/AIAssistant'

function AppContent() {
  const location = useLocation()
  const navigate = useNavigate()
  const [modalDone, setModalDone] = useState(false)
  const [visitorName, setVisitorName] = useState('')
  const [targetPath, setTargetPath] = useState('')

  // Check if user has completed modal before
  useEffect(() => {
    const saved = sessionStorage.getItem('visitor_name')
    if (saved) { 
      setVisitorName(saved)
      setModalDone(true)
    } else {
      // Store where user wanted to go
      const intended = location.pathname === '/' ? '/learning/home' : location.pathname
      setTargetPath(intended)
    }
  }, [location.pathname])

  const saveName = (name) => {
    sessionStorage.setItem('visitor_name', name)
    setVisitorName(name)
  }

  const handleModalComplete = () => {
    setModalDone(true)
    // Navigate to intended destination after modal
    if (targetPath && targetPath !== location.pathname) {
      navigate(targetPath, { replace: true })
    } else if (location.pathname === '/') {
      navigate('/learning/home', { replace: true })
    }
  }

  // CRITICAL: If modal not done, show ONLY modal, no content
  if (!modalDone) {
    return (
      <WelcomeModal
        isDirectVisit={targetPath !== '/' && targetPath !== '/learning/home'}
        targetPath={targetPath}
        onDone={handleModalComplete}
        saveName={saveName}
      />
    )
  }

  // Modal done - show actual app content
  return (
    <>
      <AIAssistant visitorName={visitorName} />

      <Routes>
        {/* ROOT & HOME ROUTES */}
        <Route path="/" element={<Navigate to="/learning/home" replace />} />
        <Route path="/learning/home" element={<Home />} />

        {/* FORECASTX ROUTES */}
        <Route path="/learning/allprojects/forecastx" element={<ForecastxProject />} />
        <Route path="/learning/allprojects/forecastx/:section" element={<ForecastxProject />} />
        <Route path="/learning/allprojects/forecastx/model" element={<ForecastxModelPage />} />

        {/* LEGACY ROUTES - REDIRECT TO NEW */}
        <Route path="/forecastx" element={<Navigate to="/learning/allprojects/forecastx" replace />} />
        <Route path="/forecastx/model" element={<Navigate to="/learning/allprojects/forecastx/model" replace />} />

        {/* FALLBACK - REDIRECT TO HOME */}
        <Route path="*" element={<Navigate to="/learning/home" replace />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
