import React from 'react'

const ButtonSubmit = ({textButton, sendingRequest}) => {
  return (
    <div>
        <button className="bg-black border-2 border-amber-400 w-1/2 py-1 rounded-3xl disabled:opacity-50" disabled={sendingRequest}>{textButton}</button>
    </div>
  )
}

export default ButtonSubmit