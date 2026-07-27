import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset } from '@fortawesome/free-solid-svg-icons'; // CamelCase syntax

function Navbar() {
  return (
    <div className='navbar-wrapper'>
      <div className='navbar'>
        <div className='navbar-container'>
          <h3 className='navbar-title'>SPOORJITH</h3>
          <div className='navbar-link-box'>
              <NavLink to='/' className='navbar-link'>
              {({isActive}) => isActive ? (<span className='navbar-link active'>Home</span>) : (<span className='navbar-link'>Home</span>) }
              </NavLink>
              <NavLink to='/about-us' className='navbar-link'>
                {({isActive}) => isActive ? (<span className='navbar-link active'>About Us</span>) : (<span className='navbar-link'>About Us</span>)}
              </NavLink>
              <NavLink to='/help-support' className='navbar-link'>
                {({isActive}) => isActive ? (<span className='navbar-link active'><FontAwesomeIcon icon={faHeadset} />Help & support</span>) : (<span><FontAwesomeIcon icon={faHeadset} />Help & support</span>)}
              </NavLink>
          </div>
          <div className='navbar-sign-box'>
            <button className='navbar-sign-btn nav-sign-in'>Sign In</button>
            <span>/</span>
            <button className='navbar-sign-btn nav-sign-up'>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
