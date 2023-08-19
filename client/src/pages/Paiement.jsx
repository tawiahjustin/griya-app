import React, { useState } from 'react'

const Paiement = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setPaymentDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div
      className='transaction-page h1'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f0f0f0',
      }}
    >
      <h1>Payment Details</h1>
      <div
        style={{
          width: '400px',
          background: '#fff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className='information'>
          <label htmlFor='cardNumber'>Card Number</label>
          <input
            type='text'
            id='cardNumber'
            name='cardNumber'
            value={paymentDetails.cardNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className='information'>
          <label htmlFor='cardHolder'>Card Holder</label>
          <input
            type='text'
            id='cardHolder'
            name='cardHolder'
            value={paymentDetails.cardHolder}
            onChange={handleInputChange}
          />
        </div>
        <div className='information'>
          <label htmlFor='expiryDate'>Expiry Date</label>
          <input
            type='text'
            id='expiryDate'
            name='expiryDate'
            value={paymentDetails.expiryDate}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='cvv'>CVV</label>
          <input
            type='text'
            id='cvv'
            name='cvv'
            value={paymentDetails.cvv}
            onChange={handleInputChange}
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
        >
          Submit Payment
        </button>
      </div>
    </div>
  )
}

export default Paiement
