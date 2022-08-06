//? Primeros
import { useContext } from 'react';

//? Terceros
import jwt_decode from 'jwt-decode';

//?
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

//? Google Sign in
export const handleSignIn = () => {


  const { login } = useContext(AuthContext)
  const navigate = useNavigate();

  const SignIn = (response) => {

    const userObject = jwt_decode(response.credential);
    // console.log(userObject);

    const { email, given_name, family_name, picture, sub } = userObject;

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