import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import jwt_decode from 'jwt-decode';

export const LoginPage = () => {

  const { login } = useContext(AuthContext)
  const navigate = useNavigate();

  //? Vainilla Version
  const [user, setUser] = useState({});

  //? Sign in
  const handleSignIn = (response) => {


    const userObject = jwt_decode(response.credential);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;

    const { name, email, given_name, family_name, picture, sub} = userObject;

    console.log(sub)

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
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <p className="fs-5 text-center">Solo se admiten cuentas con dominio: <span className="fw-bold">uaeh.edu.mx</span></p>
            {/*//? Google Sign In */}
            <div id="signInDiv" style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }} className="mb-4"></div>
            {/* //? Google Sign In */}
            <a href="https://accounts.google.com/signin/v2/recoveryidentifier?utm_source=hc_exp0722c&flowName=GlifWebSignIn&flowEntry=AccountRecovery" target='_blank' className="alert-link">Recuperación de la cuenta</a>
          </div>
        </form>
      </div>
    </>
  )
}
