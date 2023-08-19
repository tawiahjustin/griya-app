import React, { useState } from 'react'

const Allocation = () => {
  const [allocation, setAllocation] = useState({
    stocks: 30,
    bonds: 40,
    realEstate: 20,
    cash: 10,
  })

  const handleSliderChange = (event) => {
    const { name, value } = event.target
    setAllocation((prevState) => ({
      ...prevState,
      [name]: parseInt(value, 10),
    }))
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
      <h1>Allocation de fonds</h1>
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
          <label htmlFor='stocks'>Stocks</label>
          <input
            type='range'
            id='stocks'
            name='stocks'
            min='0'
            max='100'
            value={allocation.stocks}
            onChange={handleSliderChange}
          />
          <span>{allocation.stocks}%</span>
        </div>
        <div>
          <label htmlFor='bonds'>Bonds</label>
          <input
            type='range'
            id='bonds'
            name='bonds'
            min='0'
            max='100'
            value={allocation.bonds}
            onChange={handleSliderChange}
          />
          <span>{allocation.bonds}%</span>
        </div>
        <div>
          <label htmlFor='realEstate'>Real Estate</label>
          <input
            type='range'
            id='realEstate'
            name='realEstate'
            min='0'
            max='100'
            value={allocation.realEstate}
            onChange={handleSliderChange}
          />
          <span>{allocation.realEstate}%</span>
        </div>
        <div>
          <label htmlFor='cash'>Cash</label>
          <input
            type='range'
            id='cash'
            name='cash'
            min='0'
            max='100'
            value={allocation.cash}
            onChange={handleSliderChange}
          />
          <span>{allocation.cash}%</span>
        </div>
      </div>
    </div>
  )
}

export default Allocation
