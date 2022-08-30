//? Primeros
import { useContext, useState } from 'react';

//? Terceros
import jwt_decode from 'jwt-decode';
import axios from 'axios';

//?
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { url } from '../../config';

//? Google Sign in
export const useSignIn = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [errorAlert, setErrorAlert] = useState(false)
  let userType;
  let newUser = false;

  //todo: tipo de usuario

  const { login } = useContext(AuthContext)
  const navigate = useNavigate();

  const SignIn = async (response) => {

    try {
      const { email, given_name, family_name, sub, picture } = jwt_decode(response.credential);
      setIsLoading(true);

      //* Divide los nombres
      const miCadena = family_name;
      const divisiones = miCadena.split(" ");
      const aPaterno = divisiones[0];
      const aMaterno = divisiones[1];

      //* Extraer la matricula de un email
      const stringWithNumbers = email;
      const matricula = stringWithNumbers.replace(/[^0-9]+/g, "");

      await axios.get(`${url}/api/getUserType/${email}`)
        .then((resp) => {

          userType = resp.data.data.tipoUsuario_id

          if (!resp.data.data) {//* No esta Registrado

            (matricula == "" || matricula == undefined)
              ? userType = 2
              : userType = 1

            newUser = true
            axios.post(`${url}/api/saveUser`, {
              nombre: given_name,
              aPaterno,
              aMaterno,
              matricula,
              email,
              tipo: userType
            })
          }

        })

      login(given_name, aPaterno, aMaterno, email, matricula, picture, sub, userType, newUser);
      navigate('/perfil', { replace: true });

    } catch (error) {
      setErrorAlert(true);
      setIsLoading(false);
      console.log(error);
    }

  }
  return { SignIn, isLoading, errorAlert };
}