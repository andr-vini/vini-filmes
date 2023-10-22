import React from 'react'

const VerticalCard = ({children, titleCard}) => {
  return (
    <div className="sm:w-[400px] bg-zinc-950 h-1/2 transition-all duration-1000 rounded-2xl">
      <div className="py-4 px-3 flex justify-between flex-col h-full">
        <h1 className="text-2xl text-white">{titleCard}</h1>
        {children}
      </div>
    </div>
  )
}

export default VerticalCard