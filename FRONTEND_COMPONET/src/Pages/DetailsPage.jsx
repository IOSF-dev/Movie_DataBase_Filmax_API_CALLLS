
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getMovieById } from '../Services/ApiFetch';
import { apiConfig } from '../Services/ApiConfig';




const DetailsPage = () => {

  const params = useParams();//Llamamos al hoock useParams
  ///llamamos al hoock useNavigate
  const id = params.movieId; ///rescatamos el parametro id de la URL
  const [movie, setMovie] = useState({});




  const loadUser = async () => {
    const aux = await getMovieById(id)
    setMovie(aux);
    console.log(aux)

  }


  useEffect(() => {
    loadUser();
  }, [])
  return (

    <>

      {!movie?.credits ? (
        <div>
          <h3>Cargando los detalles de la Pelicula</h3>
        </div>
      ) : (
        <>
          <main
            className='detailsContainer'
            style={{ backgroundImage: `url(${apiConfig.urlImages + movie.poster_path})` }}
          >
            <aside className='detailsContainer_LeftBox'>
              <img className='detailsContainer_LeftBox-Poster' src={apiConfig.urlImages + movie.poster_path} alt={movie.title || "Poster"} />
            </aside>

            <section className='detailsContainer_RigthBox'>
              <aside className='detailsContainer_RigthBox-UP'>
                <h1 className='detailsContainer_RigthBox-Title'>{movie.title ?? ""}</h1>
                <div style={{ textAlign: "center" }}>
                  <p className='detailsContainer_RigthBox-P'><span className='detailsContainer_SPAN'>Año:</span> {movie.release_date}</p>
                  <div style={{ display: "flex" }}>
                    <p className='detailsContainer_RigthBox-P'><span className='detailsContainer_SPAN'>Score: </span>{movie.vote_average}  </p>
                    <p className='detailsContainer_RigthBox-P'> / <span className='detailsContainer_SPAN'> Votos: </span>({movie.vote_count})</p>
                  </div>
                  <p className='detailsContainer_RigthBox-P'><span className='detailsContainer_SPAN'>Duracion: </span> {movie.runtime} min</p>
                </div>
                <p className='detailsContainer_RigthBox-P' style={{ marginTop: "1%", paddingRight: "20%", paddingLeft: "10%", textWrap: "pretty" }}><span className='detailsContainer_SPAN'>Sinopsis: </span><br /> {movie.overview}</p>
              </aside>

              <details className='detailsContainer_RigthBox-DOWN'>
                <summary className='detailsContainer_Summary'>Reparto...</summary>

                <section className='detailsContainer_actorSection' >
                  {movie?.credits?.cast.slice(0, 7).map((u, idx) => (
                    <div className="detailsContainer_ActorBox" key={idx} >
                      <img className="detailsContainer_ActorImg" src={apiConfig.urlImages + u.profile_path} alt="" />
                      <div className="detailsContainer_ActorDetails">
                        <p className='detailsContainer_SPAN'>{u.name}</p>
                        <p style={{ textWrap: "wrap" }}>{u.character}</p>
                      </div>

                    </div>
                  ))}
                </section>
              </details>
            </section>
          </main>



        </>
      )}
    </>

  )
}

export default DetailsPage

