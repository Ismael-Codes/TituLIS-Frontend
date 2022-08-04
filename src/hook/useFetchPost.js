import { useFetch } from "./useFetch";

export const useFetchPost = ({ url, dataInfo }) => {

  //*                                                 
  // const existeUsuario = await Usuario.findById(id)
  //*                                                 

  const { data, hasError, isLoading } = useFetch("https://express-with-vercel-l1hm0yhtz-ismael-codes.vercel.app/api/getUsers");

  const { message = 'no data' } = data;

  //^ Test
  // const { data, isLoading, hasError } = useFetch('https://express-with-vercel-l1hm0yhtz-ismael-codes.vercel.app/api/getUsers')
  // const { data, isLoading, hasError } = useFetch('https://restserver-node-brian.herokuapp.com/api/usuarios/')
  // console.log(data);

  let valid = false;

  //* Valida si el usuario ya esta registrado
  const validarUsuario = () => {
    for (let i = 0; i < message.length; i++) {
      (message[i].email == 'Brian@gmail.com') ? valid : valid = true;
    }
    console.log(valid);
  }

  //* Post request
  const handleSubmit = (e) => {
    // pepe@gmail.com

    //* Evita la recarga del navegador
    e.preventDefault();

    validarUsuario();


    if (!valid) {

      //* POST a la base de datos
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataInfo)
      };

      //* POST a la base de datos
      fetch(url, requestOptions)
        .then(response => response.json())
        .then(res => console.log(res));

      document.getElementById('validUser').innerHTML = 'Usuario registrado';
    } else {
      document.getElementById('validUser').innerHTML = 'El usuario ya esta registrado en la base de datos';
    }

  };
  //^ Test

  return { handleSubmit }
}