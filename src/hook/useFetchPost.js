import { useState } from "react";
import { useFetch } from "./useFetch";
// import lodash from "lodash";

export const useFetchPost = ({ url = '', misDatos = '' }) => {

  const { email } = misDatos;
  console.log(email);

  const [state, setState] = useState({
    isLoading: true
  })

  //todo: colocar esta peticion dentro de validar usuario
  //* Get data
  // const { data, hasError, isLoading } = useFetch("https://express-with-vercel-l1hm0yhtz-ismael-codes.vercel.app/api/getUsers");
  // const { message = 'no data' } = data;

  const { data, isLoading, hasError } = useFetch('https://restserver-node-brian.herokuapp.com/api/usuarios/?limite=15&desde=0')

  const { usuarios } = data

  //* Valida si el usuario ya esta registrado
  const validarUsuario = (valid = false) => {

    for (let i = 0; i < data.total; i++) {
      (usuarios[i].correo === email) ? valid = true : valid;
    }
    return valid;
  }

  //* Post request
  const handleSubmit = (e) => {
    //* Evita la recarga del navegador
    e.preventDefault();
    const valid = validarUsuario()
    console.log(valid);

    //* POST a la base de datos
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(misDatos)
    };

    //* POST a la base de datos
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(res => console.log(res));
    //^ Test

  }
  return {
    handleSubmit
  }
}