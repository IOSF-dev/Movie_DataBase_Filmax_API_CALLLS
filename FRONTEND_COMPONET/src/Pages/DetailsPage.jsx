import React from 'react'

const DetailsPage = () => {
  return (
    <div>DetailsPage</div>
  )
}

export default DetailsPage

/**
 * import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { boleeanoChecked, deleteUser, editUser, getUserById } from "../services/UserFetch"
//////////////----IMPORT-COLLECTION-----///////////////////////////////////////

const DetailsUser = () => { ////PAGE DETAILS
  ///////////////-------CONST--COLLECTION---------////////////////////////////////
  const params = useParams();//Llamamos al hoock useParams
  const navigate = useNavigate();///llamamos al hoock useNavigate
  const id = params.userId; ///rescatamos el parametro id de la URL
  //////////////////////////////////////////////////////////////////////////////////
const [user , setUser]= useState({});
const [isEdit,setIsEdit] = useState(false)
const [initUser,setInitUser] = useState({})

///////////---------FUNCIONES---------------------------
  const backToHome = () => { navigate("/"); }///funcion para navegar al home

  //const USER = getUserById(id) ////USER es la coincidencia del .find de la llamada a la api


const loadUser = ()=>{
  const aux = getUserById(id)
  setUser(aux);
  setInitUser(aux);
}

const setCheck = ()=> {
  boleeanoChecked(id);
  setUser({
    ...user,
    checked: true,
  })
    setInitUser({
    ...initUser,
    checked: true,
  })
}
const deletear = () => { ////funcion que usa la llamada a api de deleteUser en services
   /*const aux =*/ /*
   deleteUser(id);  ///el .filter excepto la coincidencia se asigna a aux
    backToHome();//// despues de la asignacion mandame al home
    //return aux
  };///y despues de asignar y mandarme a la mierda dame un euro con la lista de usuarios sin la coincidencia del ID

  const editHandler= (propName,propValue)=>{
    setUser({
      ...user,
      [propName]: propValue,
    });
};

const cancelEdit = ()=>{
  setUser(initUser);
  setIsEdit(false);
}

const saveChanges = ()=>{
  editUser(user)
  setIsEdit(false);
  loadUser();
}

useEffect(()=>{
  loadUser();
},[])




  return (
    <>
      {!user ? (
        <div>
          <h3>Cargando los detalles del Usuario</h3>
        </div>
      ) : (
        <>
          <div style={{ border: "2px solid orange" }}>
            <h3>detalles del Usuario Nº: {user._id}</h3>

            {!isEdit ? (
              <p>Name: {user.name ?? ""} </p>
          ):(
            <input value={user.name} type="text" onChange={(e)=>{editHandler("name",e.target.value)}}/>
           )}
           {!isEdit ? (
                          <p>lastName: {user.lastName ?? ""}</p>
            ) : (
                        <input value={user.lastName}type="text" onChange={(e)=>{editHandler("lastName",e.target.value)}}/>
            )}
            {!isEdit ? (
                          <p>Phone: {user.phone ?? ""}</p>
            ): (
                        <input value={user.phone}type="number" onChange={(e)=>{editHandler("phone",e.target.value)}}/>
            )}
                       
 {!isEdit ? (<p>email: {user.email ?? ""}</p>
            ): (
                        <input value={user.email}type="email" onChange={(e)=>{editHandler("email",e.target.value)}}/>
            )}<br />
                          <p>checked: {user.checked ? "PAGADO" : "NO PAGADO"}</p><br />
          </div>
          <br />

          <div style={{ display: "flex", gap: "120px", justifyContent: "center" }}>
{!isEdit ? ( <button onClick={()=>{setIsEdit(true)}} disabled={isEdit}>EDIT(E)</button>
            ) : (  <button onClick={saveChanges}>save(U)</button>)}
            <button onClick={cancelEdit} disabled ={!isEdit}>cancelar(C)</button>
            <button onClick={() => deletear(id)}>DELETE(D)</button>
            <button onClick={setCheck} disabled={user?.checked}>marcar a verificado(B)</button>
            
          </div>
          
          <br />
        </>
      )}

    </>


  )
}

export default DetailsUser
 */