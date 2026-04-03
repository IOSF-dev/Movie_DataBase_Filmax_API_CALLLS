import {apiConfig} from './ApiConfig.js';




//------------------------------------
//          FETCH-----general---------
//-------------------------------//-------

export const getAllMovies = async ()=>{

    try {
    const response = await fetch(
            `${apiConfig.baseURL}top_rated?api_key=${apiConfig.ApiKey}&language=es-ES&page=1`);;
    if(!response.ok){
        throw new Error("error al hacer el fetch")
    }
    const dataResponse = await response.json();
    return dataResponse;
    
    } catch (error) {
        console.log("Error", error.message);
    }
    }






/*
/////////////////////////////////////////////////////////////////////////////////////////////////
//------------------------------------------------------------------------------------
///            fetch id
//-----------------------------------------------------------------------------------
export async function getID(movieid){
try {
    const res = await fetch (`${apiConfig.baseURL}${movieid}?api_key=${apiConfig.ApiKey}&language=es-ES&page=1&append_to_response=credits`);

    if(!res.ok){ throw new Error (res.status);}
    const dataID = await res.json();
            
        return dataID
} catch (error) {console.log(error.message);
    
}
};

*/