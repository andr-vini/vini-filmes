import React, { useRef, useState } from 'react'
import NavBar from '../NavBar'
import Logo from '../Logo'
import InputSearch from '../Inputs/InputSearch'
import { AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  function openMenu(){
    if(!menuOpened){
      setMenuOpened(true)
      return;
    }
    setMenuOpened(false)
  }

  return (
    <div className="bg-transparent flex pt-6 pb-4 px-5 justify-between items-center border-b-2 border-blue-500">
      <div className="flex justify-between flex-wrap w-full">
        <div className="flex text-3xl">
            <Logo/>
            <span className="relative top-1"> <span className="text-amber-400">ini</span> Filmes</span>
        </div>
        <div className="sm:ms-14 sm:flex-1 sm:relative top-3.5">
            <NavBar openResponsiveMenu={menuOpened}/>
        </div>
        <div className="flex flex-wrap-reverse sm:top-2 relative top-3.5">
          <span className="sm:block sm:static order-2 relative bottom-1">
            <InputSearch/>
          </span>
          <span className="sm:hidden sm:order-none cursor-pointer ms-3" onClick={openMenu}>
            <AiOutlineMenu className="text-2xl"/>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header