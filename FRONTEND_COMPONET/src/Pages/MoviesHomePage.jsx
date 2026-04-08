/////////////////IMPORT COLLECTION/////////////////////////////
import React, { useEffect, useState } from 'react'
import { useOutletContext } from "react-router-dom";
import { getAllMovies, searchMovies } from '../Services/ApiFetch';
import MovieCardComponent from "../Components/MovieCardComponent";
import NavComponent from "../Components/NavComponent";
//////////////////////////////////////////////////////////////////
const MoviesHomePage = () => {
  ////////////////////CONST-COLLECTION//////////////////////
  const {  // Recibimos datos del layout via Outlet context
    category,
    page,
    searchQuery,
    viewMode,
    onCategoryChange,
    onPageChange,
    onViewModeChange
  } = useOutletContext();
  const [movies, setMovies] = useState([]);
  const loadMovies = async () => {
    // Si hay texto de busqueda, usamos search; si no, traemos por categoria
    const aux = searchQuery?.trim()
      ? await searchMovies(searchQuery, page) //si hay texto llama a searchMovies, sino al getAllMovies (con categoria)
      : await getAllMovies(category, page);
    setMovies(aux?.results ?? []);// si hay datos guay, sino dame un array vacio 
  }
  /////////////////////////////////////////////////////////////////
  useEffect(() => {
    // Recargar cuando cambia categoria, pagina o search
    ///creo que me voy enterando de las dependencia que oye el useEffect

    //NOTA PARA ALEX: OYE ME TIENE SIEMPRE EL WARNING DEL VSC SIEMPRE MARCADO EL USEEFFECT LE PREGUNTE A LA ia POR UNA SOLUCION Y EL USEEFFECT QUE ME ENSEÑO ERA GRANDISIMO...NO SE YO ENTENDER TODAVIA COMO ARREGLAR ESTO....ME DA TOC DEL BUENO
    loadMovies();
  }, [category, page, searchQuery])

  return (

    <>
      <NavComponent
        category={category}
        page={page}
        viewMode={viewMode}
        onCategoryChange={onCategoryChange}
        onPageChange={onPageChange}
        onViewModeChange={onViewModeChange}
      />

      <main className={`mainContainer ${viewMode === "grid" ? "grid" : "list"}`}>
        {!movies || movies.length === 0 ? (
          <div>
            <h3>Cargando movies...</h3>
          </div>
        ) : (
          movies.map((u) => (
            <MovieCardComponent key={u.id} movie={u} viewMode={viewMode} className='cardComponent' />
          ))
        )

        }
      </main>
    </>
  )
}

export default MoviesHomePage;
