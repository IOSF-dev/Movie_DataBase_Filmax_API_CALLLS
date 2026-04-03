import React from 'react'

const MovieCardComponent = () => {
  return (
    <div>MovieCardComponent</div>
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