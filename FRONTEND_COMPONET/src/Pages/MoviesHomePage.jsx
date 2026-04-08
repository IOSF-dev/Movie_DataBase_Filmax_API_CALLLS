import React, { useEffect, useState } from 'react'
import { useOutletContext } from "react-router-dom";
import { getAllMovies, searchMovies } from '../Services/ApiFetch';
import MovieCardComponent from "../Components/MovieCardComponent";
import NavComponent from "../Components/NavComponent";

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


  const [data, setData] = useState([]);

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
      <NavComponent
        category={category}
        page={page}
        viewMode={viewMode}
        onCategoryChange={onCategoryChange}
        onPageChange={onPageChange}
        onViewModeChange={onViewModeChange}
      />

      <div className={`mainContainer ${viewMode === "grid" ? "grid" : "list"}`}>
        {!data || data.length === 0 ? (
          <div>
            <h3>Cargando movies...</h3>
          </div>
        ) : (
          data.map((u) => (
            <MovieCardComponent key={u.id} movie={u} viewMode={viewMode} className='cardComponent' />
          ))
        )

        }
      </div>
    </>
  )
}

export default MoviesHomePage;
