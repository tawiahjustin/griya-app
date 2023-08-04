import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from '../assets/griya-logo.png'
const Connexion = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)
  async function Login(e) {
    e.preventDefault()
    const response = await fetch('http://localhost:8000/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    })

    if (response.ok) {
      response.json().then(() => {
        setRedirect(true)
      })
    } else {
      alert('wrong credentials')
    }
  }
  if (redirect) {
    return <Navigate to={'/'} />
  }
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
          <form onSubmit={Login}>
            <div className='connexion_form-input'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                placeholder='demo@example.com'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </div>
            <div className='connexion_form-input'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
            </div>
            <button>Sign In</button>
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
