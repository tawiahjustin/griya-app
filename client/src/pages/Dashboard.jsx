import React from 'react'

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Main Content */}
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Welcome to the Dashboard</h1>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridGap: '30px',
          }}
        >
          <div
            style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '4px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3>Card 1</h3>
            <p>This is card 1 content.</p>
          </div>
          <div
            style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '4px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3>Card 2</h3>
            <p>This is card 2 content.</p>
          </div>
          <div
            style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '4px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3>Card 3</h3>
            <p>This is card 3 content.</p>
          </div>
          <div
            style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '4px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3>Card 4</h3>
            <p>This is card 4 content.</p>
          </div>
          <div
            style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '4px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3>Card 5</h3>
            <p>This is card 5 content.</p>
          </div>{' '}
          <div
            style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '4px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3>Card 6</h3>
            <p>This is card 6 content.</p>
          </div>{' '}
          <div
            style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '4px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3>Card 7</h3>
            <p>This is card 7 content.</p>
          </div>{' '}
          <div
            style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '4px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3>Card 8</h3>
            <p>This is card 8 content.</p>
          </div>{' '}
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Dashboard
