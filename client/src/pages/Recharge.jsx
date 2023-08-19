import React, { useState } from 'react'

const Recharge = () => {
  const [rechargeAmount, setRechargeAmount] = useState('')

  const handleInputChange = (event) => {
    const { value } = event.target
    setRechargeAmount(value)
  }

  const handleRecharge = () => {
    // Add code here to handle the recharge, e.g., send the amount to a backend server
    console.log('Recharge Amount:', rechargeAmount)
    // Reset the input after recharge
    setRechargeAmount('')
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
      <h1>Recharge Account</h1>
      <div
        style={{
          width: '400px',
          background: '#fff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div>
          <label htmlFor='amount'>Enter Amount:</label>
          <input
            type='number'
            id='amount'
            value={rechargeAmount}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              marginBottom: '10px',
            }}
          />
        </div>
        <button
          style={{
            background: '#007bff',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={handleRecharge}
        >
          Recharge Now
        </button>
      </div>
    </div>
  )
}

export default Recharge
