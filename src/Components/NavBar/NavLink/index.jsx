import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = ({path, pathName}) => {
  return (
    <li className="group list-none text-md h-9 cursor-pointer">
      <Link className="h-full block w-full px-4" to={path}>{pathName}</Link>
      <span className="group-hover:w-full sm:static relative -top-1.5 w-0 h-0.5 bg-amber-400 block transition-all mx-auto duration-400"></span>
    </li>
  )
}

export default NavLink