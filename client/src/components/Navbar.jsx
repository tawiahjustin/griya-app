import React from 'react'
import './components.css'
import Profile from '../assets/logo.png'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__profile'>
        <div className='profile'>
          <img src={Profile} alt='' />
        </div>
        <div className='profile__name'>
          <p>Souroubat CI</p>
          <span>300,000,000 FCFA</span>
        </div>
      </div>
      <ul className='navbar__links'>
        <li>Dashboard</li>
        <li>Transaction</li>
        <div className='division' />
        <li>Allocation de fonds</li>
        <li>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6 icon'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z'
            />
          </svg>
          Paiement salaire
        </li>
        <div className='division' />
        <li>Portefeuilles</li>
        <li>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6 icon'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
            />
          </svg>
          Reglement
        </li>
        <li>Depense Employes</li>
        <li>Facture fournisseur</li>
        <li>Services</li>
        <li>Credit & Finances</li>
      </ul>
      <button>Se deconnecter</button>
    </div>
  )
}

export default Navbar
