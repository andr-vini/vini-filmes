import React from 'react'
import NavLink from './NavLink'
import './index.css'

const NavBar = ({openResponsiveMenu = false}) => {
  return (
    <div>
      <ul className={`${openResponsiveMenu ? 'block absolute right-0 bottom-0 h-sub-header w-60' : 'hidden'} sm:flex bg-black `}>
        <NavLink path="/" pathName="Home"/>
        <NavLink path="/movies" pathName="Filmes"/>
        <NavLink path="/series" pathName="Séries"/>
        <NavLink path="/animations" pathName="Animações"/>
      </ul>
    </div>
  )
}

export default NavBar