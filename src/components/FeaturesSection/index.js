import React from 'react'
import './index.css'

const FeaturesSection = () => {
  return (
    <section className="features-section" id="features">
      <h2>Our Features</h2>
      <div className="features-container">
        <div className="feature">
          <h3>Exciting Games</h3>
          <p>Explore a variety of games to keep you entertained.</p>
        </div>
        <div className="feature">
          <h3>Professional Facilities</h3>
          <p>Top-notch facilities to ensure the best experience.</p>
        </div>
        <div className="feature">
          <h3>Community Events</h3>
          <p>Join our vibrant community for events and fun.</p>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
