import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
// import { LoginButton } from './LoginButton';
import { Profile } from './Profile';
import jwt_decode from 'jwt-decode';

export const LoginPage = () => {

  const { login } = useContext(AuthContext)
  const navigate = useNavigate();

  //? Vainilla Version
  const [user, setUser] = useState({});

  const handleCallbackResponse = (response) => {
    const userObject = jwt_decode(response.credential);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;

    const { name, email } = userObject;

    login(name);

    navigate('/Marvel', { replace: true });

    // document.cookie = "Hola";
  }

  const handleSignOut = () => {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {
        theme: "dark",
        style: "large",
        // width: 200,
        // height: 200,
        // text: 'continue_with'
      }
    )

    google.accounts.id.prompt();
  }, [])

  return (
    <>
      {/* <div className="text-center">
        <h1>Application XD</h1>

        {Object.keys(user).length != 0 &&
          <button onClick={() => handleSignOut()}>Sign Out</button>
        }
        {user &&
          <div>
            <img src={user.picture} alt="" />
            <h4>Name: {user.name}</h4>
            <h4>Email: {user.email}</h4>
          </div>
        }
      </div> */}

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
