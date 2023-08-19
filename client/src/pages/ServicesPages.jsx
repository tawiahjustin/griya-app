// src/components/ServicesPage.js
import React from 'react'

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'Microloans',
      description:
        'Nous accordons de petits prêts aux particuliers et aux petites entreprises pour les aider à se développer et à améliorer leurs moyens de subsistance.',
    },
    {
      id: 2,
      title: 'Savings Accounts',
      description:
        "Nos comptes d'épargne offrent des taux d'intérêt concurrentiels et des options de retrait pratiques pour vous aider à épargner pour l'avenir.",
    },
    {
      id: 3,
      title: 'Microinsurance',
      description:
        'Protect yourself and your loved ones with our microinsurance products that cover health, accidents, and more.',
    },
    {
      id: 4,
      title: 'Savings Accounts',
      description:
        "Nos comptes d'épargne offrent des taux d'intérêt concurrentiels et des options de retrait pratiques pour vous aider à épargner pour l'avenir.",
    },
    {
      id: 5,
      title: 'Microinsurance',
      description:
        'Nous accordons de petits prêts aux particuliers et aux petites entreprises pour les aider à se développer et à améliorer leurs moyens de subsistance.',
    },
  ]

  return (
    <div
      className='transaction-page'
      style={{
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Helvetica  ',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: '#f0f0f0',
      }}
    >
      <h1>Microfinance Services</h1>
      <div
        style={{
          width: '600px',
          background: '#fff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        {services.map((service) => (
          <div key={service.id} style={{ marginBottom: '20px' }}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesPage
