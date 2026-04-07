import React, { useEffect, useState } from 'react'
import {  useOutletContext } from "react-router-dom";
import { getAllMovies, searchMovies } from '../Services/ApiFetch';
import MovieCardComponent from "../Components/MovieCardComponent";


const MoviesHomePage = () => {

  // Recibimos datos del layout (no Redux) via Outlet context
    const {
    category,
    page,
    searchQuery,
    viewMode,
    onCategoryChange,
    onPageChange,
    onViewModeChange
  } = useOutletContext();


  const [data,setData] = useState([]);

    const loadMovies = async () => { 
    // Si hay texto de busqueda, usamos search; si no, traemos por categoria
    const aux = searchQuery?.trim()
      ? await searchMovies(searchQuery, page)
      : await getAllMovies(category, page);
    setData(aux?.results ?? []); 
  }
   
    useEffect(() => { 
    // Recargar cuando cambia categoria, pagina o search
    loadMovies(); 
  }, [category, page, searchQuery])

  return (
    
     <>
      <nav className='navBar'>

        <div className="navBar_box1">
      
        </div>

        {/* PAGINAS: control simple de paginado */}
        <div className="navBar_box2">

          <button className="BTN_PAGE_PREV" onClick={() => onPageChange(page - 1)}disabled={page <= 1}>
       
          </button>
          <h2 className="navBar_number">{page}</h2>

          <button
            className="BTN_PAGE_NEXT"
            onClick={() => onPageChange(page + 1)}
          >
          
          </button>
        
        </div>

        
        {/* SELECT: categoria actual + cambio de categoria */}
        <div className="navBar_box3">
         <label className='label_select'> Ordenar por: <select
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
          </label>
             <div className='subBox'>  
        <span className='label_select'>Modo de vista: </span>  
          <button className="BTN_GRID" onClick={() => onViewModeChange ("grid")}></button>
          <button className="BTN_LIST" onClick={() => onViewModeChange ("list")}></button>
        </div>
        </div>
       
      </nav>

      <div  className= { `mainContainer ${viewMode === "grid"? "grid" : "list"}`}>
        {!data || data.length === 0 ? (
            <div>
              <h3>Cargando movies...</h3>
            </div>
        )  :  (
          data.map((u) => (
            <MovieCardComponent key={u.id} movie={u} viewMode={viewMode}  className='cardComponent'/>
         ))
         )
         
  }
        </div>
        </>
  )
}

export default MoviesHomePage;
