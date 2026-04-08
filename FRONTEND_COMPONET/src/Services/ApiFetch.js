import { apiConfig } from './ApiConfig.js';

//-------------------------------//-------
////////////////////////////////////////////////////////////////
// Trae peliculas por categoria + pagina
export const getAllMovies = async (category = "top_rated", page = 1)=>{
    try {
    const response = await fetch(
            `${apiConfig.baseURL}${category}?api_key=${apiConfig.ApiKey}&language=es-ES&page=${page}`);
    if(!response.ok){
        throw new Error("error al hacer el fetch")
    }
    const dataResponse = await response.json();
    return dataResponse;} 

    catch (error) {
        console.log("Error", error.message);
    }}
///////////////////////////////////////////////////////////////////
export const getMovieById = async (movieId) => {
    try {
         const response = await fetch(
            `${apiConfig.baseURL}${movieId}?api_key=${apiConfig.ApiKey}&language=es-ES&page=1&append_to_response=credits`);
    if(!response.ok){
        throw new Error("error al hacer el fetch")
    }
    const dataResponse = await response.json();
    return dataResponse;
    } catch (error)  {
        console.log(error.message)
    }}
////////////////////////////////////////////////////////////////
// Busca peliculas por nombre (parcial) + pagina
export const searchMovies = async (query, page = 1) => {
    try {
    const safeQuery = query?.trim();
    if (!safeQuery) return { results: [] };

    const searchBaseURL = apiConfig.baseURL.replace("/movie/","/search/movie");
    const response = await fetch(
            `${searchBaseURL}?api_key=${apiConfig.ApiKey}&language=es-ES&page=${page}&query=${encodeURIComponent(safeQuery)}`);
    if(!response.ok){
        throw new Error("error al hacer el fetch")
    }
    const dataResponse = await response.json();
    return dataResponse;
    
    } catch (error) {
        console.log("Error", error.message);
    }}
