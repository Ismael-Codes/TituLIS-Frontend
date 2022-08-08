//? Primeros
import { useContext, useEffect } from 'react';

//? Terceros
import jwt_decode from 'jwt-decode';

//?
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useFetch } from '../../hook/useFetch';
import { validarUsuario } from '../helpers/validarUsuario';

//? Google Sign in
export const useSignIn = () => {

  const { login } = useContext(AuthContext)
  const navigate = useNavigate();

  const { data, isLoading, hasError } = useFetch('https://restserver-node-brian.herokuapp.com/api/usuarios/?limite=15&desde=0')

  const SignIn = (response) => {

    const { email, given_name, family_name, picture, sub } = jwt_decode(response.credential);

    const valid = validarUsuario(false, email, data);

    if (valid) {

      console.log('El usuario ya esta registrado')
    } else {

      //todo: hacer post a la base de datos
      console.log('Usuario no registrado')
    }

    //* Divide los nombres
    const miCadena = family_name;
    const divisiones = miCadena.split(" ");
    const aPaterno = divisiones[0];
    const aMaterno = divisiones[1];

    //* Extraer la matricula de un email
    const stringWithNumbers = email;
    const matricula = stringWithNumbers.replace(/[^0-9]+/g, "");

    login(given_name, aPaterno, aMaterno, email, matricula, picture, sub);
    // login(name);

    navigate('/perfil', { replace: true });
  }
  //? Google Sign in

  return { SignIn }
}