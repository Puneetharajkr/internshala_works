import React from 'react'
import './index.css'

const HeroSection = () => {
  return (
    <div className="hero-section" id="hero">
      <div className="hero-content ">
        <p className="hero-para">
          Your ultimate destination for sports and entertainment!
        </p>
        <button className="cta-button">Get Started</button>
      </div>
      <div className="hero-animation">
        <img
          className="hero-section-img"
          src="https://t4.ftcdn.net/jpg/04/42/21/53/360_F_442215355_AjiR6ogucq3vPzjFAAEfwbPXYGqYVAap.jpg"
        />
      </div>
    </div>
  )
}

export default HeroSection
