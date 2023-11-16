import React from 'react'
const Image = ({path}) => {
  const background = `bg-[url(${path})]`
  return (
    <div className="h-44 mx-2 min-w-fit">
      <img src={path} alt="" className="h-full"/>
    </div>
  )
}

export default Image