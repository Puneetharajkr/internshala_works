import React from 'react'
import './index.css'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Play Games</div>
      <nav className="nav">
        <ul>
          <li>
            <a href="#games">Games Area</a>
          </li>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
