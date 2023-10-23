import React from 'react'
const InputPassword = ({sendingRequest, placeholder = 'Digite sua senha'}) => {
  
  return (
    <div className="w-11/12 mx-auto mb-2 group flex flex-col">
      <div>
        <input className="w-full outline-none px-3 py-1 bg-gray-900 focused disabled:opacity-50" type="password" placeholder={placeholder} disabled={sendingRequest}/>
        <div className="relative w-full">
          <span className="absolute right-2 bottom-1">
            <span className="">
            </span>
          </span>
        </div>
      </div>
      <span className="group-focus-within:w-full w-0 bg-amber-400 transition-all ease-in-out duration-300 h-[2px]" ></span>
    </div>
  )
}

export default InputPassword