import React from 'react'
import NavLink from './NavLink'
import './index.css'

const NavBar = ({openResponsiveMenu = false}) => {
  return (
    <div>
      <ul className={`${openResponsiveMenu && 'w-60'} sm:flex block sm:static absolute bottom-0 right-0 sm:h-min h-sub-header transition-all bg-black w-0 py-3 sm:py-0`}>
        <NavLink path="/" pathName="Home"/>
        <NavLink path="/movies" pathName="Filmes"/>
        <NavLink path="/series" pathName="Séries"/>
        <NavLink path="/animations" pathName="Animações"/>
      </ul>
    </div>
  )
}

export default NavBar