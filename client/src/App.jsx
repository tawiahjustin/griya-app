import { Routes, Route } from 'react-router-dom'

import './App.css'
import Layout from './components/Layout'
import Connexion from './pages/Connexion'
import Inscription from './pages/Inscription'
import Acceuil from './pages/Acceuil'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Acceuil />} />
      </Route>
      <Route path='/connexion' element={<Connexion />} />
      <Route path='/inscription' element={<Inscription />} />
    </Routes>
  )
}

export default App
