import React from 'react'
/////////////////////////////////////////////////////////////

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
        {/* AÑADIDO POR MI: columna fantasma para equilibrar el centro */}
        <div className="navBar_Box1-Empty" aria-hidden="true"></div>

        {/* PAGINAS: control simple de paginado */}
        <div className="navBar_Box2">
          <button
            className="navBar_Box2-BackBTN"
            onClick={() => onPageChange(page - 1)}
            disabled={page <= 1}
            aria-label="Página anterior" /* AÑADIDO POR MI */
          >
          </button>

          <h2 className="navBar_Box2-Number">{page}</h2>

          <button
            className="navBar_Box2-FrontBTN"
            onClick={() => onPageChange(page + 1)}
            aria-label="Página siguiente" /* AÑADIDO POR MI */
          >
          </button>
        </div>

        {/* SELECT: categoria actual + cambio de categoria */}
        <div className="navBar_Box3">
          {/* AÑADIDO POR MI: grupo independiente para filtrar mejor el espacio */}
          <div className="navBar_Box3-FilterGroup">
            <span className='navBar_Box3-Label'>Mostrar por:</span>
            <select
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
          </div>

          <div className='navBar_Box4'>
            <span className='navBar_Box3-Label'>Modo de vista:</span>
            <button
              className="navBar_Box4-BTN_GRID"
              onClick={() => onViewModeChange("grid")}
              aria-label="Vista en cuadrícula" /* AÑADIDO POR MI */
            ></button>
            <button
              className="navBar_Box4-BTN_LIST"
              onClick={() => onViewModeChange("list")}
              aria-label="Vista en lista" /* AÑADIDO POR MI */
            ></button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavComponent