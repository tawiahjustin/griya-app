// TransactionPage.js
import React, { useState } from 'react'
import TransactionList from '../components/TransactionList'
import TransactionForm from '../components/TransactionForm'

const TransactionPage = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, title: 'Transaction 1', amount: 100 },
    { id: 2, title: 'Transaction 2', amount: -50 },
    { id: 3, title: 'Transaction 1', amount: 100 },
    { id: 4, title: 'Transaction 2', amount: 50 },
    { id: 5, title: 'Transaction 1', amount: 100 },
    { id: 6, title: 'Transaction 2', amount: -30 },
  ])

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction])
  }

  const removeTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id))
  }

  return (
    <div className='transaction-page'>
      <div className='transaction-container'>
        <h1>Transaction </h1>
        <TransactionForm addTransaction={addTransaction} />
        <TransactionList
          transactions={transactions}
          removeTransaction={removeTransaction}
        />
        {/* Add other components here */}
      </div>
    </div>
  )
}

export default TransactionPage
