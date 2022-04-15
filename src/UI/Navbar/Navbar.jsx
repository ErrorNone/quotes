import React from 'react'
import { Link } from 'react-router-dom'
import cl from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={cl.nav}>
      <Link className={cl.link} to="/main">Главная</Link>
  </nav>
  )
}

export default Navbar