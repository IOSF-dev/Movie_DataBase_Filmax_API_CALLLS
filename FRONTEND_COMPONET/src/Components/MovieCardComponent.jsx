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
            justifyContent: "end",
            borderRadius: "18px 65% 18px 18px",
            border:"1px solid #000"
          }}
        > <h2 style={{textAlign:"center",fontSize: "35px",color:"#ffd166" }}>{movie.title}</h2>
        <p style={{ margin: 0 }}> <span className='cardDescLabel'>Sinopsis: </span>{movie.overview}</p>
        </div>
      )}
      {viewMode === "list" && !isHover && (

        <div className='container_list'>
          <div className='subList_1'>
            <h2 style={{ marginLeft: "50px", fontSize: "35px",color:"#eee" }}>{movie.title}</h2>
          </div>
          
          <div className='subList_2' >
          <p className='textCard'><span className="cardDescLabel">Estreno: </span>{movie.release_date}</p>
           <p  className='textCard'> <span className='cardDescLabel'> Score:</span> {movie.vote_average} / ({movie.vote_count})</p>
           <p className="cardDescLabel" style={{marginTop:"2%"}}>Sinopis...</p>
          </div>


        </div>
      )}


    </div>


  )
}

export default MovieCardComponent


/*  <p >
              <span className="cardDescLabel">Estreno: </span>
              {movie.release_date}
            </p>
            <p> <span className='cardDescLabel'> Score:</span> {movie.vote_average} / ({movie.vote_count})</p>
            <p className="cardDescLabel">Sinopis...</p>*/