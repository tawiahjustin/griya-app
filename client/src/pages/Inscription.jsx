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
          <button>Sign me up</button>
        </form>
        <p className='foot-paragraph'>
          Already have an account ? <Link to='/connexion'>Sign in</Link>
        </p>
      </div>
    </div>
  )
}

export default Inscription
/* import React, { useState } from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../userContext'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)
  const { setUserInfo } = useContext(UserContext)

  async function Login(e) {
    e.preventDefault()
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    })

    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo)
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
    <form className='login' onSubmit={Login}>
      <h1>Login</h1>
      <input
        type='text'
        placeholder='username'
        value={username}
        onChange={(e) => {
          setUsername(e.target.value)
        }}
      />
      <input
        type='text'
        placeholder='password'
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
      />
      <button>Login</button>
    </form>
  )
}

export default LoginPage
*/
