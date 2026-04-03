import React from 'react'
import { apiConfig } from '../Services/ApiConfig';

const MovieCardComponent = (props) => {
  const { movie } = props;
  return (
    <div>
      
       <div  className='cardComponent' >
            <div ><img src={apiConfig.urlImages+movie.poster_path} alt="" className='cardPoster' /></div>
            <h2>{movie.title}</h2>
            <p><span>Score: {movie.vote_average} / Votos:{movie.vote_count} -</span>-Año: {movie.release_date}</p>
            <p style={{margin:"10px"}}><span style={{fontSize:"20px", fontWeight:"700"}}>Descripcion:</span > {movie.overview}</p>
          </div>
          
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