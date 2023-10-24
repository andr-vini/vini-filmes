import { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

const InputPassword = ({sendingRequest, placeholder = 'Digite sua senha'}) => {
  const [passVisible, setPassVisible] = useState(false);
  
  function setVisibility(event){
    if(!passVisible){
      setPassVisible(true);
      return;
    }
    setPassVisible(false)
  }
  
  function showIconVisibilityPassword(event){
    return passVisible ? <AiOutlineEye className="text-amber-400 text-2xl"/> : <AiOutlineEyeInvisible className="text-amber-400 text-2xl"/>
  }
  
  return (
    <div className="w-11/12 mx-auto mb-2 group flex flex-col">
      <div>
        <input id="password" className="w-full outline-none px-3 py-1 bg-gray-900 focused disabled:opacity-50" type={passVisible ? "text" : "password"} placeholder={placeholder} disabled={sendingRequest}/>
        <div className="relative w-full">
          <span className="absolute right-2 bottom-1 cursor-pointer">
            <span onClick={setVisibility}>
              {showIconVisibilityPassword()}
            </span>
          </span>
        </div>
      </div>
      <span className="group-focus-within:w-full w-0 bg-amber-400 transition-all ease-in-out duration-300 h-[2px]" ></span>
    </div>
  )
}

export default InputPassword