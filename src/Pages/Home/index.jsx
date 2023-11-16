import React from 'react'
import Header from '../../Components/Header'
import Carousel from '../../Components/Carousel'

const Home = () => {
  return (
    <div className="bg-black text-white h-screen">
        <Header/>
        <Carousel data={ {datafirst: 'teste', datasecond:'teste'} }/>
    </div>
  )
}

export default Home