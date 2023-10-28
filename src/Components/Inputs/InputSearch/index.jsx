import React, { useRef } from 'react'
import { BsSearch } from 'react-icons/bs';
import './index.css'

const InputSearch = () => {
  const inputRef = useRef();

  function expandInput(event){
    inputRef.current.focus();
  }

  return (
    <div className="flex items-center group relative">
      <span className="mr-3">
        <input type="search" ref={inputRef} className="w-0 px-0 focus:w-48 focus:px-3 focus:translate-x-9 text-black outline-none transition-all ease-in-out origin-left py-1 rounded-md"/>
      </span>
      <span className="search-icon-move duration-300 cursor-pointer">
        <BsSearch className="text-xl" onClick={expandInput}/>
      </span>
    </div>
  )
}

export default InputSearch