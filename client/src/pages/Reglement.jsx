import React from 'react'

const Reglement = () => {
  const financeRules = [
    {
      title: 'Rule 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Rule 2',
      description: 'Nunc ultrices libero quis iaculis condimentum.',
    },
    {
      title: 'Rule 3',
      description: 'Nullam accumsan est a libero tincidunt, et posuere erat.',
    },
  ]

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
      <h1>Règlements</h1>
      <div
        style={{
          width: '600px',
          background: '#fff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        {financeRules.map((rule, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h3>{rule.title}</h3>
            <p>{rule.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reglement
