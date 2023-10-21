import { NavLink } from "react-router-dom"
import './NavbarPortafolio.css'
import logo from '../assets/img/logo.png'

const NavbarPortafolio = () => {
  return (
    <>
      
        <nav className="navbar">
          <NavLink className="lol" to='/'>Sobre Mi</NavLink>
          <NavLink className="lol" to='/frontendskills'>Habilidades Font-End</NavLink>
          <NavLink className="lol" to='/backendskills'>Habilidades Back-End</NavLink>
          <NavLink className="lol" to='/proyectos'>Proyectos</NavLink>
        </nav>
        <div className="logo">
        <img src={logo}></img>
      </div>
    </>
  )
}

export default NavbarPortafolio