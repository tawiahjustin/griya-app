import React, { useState } from 'react'

const Credits = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    amount: '',
    purpose: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log('Form data:', formData)
  }

  return (
    <div
      className='transaction-page'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: '#f0f0f0',
      }}
    >
      <h1>Credit Application</h1>
      <div
        style={{
          width: '400px',
          background: '#fff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <form onSubmit={handleSubmit}>
          <div className='information'>
            <label htmlFor='firstName'>First Name</label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='information'>
            <label htmlFor='lastName'>Last Name</label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className='information'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='information'>
            <label htmlFor='phone'>Phone</label>
            <input
              type='text'
              id='phone'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className='information'>
            <label htmlFor='amount'>Requested Amount</label>
            <input
              type='number'
              id='amount'
              name='amount'
              value={formData.amount}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='purpose'>Purpose of Credit</label>
            <textarea
              id='purpose'
              name='purpose'
              value={formData.purpose}
              onChange={handleChange}
            />
          </div>
          <button
            style={{
              background: '#007bff',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '4px',
              border: 'none',
              marginTop: '20px',
              cursor: 'pointer',
            }}
            type='submit'
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  )
}

export default Credits
