import React from 'react'
import InputEmail from '../../Inputs/InputEmail'
import InputPassword from '../../Inputs/InputPassword'
import ButtonSubmit from '../../Buttons/Submit'

const FormLogin = ({handleSubmitLogin, sendingRequest, buttonText}) => {
  return (
    <form onSubmit={handleSubmitLogin}>
        <div className="mb-10">
            <InputEmail sendingRequest={sendingRequest}/>
            <InputPassword sendingRequest={sendingRequest}/>
        </div>
        <ButtonSubmit textButton={buttonText} sendingRequest={sendingRequest}/>
    </form>
  )
}

export default FormLogin