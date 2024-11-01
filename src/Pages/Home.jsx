import React from 'react'
import Header from '../Components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/footer/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        {/* <Outlet /> criar e configurar no main */}
        <Footer />
    </div>
  )
}

export default Home