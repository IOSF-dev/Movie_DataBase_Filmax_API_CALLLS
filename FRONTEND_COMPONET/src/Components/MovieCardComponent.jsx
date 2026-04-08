////////////////////////////////////////////////////////////////
import React, { useState } from 'react'
import { apiConfig } from '../Services/ApiConfig';
import { useNavigate } from 'react-router-dom';
////////////////////////////////////////////////////////////////////

const MovieCardComponent = (props) => {
  /*NOTA PARA ALEX: OYE AQUI USE EL PROPS ES EL UNICO SITIO DONDE LO HE USADO, PERO PORQUE LO VI CLARO GRACIAS AL VIDEO 56 DE REACT, EJERCICIO LISTUSER, DE OTRA FORMA LO VEO MAS "CLARO" EL CONTEXT, NO SE SI ES BUENA O MALA PRACTICA SI ESTA BIEN O ME ESTOY HACIENDO LA PICHA UN LIO. SI PUDIERAS DARME ALGUN EJERCIO PARA ESOS DOS HOOKS ESTARIA ENCANTADO*/
  ////////////////////////////////////////////////////////////
  const [isHover, setIsHover] = useState(false);
  const { movie, viewMode } = props;
  const navigate = useNavigate()
  const goToDetails = () => { // funcion que realiza la navegacion a details con el parametro de ID
    navigate(`/details/${movie.id}`)
  }

  return (


    <div
      title={movie.title}
      className={`cardComponent ${viewMode === "grid" ? "column" : "row"}`}
      style={{
        backgroundImage: `url("${apiConfig.urlImages + movie.poster_path}")`,
        
        transform: isHover ? "scale(1.04)" : "scale(1)",
        
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={goToDetails}>

      {viewMode === "grid" && isHover && (
        <div className='cardComponent_Hover' >
          <h2 className='cardComponent_Hover-Title' >{movie.title}</h2>
          <p className='cardComponent_Hover-Desc'> <span className='cardComponent_Desc-Label'>Sinopsis: </span>{movie.overview}</p>
        </div>
      )}

      {viewMode === "grid" && !isHover && (
        <p className='cardComponent_Score'> <span className='cardComponent_Desc-Label'> Score:</span> {movie.vote_average} / ({movie.vote_count})</p>
      )}
      {viewMode === "list" && isHover && (
        <div className='cardComponent_Hover'
          style={{
            justifyContent: "space-between",
            borderRadius: "18px 65% 18px 18px",
            border:"1px solid #000"
          }}
        > <h2 className='cardComponent_Hover-Title'>{movie.title}</h2>
        <p className='cardComponent_Hover-Desc'> <span className='cardComponent_Desc-Label' >Sinopsis: </span>{movie.overview}</p>
        </div>
      )}
      {viewMode === "list" && !isHover && (

        <div className='cardContainer_List'>
          <div className='cardContainer_List-Box1'>
            <h2 className='cardContainer_List-Title'>{movie.title}</h2>
          </div>
          
          <div className='cardContainer_List-Box2' >
          <p className='cardContainer_List-Box2--Text'><span className="cardComponent_Desc-Label">Estreno: </span>{movie.release_date}</p>
           <p  className='cardContainer_List-Box2--Text'> <span className='cardComponent_Desc-Label'> Score:</span> {movie.vote_average} / ({movie.vote_count})</p>
           <p className="cardComponent_Desc-Label" style={{marginTop:"2%"}}>Sinopsis...</p>
          </div>
        </div>
      )}
    </div>
  )
}
export default MovieCardComponent