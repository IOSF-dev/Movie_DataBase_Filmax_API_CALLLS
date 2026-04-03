import React, { useEffect, useState } from 'react'
import { getAllMovies } from '../Services/ApiFetch';
import { apiConfig } from '../Services/ApiConfig';

const MoviesHomePage = () => {
  const [data,setData] = useState([]);

    const loadMovies = async () => { 
    const aux = await getAllMovies();
    console.log(aux)
    setData(aux.results); 
  }
   
    useEffect(() => { 
    loadMovies(); 
  }, [])


  
  return (
    
     <>

      <div className='mainContaeiner' >
        
        {!data || data.length === 0 ? (
          <>
            <div>
              <h3>Cargando movies...</h3>
            </div>
          </>
        ) :  (

          data.map((u) => (
          <div  key={u.id} className='cardComponent' >
            <div ><img src={apiConfig.urlImages+u.poster_path} alt="" className='cardPoster' /></div>
            <h2>{u.title}</h2>
            <p><span>Score: {u.vote_average} / Votos:{u.vote_count} -</span>-Año: {u.release_date}</p>
            <p style={{margin:"10px"}}><span style={{fontSize:"20px", fontWeight:"700"}}>Descripcion:</span > {u.overview}</p>
          </div>))
            
            
          
        )}
        </div>
        </>
  )
}

export default MoviesHomePage;