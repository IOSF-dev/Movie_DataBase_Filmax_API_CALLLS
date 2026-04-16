/////////////////IMPORT COLLECTION/////////////////////////////
import React, { useState } from 'react'
import { Outlet } from "react-router-dom"
import HeaderComponent from "../Components/HeaderComponent"
import FooterComponent from '../Components/FooterComponent'
///////////////////////////////////////////////////////////////////////////////////


const MainLayout = () => {
  ////////////////////CONST-COLLECTION//////////////////////
  const [category, setCategory] = useState("now_playing");// Estado global simple del layout; se comparte vía Outlet context.
  const [page, setPage] = useState(1);// Control de paginado (se reinicia al cambiar categoría o buscar).
  const [searchQuery, setSearchQuery] = useState("");  // Texto de búsqueda actual.
  const [viewMode, setViewMode] = useState("grid");// Control de vista por defecto: grid.
  /////////////////HANDLERS//////////////////////////////////////////////////////
  const handleCategoryChange = (c) => {// Cambiar categoría y volver a la página 1.
    setCategory(c);
    setPage(1);
  };

  const handleSearchSubmit = (query) => {// Ejecutar búsqueda y volver a la página 1.
    setSearchQuery(query);
    setPage(1);
  };
  const handlerView = (v) => { /// Handler del grid/list.
    setViewMode(v);
  }

  return (
    <>
      <HeaderComponent
        onSearchSubmit={handleSearchSubmit}
      />
      {/* Pasamos datos y estado a las páginas usando context de react-router.

      NOTA PARA ALEJANDRO: me hice un lío con los props y no sabía cómo pasar cosas a los hijos. Miré el primer vídeo de Redux, hablas del context y se lo pregunté a la IA. Me lo explicó y me pareció una forma fácil de no liarla mucho. Lo he usado en todo el flujo de la app. Ejemplo: main -> home -> nav -> botón grid -> main cambia handler. */}
      <Outlet context={{
        category,
        page,
        searchQuery,
        viewMode,
        onCategoryChange: handleCategoryChange,
        onPageChange: setPage,
        onViewModeChange: handlerView
      }} />

      <FooterComponent />
    </>
  )
}

export default MainLayout
