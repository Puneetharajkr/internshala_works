import React from 'react'
import './index.css'

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <h2>What People Say</h2>
      <div className="testimonials-container">
        <div className="testimonial">
          <p className="para">
            "Amazing experience! Highly recommend it to everyone."
          </p>
          <h4>- Alex</h4>
        </div>
        <div className="testimonial">
          <p className="para">
            "The facilities are top-notch and the staff is super friendly."
          </p>
          <h4>- Jamie</h4>
        </div>
        <div className="testimonial">
          <p className="para">
            "A perfect place for sports and entertainment lovers."
          </p>
          <h4>- Taylor</h4>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
