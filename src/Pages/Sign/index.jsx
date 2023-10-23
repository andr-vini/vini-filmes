import { Link } from 'react-router-dom'
import { useState } from 'react'

import Logo from '../../Components/Logo'
import VerticalCard from '../../Components/Cards/VerticalCard'
import FormSign from '../../Components/Forms/FormSign'

const Sign = () => {
  const [buttonText, setButtonText] = useState('Cadastre-se')
  const [sendingRequest, setSendingRequest] = useState(false)

  function handleSubmitSign(event){
    event.preventDefault()
    setSendingRequest(true)
    setButtonText('Registrando usuário...')
  }
  
  return (
    <div className="bg-cover bg-background-wave text-center w-full h-screen">
      <div className="text-white flex items-center justify-center h-full flex-col">
        <div className="mb-5">
          <Logo/>
        </div>
        <VerticalCard titleCard="Cadastre-se">
          <FormSign
            handleSubmitSign={handleSubmitSign}
            sendingRequest={sendingRequest}
            buttonText={buttonText}
          />
          <span>
            Já tem um Login?
            <Link to="/login" className="text-amber-400 underline italic ml-2">Login</Link>
          </span>
        </VerticalCard>
      </div>
    </div>
  )
}

export default Sign