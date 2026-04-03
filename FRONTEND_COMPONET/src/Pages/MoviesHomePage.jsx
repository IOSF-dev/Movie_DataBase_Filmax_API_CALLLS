import React, { useEffect, useState } from 'react'
import { useOutletContext } from "react-router-dom";
import { getAllMovies, searchMovies } from '../Services/ApiFetch';
import MovieCardComponent from "../Components/MovieCardComponent";


const MoviesHomePage = () => {
  // Recibimos datos del layout (no Redux) via Outlet context
  const { category, page, searchQuery } = useOutletContext();

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
      <div className='mainContaeiner' >
        {!data || data.length === 0 ? (
            <div>
              <h3>Cargando movies...</h3>
            </div>
        )  :  (
          data.map((u) => (
            <MovieCardComponent key={u.id} movie={u}  className='cardComponent'/>
         ))
         )
         
  }
        </div>
        </>
  )
}

export default MoviesHomePage;
