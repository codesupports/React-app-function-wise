import React from 'react'
import './style.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className='navbar__logo' href='#'>Logo</a>
      <button className="navbar__toggle navbar__toggle--btn" type='button'>
      <span className="navbar__toggle--icon">X</span>
      </button>
    <div className='navbar__collapse'>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href=''>About</a></li>
            <li><a href=''>Services</a></li>
            <li><a href=''>Contact</a></li>
        </ul>
    </div>
    </nav>
  )
}

export default Navbar
