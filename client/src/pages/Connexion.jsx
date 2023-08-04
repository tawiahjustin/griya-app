import React, { useState } from 'react'
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
            <button>Sign In</button>
          </form>
          <p className='foot-paragraph'>
            Don't have an account? <Link to='/inscription'>Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Connexion
/*import React, { useState } from 'react'

const RegisterPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  async function Register(e) {
    e.preventDefault()
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    })
    if (response.status === 200) {
      alert('resgistration successful')
    } else {
      alert('resgistration failed')
    }
  }
  return (
    <form className='register' onSubmit={Register}>
      <h1>Register</h1>
      <input
        type='text'
        placeholder='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type='text'
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Register</button>
    </form>
  )
}


*/
