import React, { useState } from 'react'
import './components.css'
const TransactionForm = ({ addTransaction }) => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && amount) {
      const newTransaction = {
        id: Math.random(),
        title,
        amount: Number(amount),
      }
      addTransaction(newTransaction)
      setTitle('')
      setAmount('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='transaction-form'>
      <label htmlFor='title'>Title:</label>
      <input
        type='text'
        id='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor='amount'>Amount:</label>
      <input
        type='number'
        id='amount'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type='submit'>Add Transaction</button>
    </form>
  )
}

export default TransactionForm
