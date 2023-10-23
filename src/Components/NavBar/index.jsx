import React from 'react'
import NavLink from './NavLink'

const NavBar = () => {
  return (
    <div>
      <ul className="flex">
        <NavLink path="/" pathName="Home"/>
        <NavLink path="/movies" pathName="Filmes"/>
        <NavLink path="/series" pathName="Séries"/>
        <NavLink path="/animations" pathName="Animações"/>
      </ul>
    </div>
  )
}

export default NavBar