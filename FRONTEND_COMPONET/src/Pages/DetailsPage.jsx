
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { getMovieById } from '../Services/ApiFetch';
import { apiConfig } from '../Services/ApiConfig';




const DetailsPage = () => {

    const params = useParams();//Llamamos al hoock useParams
  const navigate = useNavigate();///llamamos al hoock useNavigate
  const id = params.movieId; ///rescatamos el parametro id de la URL
  const [movie , setMovie]= useState({});


  const backToHome = () => { navigate("/"); }///funcion para navegar al home


const loadUser = async ()=>{
  const aux = await getMovieById(id)
  setMovie(aux);
  console.log(aux)
   
}

  
useEffect(()=>{
  loadUser();
},[])
  return (

    <>
     {!movie ? (
        <div>
          <h3>Cargando los detalles de la Pelicula</h3>
        </div>
      ) : (
        <>
        <section  style={{display:"flex"}}>
            <img className='DetailsPoster' src={apiConfig.urlImages+movie.poster_path} alt={movie.title || "Poster"} /> 
          <div>
            <div>
               <p>Name: {movie.title ?? ""} </p>
             <p>Score: {movie.vote_average}</p>
             <p>Votos: {movie.vote_count}</p>
             <p>Año: {movie.release_date}</p>
              <p ><span>Descripcion:</span> {movie.overview}</p>
            </div>
            
          </div>
          
        </section>
      <section style={{display:"flex"}}>
                    {movie.credits.cast.slice(0,7).map((u,idx) => (
          <div key={idx} >
          <img className="actorImg"src={apiConfig.urlImages+u.profile_path} alt="" />
            <p>Nombre: {u.name} <span>/ Papel: {u.character}</span></p>
          </div>
        ))}
      </section>
      
              
      </>
      )}
    </>

  )
}

export default DetailsPage

