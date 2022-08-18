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
  let userType = 1
  let newUser = false;

  const { login } = useContext(AuthContext)
  const navigate = useNavigate();

  const SignIn = async (response) => {

    try {
      const { email, given_name, family_name, sub, picture } = jwt_decode(response.credential);
      setIsLoading(true);
      await axios.get(`${url}/api/saludar`)

      //* Divide los nombres
      const miCadena = family_name;
      const divisiones = miCadena.split(" ");
      const aPaterno = divisiones[0];
      const aMaterno = divisiones[1];

      //* Extraer la matricula de un email
      const stringWithNumbers = email;
      const matricula = stringWithNumbers.replace(/[^0-9]+/g, "");

      await axios.post(`${url}/api/validateUser`, { email })
        .then((resp) => {

          if (resp.data.data) {//* Ya esta Registrado

            axios.get(`${url}/api/getUserType/${email}`)
              .then((resp) => {
                userType = resp.data.data.tipoUsuario_id
              })

          } else { //* No esta Registrado

            newUser = true
            axios.post(`${url}/api/saveUser`, {
              nombre: given_name,
              aPaterno,
              aMaterno,
              matricula,
              email
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