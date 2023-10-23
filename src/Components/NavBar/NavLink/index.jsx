import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = ({path, pathName}) => {
  return (
    <li className="hover:border-amber-400 hover:border-b-2 list-none text-md h-11 cursor-pointer">
      <Link className="h-full block w-full  px-4" to={path}>{pathName}</Link>
    </li>
  )
}

export default NavLink