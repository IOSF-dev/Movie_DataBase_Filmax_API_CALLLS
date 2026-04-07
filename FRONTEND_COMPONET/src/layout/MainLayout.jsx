import React, { useState } from 'react'
import { Outlet } from "react-router-dom"
import HeaderComponent from "../Components/HeaderComponent"
import FooterComponent from '../Components/FooterComponent'



const MainLayout = () => {
  const [category, setCategory] = useState("now_playing");  // Estado "global" simple del layout (NO Redux): se comparte a hijos via Outlet context

  
  const [page, setPage] = useState(1);// Control de paginado (se reinicia al cambiar categoria o buscar)
  const [searchQuery, setSearchQuery] = useState("");  // Texto de busqueda actual
  const [ viewMode, setViewMode]= useState("grid");

  const handleCategoryChange = (c) => {// Cambiar categoria y volver a pagina 1 (para no quedar en pagina alta)
    setCategory(c);
    setPage(1);
  };
  
  const handleSearchSubmit = (query) => {// Ejecutar busqueda y volver a pagina 1
    setSearchQuery(query);
    setPage(1);
  };
  const handlerView = (v)=>{
    setViewMode(v);
  }

  return (
      <>
    <HeaderComponent
      onSearchSubmit={handleSearchSubmit}
    />
    {/* Pasamos datos y estado a las pages sin Redux, usando context de react-router */}
    <Outlet context={{
      category,
      page,
      searchQuery,
      viewMode,
      onCategoryChange: handleCategoryChange,
      onPageChange: setPage,
      onViewModeChange: handlerView
    }} />

    <FooterComponent/>
    </>
  )
}

export default MainLayout
