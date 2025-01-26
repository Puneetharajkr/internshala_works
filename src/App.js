import React from 'react'
import './App.css'

// Import components
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'
import AnimationsSection from './components/AnimationsSection'
function App() {
  return (
    <div className="App">
      <Header />
      <AnimationsSection />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  )
}

export default App
