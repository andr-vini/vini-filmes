import { Link } from 'react-router-dom'
import { useState } from 'react'

import Logo from '../../Components/Logo'
import VerticalCard from '../../Components/Cards/VerticalCard'
import FormLogin from '../../Components/Forms/FormLogin'

const Login = () => {
  const [buttonText, setButtonText] = useState('Login')
  const [sendingRequest, setSendingRequest] = useState(false)

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
          <FormLogin 
            handleSubmitLogin={handleSubmitLogin}
            sendingRequest={sendingRequest}
            buttonText={buttonText}
          />
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