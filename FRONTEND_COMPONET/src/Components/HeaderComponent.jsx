
//import { Link, useNavigate } from "react-router-dom"





const HeaderComponent = () => {
  
  return (
    <header className='headerComponent'>
      
      <section className='headerBar'>

        
        <img   src="../../public/logo.png" alt="" className='headerBar_logo'/>

        <div className="headerBar_box1">
          <p>HOME </p>
          <p>FEATURES</p>
          <p>PRICING</p>
          <p>FAQS</p>
          <p>ABOUT</p>
        </div>


        <div className="headerBar_box2">

          <input type="text" className="INP_SEARCH" placeholder="Titulo de Pelicula...."/>
          <button className="BTN_SEARCH">BUSCAR</button>

        </div>


      </section>

      <nav className='navBar'>
        <div className="navBar_box1">
          <button className="BTN_GRID">grid</button>
          
          <button className="BTN_LIST">list</button>
        </div>
        <div className="navBar_box2">
          <h3>Page 1</h3>
          
        </div>
        <div className="navBar_box3">
          <select name="" id="" className="INP_SLC">
            <option value="">popular</option>
            <option value="">up_coming</option>
            <option value="">now_playing</option>
            <option value="">best_rated</option>
          </select>
        </div>
      </nav>

    </header>
  )
}

export default HeaderComponent

/**
 * import React from 'react'
import {Link, useNavigate} from "react-router-dom"

const NavComponet = () => {
const navigate = useNavigate();


const backToHome = ()=>{navigate ("/");}
const goToCreate = ()=>{navigate("/create");}
const goToContact = ()=>{navigate("/contact")}
const goToProtectedRoute = () =>{navigate("/panel")}
  return (
    
    <nav style ={{ display: "flex", justifyContent:"space-between", border: "2px solid orange" }}>
      <h2>menu</h2>
      
      <button onClick={backToHome}>HOME (RA) </button>
      <br />
      <button onClick={goToProtectedRoute}>Ruta VIP</button>
      <button onClick={goToCreate}>CREATE(C)</button>
      <button onClick={goToContact}>INFO</button>
    </nav>
  )
}

export default NavComponet
 */