import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import jwt_decode from 'jwt-decode';

//? Hooks Globales
import { useFetch } from '../../hook';


export const LoginPage = () => {

  const { login } = useContext(AuthContext)
  const navigate = useNavigate();

  //? Vainilla Version
  const [user, setUser] = useState({});

  //^ Test
  // const { data, isLoading, hasError } = useFetch('https://express-with-vercel-l1hm0yhtz-ismael-codes.vercel.app/api/getUsers')
  // const { data, isLoading, hasError } = useFetch('https://restserver-node-brian.herokuapp.com/api/usuarios/')
  // console.log(data);

  //* Post request
  const handleSubmit = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "nombre": "Brian Cruz Sanchez",
        "correo": "test168@gmail.com",
        "password": "123456",
        "rol": "USER_ROLE"
      })
    };

    fetch("https://restserver-node-brian.herokuapp.com/api/usuarios/", requestOptions)
      .then(response => response.json())
      .then(res => console.log(res));
  };
  //^ Test

  //? Sign in
  const handleSignIn = (response) => {


    const userObject = jwt_decode(response.credential);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;

    const { name, email, given_name, family_name, picture } = userObject;

    //* Divide los nombres
    const miCadena = family_name;
    const divisiones = miCadena.split(" ");
    const aPaterno = divisiones[0];
    const aMaterno = divisiones[1];

    //* Extraer la matricula de un email
    const stringWithNumbers = email;
    const matricula = stringWithNumbers.replace(/[^0-9]+/g, ""); // esto retorna '1234'

    console.log(`
    Nombre: ${given_name}
    Apellido Paterno: ${aPaterno}
    Apellido Materno: ${aMaterno}
    Correo: ${email}
    Matricula: ${matricula}
    `);

    login(given_name, aPaterno, aMaterno, email, matricula, picture);
    // login(name);

    navigate('/perfil', { replace: true });
  }
  //? Sign in

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID,
      callback: handleSignIn
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {
        theme: "dark",
        style: "large"
      }
    )

    google.accounts.id.prompt();
  }, [])

  return (
    <>
      <button type="submit" onClick={handleSubmit}>
        Create Post
      </button>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div id="signInDiv" style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }} className="mb-4"></div>
            <a href="https://accounts.google.com/signin/v2/recoveryidentifier?utm_source=hc_exp0722c&flowName=GlifWebSignIn&flowEntry=AccountRecovery" target='_blank' className="alert-link">Recuperación de la cuenta</a>
          </div>
        </form>
      </div>
    </>
  )
}
