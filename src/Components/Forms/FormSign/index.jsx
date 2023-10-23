import React from 'react'
import InputEmail from '../../Inputs/InputEmail'
import InputPassword from '../../Inputs/InputPassword'
import ButtonSubmit from '../../Buttons/Submit'
import InputText from '../../Inputs/InputText'

const FormSign = ({handleSubmitSign, sendingRequest, buttonText}) => {
  return (
    <form onSubmit={handleSubmitSign}>
        <div className="mb-10">
            <InputText sendingRequest={sendingRequest}/>
            <InputEmail sendingRequest={sendingRequest}/>
            <InputPassword sendingRequest={sendingRequest} placeholder="Digite sua nova senha"/>
            <InputPassword sendingRequest={sendingRequest} placeholder="Confirme sua senha"/>
        </div>
        <ButtonSubmit textButton={buttonText} sendingRequest={sendingRequest}/>
    </form>
  )
}

export default FormSign