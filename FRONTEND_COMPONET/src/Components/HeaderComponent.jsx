
import { useState } from "react"





const HeaderComponent = ({ category, onCategoryChange, page, onPageChange, onSearchSubmit, onViewModeChange  }) => {
  // SEARCH: estado local del input (no Redux, solo React)
  const [searchText, setSearchText] = useState("");
  
  return (
    <header className='headerComponent'>
      <section className='headerBar'>
        <img src="/logo.png" alt="" className='headerBar_logo'/>
        <div className="headerBar_box1">
          <p>HOME </p>
          <p>FEATURES</p>
          <p>PRICING</p>
          <p>FAQS</p>
          <p>ABOUT</p>
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

      <nav className='navBar'>
        <div className="navBar_box1">
          <button className="BTN_GRID" onClick={() => onViewModeChange ("grid")}>grid</button>
          
          <button className="BTN_LIST" onClick={() => onViewModeChange ("list")}>list</button>
        </div>
        {/* PAGINAS: control simple de paginado */}
        <div className="navBar_box2">

          <button className="BTN_PAGE_PREV" onClick={() => onPageChange(page - 1)}disabled={page <= 1}>
           ←
          </button>
          <h2 className="navBar_number">{page}</h2>

          <button
            className="BTN_PAGE_NEXT"
            onClick={() => onPageChange(page + 1)}
          >
            →
          </button>
          
        </div>
        {/* SELECT: categoria actual + cambio de categoria */}
        <div className="navBar_box3">
          <select
            name="category"
            id="category"
            className="INP_SLC"
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            <option value="popular">Populares</option>
            <option value="upcoming">Proximamente</option>
            <option value="now_playing">En Cartelera</option>
            <option value="top_rated">Mejor Valoradas</option>
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
