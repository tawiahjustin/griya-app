import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/griya-logo.png'
const Inscription = () => {
  return (
    <div className='griya__incription-page'>
      <div className='griya__inscription-container'>
        <div className='griya__incription-logo'>
          <img src={logo} alt='' />
        </div>
        <h3>Sign up your account</h3>
        <form>
          <div className='inscrition_form-input'>
            <label htmlFor='username'>Username</label>
            <input type='name' placeholder='username' />
          </div>
          <div className='inscrition_form-input'>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='hello@example.com' />
          </div>
          <div className='inscrition_form-input'>
            <label htmlFor='username'>Password</label>
            <input type='password' />
          </div>
          <Link to='/inscription'>
            <button>Sign me up</button>
          </Link>
        </form>
        <p className='foot-paragraph'>
          Already have an account ? <Link to='/connexion'>Sign in</Link>
        </p>
      </div>
    </div>
  )
}

export default Inscription
