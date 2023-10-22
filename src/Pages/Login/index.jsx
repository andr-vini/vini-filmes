import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import VerticalCard from '../../Components/Cards/VerticalCard'
import InputEmail from '../../Components/Forms/Inputs/InputEmail'
import InputPassword from '../../Components/Forms/Inputs/InputPassword'
import Logo from '../../Components/Logo'
import ButtonSubmit from '../../Components/Forms/Buttons/Submit'

const Login = () => {
  const [buttonText, setButtonText] = useState('Login');
  const [sendingRequest, setSendingRequest] = useState(false);

  function handleSubmitLogin(event){
    event.preventDefault();
    setSendingRequest(true)
    setButtonText('Fazendo Login...')
  }

  return (
    <div className="bg-cover bg-background-wave text-center w-full h-screen">
      <div className="text-white flex items-center justify-center h-full flex-col">
        <div className="mb-5">
          <Logo/>
        </div>
        <VerticalCard titleCard="Faça Login">
          <form onSubmit={handleSubmitLogin}>
            <div className="mb-10">
              <InputEmail sendingRequest={sendingRequest}/>
              <InputPassword sendingRequest={sendingRequest}/>
            </div>
            <ButtonSubmit textButton={buttonText} sendingRequest={sendingRequest}/>
          </form>
          <span>
            Ainda não tem Login? 
            <Link to="/sign" className="text-amber-400 underline italic ml-2">Cadastre-se</Link>
          </span>
        </VerticalCard>
      </div>
    </div>
  )
}

export default Login