import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import './components.css'
const Layout = () => {
  return (
    <main className='layout'>
      <Navbar />
      <Outlet />
    </main>
  )
}

export default Layout
