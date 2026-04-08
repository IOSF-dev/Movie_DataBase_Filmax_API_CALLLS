import React, { useState }from 'react'
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
  
      
       <div title={movie.title} className= { `cardComponent ${viewMode === "grid"? "column" : "row"}`} style={{
  backgroundImage: `url("${apiConfig.urlImages + movie.poster_path}")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height:"35rem",
    position: "relative",
        transform: isHover ? "scale(1.04)" : "scale(1)",
        transition: "transform 200ms ease",
}}
  onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
onClick={goToDetails}>

            {isHover && (
        <div className='cardHover'
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            color: "#fff",
            padding: "20px",
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between"
          }}
        >
          <h2 style={{ margin: 0 }}>{movie.title}</h2>
          <p style={{ margin: 0 }}> <span className='cardDescLabel'>Sinopsis: </span>{movie.overview}</p>
        </div>
      )}

      {!isHover && (
        <p> <span className='cardDescLabel'> Score:</span> {movie.vote_average} / ({movie.vote_count})</p>
      )}
    
  

            
          </div>
          
  
  )
}

export default MovieCardComponent


/**
 * import React from 'react'
import { useNavigate } from 'react-router-dom';

const UserCardComponent = (props) => {
  const {user } = props;
  const navigate= useNavigate();
   const goToDetails = () => { // funcion que realiza la navegacion a details con el parametro de ID
      navigate(`/details/${user._id}`)
    }
  
  return ( 
              <div style={{display:"flex",alignItems:"center", border:"2px solid black", margin:"20px", justifyContent:"space-evenly" }}>
              <p>ID: {user._id}</p>
              <p>Nombre: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>{user.checked ? "Verificado" : "No verificado"}</p>
              <button onClick={goToDetails}>Detalles (R)</button>
            </div>
  )
  
}

export default UserCardComponent
 */
