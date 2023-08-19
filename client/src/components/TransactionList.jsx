// components/TransactionList.js
import React from 'react'
import './components.css'
const TransactionList = ({ transactions, removeTransaction }) => {
  return (
    <ul className='transaction-list'>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          {transaction.title} - ${transaction.amount}
          <button onClick={() => removeTransaction(transaction.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TransactionList
