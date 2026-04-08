import React from 'react'

const NavComponent = ({
  category,
  page,
  onCategoryChange,
  onPageChange,
  onViewModeChange,
}) => {


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
         <span className='label_select'> Mostrar por:</span><select
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
          
             <div className='subBox'>  
        <span className='label_select'>Modo de vista: </span>  
          <button className="BTN_GRID" onClick={() => onViewModeChange ("grid")}></button>
          <button className="BTN_LIST" onClick={() => onViewModeChange ("list")}></button>
        </div>
        </div>
       
      </nav>
    </>
  )
}

export default NavComponent