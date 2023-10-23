import React from 'react'

const InputText = ({sendingRequest, placeholder = 'Digite o nome de Usuário'}) => {
  return (
    <div className="w-11/12 mx-auto mb-2 group flex flex-col">
      <input className="w-full outline-none px-3 py-1 bg-gray-900 focused disabled:opacity-50" type="text" placeholder={placeholder} disabled={sendingRequest}/>
      <span className="group-focus-within:w-full w-0 bg-amber-400 transition-all ease-in-out duration-300 h-[2px]"></span>
    </div>
  )
}

export default InputText