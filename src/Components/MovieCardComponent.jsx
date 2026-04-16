////////////////////////////////////////////////////////////////
import React, { useState } from 'react'
import { apiConfig } from '../Services/ApiConfig';
import { useNavigate } from 'react-router-dom';
////////////////////////////////////////////////////////////////////
// Codex añadió un mapa para traducir los géneros.
const genreMap = {
  28: "Acción",
  12: "Aventura",
  16: "Animación",
  35: "Comedia",
  80: "Crimen",
  99: "Documental",
  18: "Drama",
  10751: "Familiar",
  14: "Fantasía",
  36: "Historia",
  27: "Terror",
  10402: "Música",
  9648: "Misterio",
  10749: "Romance",
  878: "Ciencia ficción",
  10770: "TV Movie",
  53: "Thriller",
  10752: "Bélica",
  37: "Western"
};
const MovieCardComponent = (props) => {
  /* NOTA PARA ALEX: aquí usé props; es el único sitio donde lo he usado porque lo vi claro gracias al vídeo 56 de React, ejercicio ListUser. De otra forma veo más claro el context. No sé si es buena o mala práctica o si me estoy haciendo un lío. Si pudieras darme algún ejercicio para esos dos hooks, estaría encantado. */
  ////////////////////////////////////////////////////////////
  const [isHover, setIsHover] = useState(false);
  const { movie, viewMode } = props;
  const navigate = useNavigate()
   const movieGenres = movie.genre_ids
  ?.map((id) => genreMap[id])
  .filter(Boolean)
  .slice(0, 2) ?? []; // Codex añadió el mapeo.
  const goToDetails = () => { // Función que realiza la navegación a details con el parámetro de ID.
    navigate(`/details/${movie.id}`)
  }

  return (


    <section
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
        <section className='cardComponent_Hover' >
          <h2 className='cardComponent_Hover-Title' >{movie.title}</h2>
          <p className='cardComponent_Hover-Desc'> <span className='cardComponent_Desc-Label'>Sinopsis: </span>{movie.overview}</p>
        </section>
      )}

      {viewMode === "grid" && !isHover && (
        <p className='cardComponent_Score'> <span className='cardComponent_Desc-Label'> Score:</span> {movie.vote_average} / ({movie.vote_count})</p>
      )}
      {viewMode === "list" && isHover && (
        <section className='cardComponent_Hover'
          style={{
            justifyContent: "space-between",
            borderRadius: "18px 65% 18px 18px",
            border: "1px solid #000"
          }}
        > <h2 className='cardComponent_Hover-Title'>{movie.title}</h2>
          <p className='cardComponent_Hover-Desc'> <span className='cardComponent_Desc-Label' >Sinopsis: </span>{movie.overview}</p>
        </section>
      )}
      {viewMode === "list" && !isHover && (

        <section className='cardContainer_List'>
          <div className='cardContainer_List-Box1'>
            <h2 className='cardContainer_List-Title'>{movie.title}</h2>
          </div>
 <div className='cardContainer_List-GenresBox'>
              <span className='cardComponent_Desc-Label'>Géneros: </span>
              <span className='cardContainer_List-GenresText'>
                {movieGenres.length > 0 ? movieGenres.join(" - ") : "No disponible"}
              </span>
            </div>
          <div className='cardContainer_List-Box2' >
            <p className='cardContainer_List-Box2--Text'><span className="cardComponent_Desc-Label">Estreno: </span>{movie.release_date}</p>
            <p className='cardContainer_List-Box2--Text'> <span className='cardComponent_Desc-Label'> Score:</span> {movie.vote_average} / ({movie.vote_count})</p>
             
            <p className="cardComponent_Desc-Label" >Sinopsis...</p>
          </div>
        </section>
      )}
    </section>
  )
}
export default MovieCardComponent
