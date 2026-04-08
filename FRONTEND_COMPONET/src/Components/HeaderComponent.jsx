/////////////////IMPORT COLLECTION/////////////////////////////
import { useState } from "react"
import { useNavigate } from "react-router-dom";
///////////////////////////////////////////////////////////////////////////////////




const HeaderComponent = ({ onSearchSubmit }) => {
  ////////////////////CONST-COLLECTION//////////////////////
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const goHome = () => { navigate("/") }
////////////////////////////////////////////////////////////////////////////////////

  return (
    <header className='headerComponent'>
      <nav className='header_Nav'>
        <div className="header_Logo-Box">
          <img title="Logo Filmax" src="/logo2.svg" alt="Comercial Logo of Filmax Company" className='header_Logo' onClick={goHome} />
        </div>
        <div className="header_Nav-Box1">
          <p className="header_Box1-Item--A" onClick={goHome} >HOME </p>
          <p className="header_Box1-Item--B" style={{ cursor: "pointer" }}>FEATURES</p>
          <p className="header_Box1-Item--B" style={{ cursor: "pointer" }}>PRICING</p>
          <p className="header_Box1-Item--B" style={{ cursor: "pointer" }}>FAQS</p>
          <p className="header_Box1-Item--A" onClick={goHome} >ABOUT US</p>
        </div>


        <div className="header_Box2">

          {/* SEARCH: input controlado con value + onChange */}
          <input
            type="text"
            className="header_Box2-Item--A"
            placeholder=" Titulo de Pelicula...."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {/* SEARCH: enviamos el texto al padre para disparar la busqueda */}
          <button
            className="header_Box2-Item--B"
            onClick={() => onSearchSubmit(searchText)}
          >
            BUSCAR
          </button>

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
