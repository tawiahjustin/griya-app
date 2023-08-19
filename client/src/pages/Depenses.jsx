import React from 'react'

const Depenses = () => {
  const employeeExpenses = [
    {
      id: 1,
      name: 'John Doe',
      expenseAmount: 500,
    },
    {
      id: 2,
      name: 'Jane Smith',
      expenseAmount: 750,
    },
    {
      id: 3,
      name: 'Mike Johnson',
      expenseAmount: 600,
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
      <h1>Depenses Employes</h1>
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
                Nom de l'employé
              </th>
              <th style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>
                Montant des dépenses
              </th>
            </tr>
          </thead>
          <tbody>
            {employeeExpenses.map((employee) => (
              <tr key={employee.id}>
                <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>
                  {employee.name}
                </td>
                <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>
                  {employee.expenseAmount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Depenses
