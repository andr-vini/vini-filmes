import React from 'react'
import NavBar from '../NavBar'
import Logo from '../Logo'
import InputSearch from '../Inputs/InputSearch'

const Header = () => {
  return (
    <div className="bg-transparent flex pt-6 pb-4 px-5 justify-between items-center border-b-2 border-blue-500">
      <div className="flex">
        <div className="flex text-3xl">
            <Logo/>
            <span className="relative top-1"> <span className="text-amber-400">ini</span> Filmes</span>
        </div>
        <div className="ms-14 relative top-3.5">
            <NavBar/>
        </div>
      </div>
      <div>
        <InputSearch/>
      </div>
    </div>
  )
}

export default Header