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
  let valid = false;
  let userType = 1
  let newUser = false;

  const { login } = useContext(AuthContext)
  const navigate = useNavigate();

  // const { data, isLoading, hasError } = useFetch(`${url}/api/getUsers`)
  // console.log(data, 'after fetching users')

  const SignIn = async (response) => {

    setIsLoading(true);

    await axios.get(`${url}/api/saludar`)

    await axios.get(`${url}/api/getUsers`)
      .then((resp) => {

        const { message } = resp.data;

        const { email, given_name, family_name, sub, picture } = jwt_decode(response.credential);

        //* Divide los nombres
        const miCadena = family_name;
        const divisiones = miCadena.split(" ");
        const aPaterno = divisiones[0];
        const aMaterno = divisiones[1];

        //* Extraer la matricula de un email
        const stringWithNumbers = email;
        const matricula = stringWithNumbers.replace(/[^0-9]+/g, "");

        //? Validacion con FrontEnd
        for (let i = 0; i < message.length; i++) {
          if (message[i].email === email) {
            userType = parseInt(message[i].id_tipoUsuario);
            valid = true;
          }
        }

        if (valid) {//* Ya esta Registrado

          login(given_name, aPaterno, aMaterno, email, matricula, picture, sub, userType, newUser);

        } else { //* No esta Registrado

          axios.post(`${url}/api/saveUser`, {
            nombre: given_name,
            aPaterno,
            aMaterno,
            matricula,
            email
          })
            .then(() => {

              newUser = true;
              login(given_name, aPaterno, aMaterno, email, matricula, picture, sub, userType, newUser);

            })
            .catch((error) => {
              console.log(error);
            });
        }

      })
      .catch((error) => {
        console.log(error);
      });

    navigate('/perfil', { replace: true });
  }
  //? Google Sign in

  return { SignIn, isLoading }
}