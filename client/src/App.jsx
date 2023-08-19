import { Routes, Route } from 'react-router-dom'

import './App.css'
import Layout from './components/Layout'
import Connexion from './pages/Connexion'
import Inscription from './pages/Inscription'
import Reglement from './pages/Reglement'
import Dashboard from './pages/Dashboard'
import Depenses from './pages/Depenses'
import Factures from './pages/Factures'
import Portefeuilles from './pages/Portefeuilles'
import TransactionPage from './pages/TransactionPage'
import Credits from './pages/Credits'
import ServicesPage from './pages/ServicesPages'
import Paiement from './pages/Paiement'
import Allocation from './pages/Allocation'
import Recharge from './pages/Recharge'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='/transaction' element={<TransactionPage />} />
        <Route path='/reglement' element={<Reglement />} />
        <Route path='/depense-employes' element={<Depenses />} />
        <Route path='facture-fournisseur' element={<Factures />} />
        <Route path='/allocation-de-fonds' element={<Allocation />} />
        <Route path='/portefeuilles' element={<Portefeuilles />} />
        <Route path='/paiement-salaire' element={<Paiement />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/recharge-compte' element={<Recharge />} />
        <Route path='/credit-finances' element={<Credits />} />
      </Route>
      <Route path='/connexion' element={<Connexion />} />
      <Route path='/inscription' element={<Inscription />} />
    </Routes>
  )
}

export default App
