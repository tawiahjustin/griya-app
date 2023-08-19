import React from 'react'

const Factures = () => {
  const supplierInvoices = [
    {
      id: 1,
      invoiceNumber: 'FACTURE-001',
      amount: 500,
      date: '2023-08-01',
    },
    {
      id: 2,
      invoiceNumber: 'FACTURE-002',
      amount: 750,
      date: '2023-08-10',
    },
    {
      id: 3,
      invoiceNumber: 'FACTURE-003',
      amount: 350,
      date: '2023-08-15',
    },
    {
      id: 4,
      invoiceNumber: 'FACTURE-002',
      amount: 730,
      date: '2023-08-10',
    },
    {
      id: 5,
      invoiceNumber: 'FACTURE-003',
      amount: 6055,
      date: '2023-08-15',
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
      <h1>Facture fournisseur</h1>
      <div
        style={{
          width: '600px',
          background: '#fff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>
                Numero Facture
              </th>
              <th style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>
                Montant
              </th>
              <th style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {supplierInvoices.map((invoice) => (
              <tr key={invoice.id}>
                <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>
                  {invoice.invoiceNumber}
                </td>
                <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>
                  {invoice.amount}
                </td>
                <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>
                  {invoice.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Factures
