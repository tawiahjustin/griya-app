import React from 'react'
import { Link } from 'react-router-dom'
import '../components/components.css'
import { TableRow, TableRed, TableYellow } from '../components/TableRow'
const Portefeuilles = () => {
  return (
    <main className='griya__portefeuilles'>
      <header className='griya__portefeuilles-header'>
        <div>
          <p>Portefeuilles</p>
          <p>La liste des operations.</p>
        </div>
        <div className='btn-conatiner'>
          <Link to='/credit-finances'>
            <button className='portefeuilles__btn-black'>
              Demande de credit
            </button>
          </Link>
          <Link to='/recharge-compte'>
            <button className='portefeuilles__btn-blue'>
              Recharge le compte
            </button>
          </Link>
        </div>
      </header>
      <div className='griya__portefeuilles-header input-container'>
        <input type='text' placeholder='Rechercher' />
        <div className='icon'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-6 h-6'
          >
            <path
              fillRule='evenodd'
              d='M3.792 2.938A49.069 49.069 0 0112 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 011.541 1.836v1.044a3 3 0 01-.879 2.121l-6.182 6.182a1.5 1.5 0 00-.439 1.061v2.927a3 3 0 01-1.658 2.684l-1.757.878A.75.75 0 019.75 21v-5.818a1.5 1.5 0 00-.44-1.06L3.13 7.938a3 3 0 01-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836z'
              clipRule='evenodd'
            />
          </svg>
        </div>
      </div>
      <section>
        <table className='table'>
          <tr>
            <th>#</th>
            <th>DATE</th>
            <th>MONTANT</th>
            <th>METHODE DE PAIEMENT</th>
            <th>OPERATEUR</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
          <TableRow />
          <TableYellow />
          <TableRow />
          <TableYellow />
          <TableRow />
          <TableRed />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
        </table>
      </section>
    </main>
  )
}

export default Portefeuilles
