import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from '../assets/griya-logo.png'
const Connexion = () => {
  return (
    <div className='griya__connexion-page'>
      <div className='griya__connexion-container'>
        <div className='griya__connexion-left'>
          <div className='connexion-logo'>
            <img src={logo} alt='' />
          </div>
          <div className='griya__conexion-left_info'>
            <h1>Welcome To Griya</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters,
            </p>
            <ul className='connexion-left_info-links'>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <p>Copyright &#169; Designed & Developed by DexignZone 2023</p>
          </div>
        </div>
        <div className='griya__connexion-right'>
          <h1>Sign in</h1>
          <p>Sign in by entering information below</p>
          <form>
            <div className='connexion_form-input'>
              <label htmlFor='email'>Email</label>
              <input type='email' placeholder='demo@example.com' />
            </div>
            <div className='connexion_form-input'>
              <label htmlFor='password'>Password</label>
              <input type='password' />
            </div>
            <Link to='/'>
              <button>Sign In</button>
            </Link>
          </form>
          <p className='foot-paragraph'>
            Don't have an account? <Link to='/inscription'>Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Connexion
