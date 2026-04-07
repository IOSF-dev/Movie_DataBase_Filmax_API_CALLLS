
import { useState } from "react"
import { useNavigate } from "react-router-dom";





const HeaderComponent = ({  onSearchSubmit }) => {
  // SEARCH: estado local del input (no Redux, solo React)
  const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();
  const goHome = () => {
    navigate("/")
  }
  
  return (
    <header className='headerComponent'>
      <section className='headerBar'>
        <div className="logoBox">
        <img src="/logo2.svg" alt="" className='headerBar_logo'  onClick={goHome}/>
        </div>
        <div className="headerBar_box1">
          <p onClick={goHome} style={{color:"#ffd166", cursor: "pointer"}}>HOME </p>
          <p style={{ cursor: "pointer"}}>FEATURES</p>
          <p style={{ cursor: "pointer"}}>PRICING</p>
          <p style={{ cursor: "pointer"}}>FAQS</p>
          <p onClick={goHome} style={{color:"#ffd166", cursor: "pointer"}}>ABOUT US</p>
        </div>


        <div className="headerBar_box2">

          {/* SEARCH: input controlado con value + onChange */}
          <input
            type="text"
            className="INP_SEARCH"
            placeholder="Titulo de Pelicula...."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {/* SEARCH: enviamos el texto al padre para disparar la busqueda */}
          <button
            className="BTN_SEARCH"
            onClick={() => onSearchSubmit(searchText)}
          >
            BUSCAR
          </button>

        </div>


      </section>



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
