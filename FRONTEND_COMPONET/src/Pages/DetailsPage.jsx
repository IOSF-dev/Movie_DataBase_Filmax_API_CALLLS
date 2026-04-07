
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getMovieById } from '../Services/ApiFetch';
import { apiConfig } from '../Services/ApiConfig';




const DetailsPage = () => {

    const params = useParams();//Llamamos al hoock useParams
 ///llamamos al hoock useNavigate
  const id = params.movieId; ///rescatamos el parametro id de la URL
  const [movie , setMovie]= useState({});


  

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

     {!movie?.credits ? (
        <div>
          <h3>Cargando los detalles de la Pelicula</h3>
        </div>
      ) : (
        <>
        <section
          className='detailsContainer'
          style={{ backgroundImage: `url(${apiConfig.urlImages + movie.poster_path})` }}
        >
          <div className='leftBox'>
<img className='detailsPoster' src={apiConfig.urlImages+movie.poster_path} alt={movie.title || "Poster"} />
          </div>
             
          <div className='rigthBox'>
            <div className='upperBox'>
               <h1 className='detailsTitle'>{movie.title ?? ""}</h1>
               <div style={{textAlign:"center"}}>
               <p className='detailsData'><span className='detailsDataSPAN'>Año:</span> {movie.release_date}</p>
               <span className='detailsData'>Score: {movie.vote_average} -<span className='detailsData'> Votos: {movie.vote_count}</span></span>
               </div>
              <p className='detailsData'><span className='detailsDataSPAN'>Descripcion:</span><br /> {movie.overview}</p>
            </div>


             <section className='actorSection' >
                    {movie?.credits?.cast.slice(0,7).map((u,idx) => (
          <div className="actorBox" key={idx} >
            <img className="actorImg"src={apiConfig.urlImages+u.profile_path} alt="" />
                      <div className="actorDetails">
                        <p className='detailsDataSPAN'>{u.name}</p>
                        <p style={{textWrap:"wrap"}}>{u.character}</p>
                      </div>
           
          </div>
        ))}
      </section>
          </div>
          
        </section>
     
      
              
      </>
      )}
    </>

  )
}

export default DetailsPage

