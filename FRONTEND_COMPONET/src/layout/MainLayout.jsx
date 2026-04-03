import React from 'react'
import {Outlet } from "react-router-dom"
import HeaderComponent from "../Components/HeaderComponent"
import FooterComponent from '../Components/FooterComponent'



const MainLayout = () => {
  return (
      <>
    <HeaderComponent/>
    <Outlet/>
    <FooterComponent/>
    </>
  )
}

export default MainLayout