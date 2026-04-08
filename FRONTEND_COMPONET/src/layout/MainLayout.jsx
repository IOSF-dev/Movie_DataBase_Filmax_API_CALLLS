/////////////////IMPORT COLLECTION/////////////////////////////
import React, { useState } from 'react'
import { Outlet } from "react-router-dom"
import HeaderComponent from "../Components/HeaderComponent"
import FooterComponent from '../Components/FooterComponent'
///////////////////////////////////////////////////////////////////////////////////


const MainLayout = () => {
////////////////////CONST-COLLECTION//////////////////////
  const [category, setCategory] = useState("now_playing");//Estado global simple del layout se comparte via Outlet context
  const [page, setPage] = useState(1);// Control de paginado (se reinicia al cambiar categoria o buscar)
  const [searchQuery, setSearchQuery] = useState("");  // Texto de busqueda actual
  const [ viewMode, setViewMode]= useState("grid");// control del view por defecto grid
/////////////////HANDLERS//////////////////////////////////////////////////////
  const handleCategoryChange = (c) => {// Cambiar categoria y volver a pagina 1 
    setCategory(c);
    setPage(1);
  };
  
  const handleSearchSubmit = (query) => {// Ejecutar busqueda y volver a pagina 1
    setSearchQuery(query);
    setPage(1);
  };
  const handlerView = (v)=>{ /// el handler del grid/list
    setViewMode(v);
  }

  return (
      <>
    <HeaderComponent
      onSearchSubmit={handleSearchSubmit}
    />
    {/* Pasamos datos y estado a las pages, usando context de react-router 
    
    NOTA PARA ALEJANDRO:  me hice la picha un lio con los props y no sabia como pasarle cosas a los hijos me mire el primer video de redux, hablas del context y le pregunte a la IA y me lo explico , y me parecio "facil" sin liarla mucho , lo he usado en todo el flujo de la app  EJ: main->home->nav->button grid->main cambia handler */}
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
