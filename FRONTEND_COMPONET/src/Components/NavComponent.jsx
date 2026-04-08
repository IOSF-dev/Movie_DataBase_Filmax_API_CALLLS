/////////////////IMPORT COLLECTION/////////////////////////////
import React from 'react'
/////////////////////////////////////////////////////////////

const NavComponent = ({ // Recibimos datos del layout via Outlet context
  category,
  page,
  onCategoryChange,
  onPageChange,
  onViewModeChange,
}) => {


  return (
    <>
      <nav className='navBar'>

        <div className="navBar_Box1-Empty">

        </div>

        {/* PAGINAS: control simple de paginado */}
        <div className="navBar_Box2">

          <button className="navBar_Box2-BackBTN" onClick={() => onPageChange(page - 1)} disabled={page <= 1}>

          </button>
          <h2 className="navBar_Box2-Number">{page}</h2>
          <button
            className="navBar_Box2-FrontBTN"
            onClick={() => onPageChange(page + 1)}
          >

          </button>

        </div>


        {/* SELECT: categoria actual + cambio de categoria */}
        <div className="navBar_Box3">
          <span className='navBar_Box3-Label'> Mostrar por:</span><select
            name="category"
            id="category"
            className="navBar_Box3-Select"
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            <option value="popular">Populares</option>
            <option value="upcoming">Proximamente</option>
            <option value="now_playing">En Cartelera</option>
            <option value="top_rated">Mejor Valoradas</option>
          </select>

          <div className='navBar_Box4'>
            <span className='navBar_Box3-Label'>Modo de vista: </span>
            <button className="navBar_Box4-BTN_GRID" onClick={() => onViewModeChange("grid")}></button>
            <button className="navBar_Box4-BTN_LIST" onClick={() => onViewModeChange("list")}></button>
          </div>
        </div>

      </nav>
    </>
  )
}

export default NavComponent