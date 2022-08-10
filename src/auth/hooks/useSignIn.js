//? Primeros
import { useContext } from 'react';

//? Terceros
import jwt_decode from 'jwt-decode';
import axios from 'axios';

//?
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useFetch } from '../../hook/useFetch';
import { validarUsuario } from '../helpers/validarUsuario';

//? Google Sign in
export const useSignIn = () => {

  const { login } = useContext(AuthContext)
  const navigate = useNavigate();

  const url = 'https://express-with-vercel-iota.vercel.app'

  // const { data, isLoading, hasError } = useFetch('https://restserver-node-brian.herokuapp.com/api/usuarios/?limite=15&desde=0')

  //* Despierta la base de datos
  // useFetch(`${url}/api/saludar`)
  useFetch('https://express-with-vercel-iota.vercel.app/api/saludar')

  // const { data, isLoading, hasError } = useFetch(`${url}/api/getUsers`)
  const { data, isLoading, hasError } = useFetch('https://express-with-vercel-iota.vercel.app/api/getUsers')

  const SignIn = (response) => {

    const { email, given_name, family_name, picture, sub } = jwt_decode(response.credential);

    const { valid, userType } = validarUsuario(false, email, data);

    //* Divide los nombres
    const miCadena = family_name;
    const divisiones = miCadena.split(" ");
    const aPaterno = divisiones[0];
    const aMaterno = divisiones[1];

    //* Extraer la matricula de un email
    const stringWithNumbers = email;
    const matricula = stringWithNumbers.replace(/[^0-9]+/g, "");

    if (valid) {

      console.log('El usuario ya esta registrado')
    } else {


      const dataTest = {
        nombre: 'Brian',
        aPaterno,
        aMaterno,
        matricula,
        email
      }


      axios.post('http://897f-189-201-149-240.ngrok.io/api/saveUser', dataTest)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });


      // fetch(`${url}/api/saveUser`, {
     /*  fetch(`http://897f-189-201-149-240.ngrok.io/api/saveUser`, {
        method: 'POST',
        body: JSON.stringify({
          'nombre': 'Brian',
          aPaterno,
          aMaterno,
          matricula,
          email
        }),
        headers: {
          'Content-type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
        //todo: hacer post a la base de datos
        */
        console.log('El usuario ha sido registrado')
    }

    login(given_name, aPaterno, aMaterno, email, matricula, picture, sub, userType);
    // login(name);

    navigate('/perfil', { replace: true });
  }
  //? Google Sign in

  return { SignIn }
}