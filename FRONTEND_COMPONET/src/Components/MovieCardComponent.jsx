import React from 'react'
import { apiConfig } from '../Services/ApiConfig';

const MovieCardComponent = (props) => {
  const { movie, viewMode } = props;
  return (
  
      
       <div title={movie.title} className= { `cardComponent ${viewMode === "grid"? "column" : "row"}`}>
            <div className="cardMedia">
              <img src={apiConfig.urlImages+movie.poster_path} alt={movie.title || "Poster"} className='cardPoster' />  
            </div>
            <div className='cardBox0'>

               <div className='cardBox1'>
              <p><span>Score: {movie.vote_average} / Votos:{movie.vote_count} -</span>-Ano: {movie.release_date}</p>
            </div>
            <div className='cardBox2'>
              <p className='cardBox2_des' style={{margin:"10px"}}><span className="cardDescLabel">Descripcion:</span> {movie.overview}</p>
            </div>
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
