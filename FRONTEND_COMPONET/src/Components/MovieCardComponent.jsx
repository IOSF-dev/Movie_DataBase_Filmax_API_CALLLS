import React, { useState } from 'react'
import { apiConfig } from '../Services/ApiConfig';
import { useNavigate } from 'react-router-dom';

//// to save to fix :  <p className='cardBox2_des' style={{margin:"10px"}}><span className="cardDescLabel">Descripcion:</span> {movie.overview}</p>           <div className="cardMedia" ></div> <img src={apiConfig.urlImages+movie.poster_path} alt={movie.title || "Poster"} className='cardPoster' /> 
const MovieCardComponent = (props) => {
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
        position: "relative",
        transform: isHover ? "scale(1.04)" : "scale(1)",
        transition: "transform 200ms ease",
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={goToDetails}>

      {viewMode === "grid" && isHover && (
        <div className='cardHover'
          style={{
            position: "absolute",
            inset: 0,
            background: "#000000a4",
            color: "#fff",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: "16px",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "28px" }}>{movie.title}</h2>
          <p style={{ margin: 0 }}> <span className='cardDescLabel'>Sinopsis: </span>{movie.overview}</p>
        </div>
      )}

      {viewMode === "grid" && !isHover && (
        <p className='scoreCard'> <span className='cardDescLabel'> Score:</span> {movie.vote_average} / ({movie.vote_count})</p>
      )}
  {viewMode === "list" && isHover && (
     <div className='cardHover'
          style={{
            position: "absolute",
            inset: 0,
            background: "#000000a4",
            color: "#fff",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: "16px",
          }}
        > <p style={{ margin: 0 }}> <span className='cardDescLabel'>Sinopsis: </span>{movie.overview}</p>
</div>
  )}
{viewMode === "list" && !isHover &&(
  <div>
<h2 style={{ margin: 0, fontSize: "28px" }}>{movie.title}</h2>
 <p className="cardText">
              <span className="cardDescLabel">Estreno: </span>
              {movie.release_date}
            </p>
<p className='scoreCard'> <span className='cardDescLabel'> Score:</span> {movie.vote_average} / ({movie.vote_count})</p>
         

  </div>
   )}


    </div>


  )
}

export default MovieCardComponent


