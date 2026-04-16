/////////////////IMPORT COLLECTION/////////////////////////////
import React, { useEffect, useState } from 'react'
import { useOutletContext } from "react-router-dom";
import { getAllMovies, searchMovies } from '../Services/ApiFetch';
import MovieCardComponent from "../Components/MovieCardComponent";
import NavComponent from "../Components/NavComponent";
//////////////////////////////////////////////////////////////////
const MoviesHomePage = () => {
  ////////////////////CONST-COLLECTION//////////////////////
  const {  // Recibimos datos del layout vía Outlet context
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
    // Si hay texto de búsqueda, usamos search; si no, traemos por categoría.
    const aux = searchQuery?.trim()
      ? await searchMovies(searchQuery, page) // Si hay texto, llama a searchMovies; si no, a getAllMovies (con categoría).
      : await getAllMovies(category, page);
    setMovies(aux?.results ?? []); // Si hay datos, genial; si no, devuelve un array vacío.
  }
  /////////////////////////////////////////////////////////////////
  useEffect(() => {
    // Recargar cuando cambian categoría, página o búsqueda.
    // Creo que me voy enterando de las dependencias que escucha el useEffect.

    // NOTA PARA ALEX: VSC me marca siempre un warning con useEffect. Le pregunté a la IA por una solución y el ejemplo que me enseñó era enorme. Aún no termino de entender cómo arreglarlo.
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
            <h3>Cargando películas...</h3>
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
