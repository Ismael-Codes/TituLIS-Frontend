import { LoginButton } from './LoginButton';

export const LoginPage = () => {

  //todo: token personalization, udemy video

  return (
    <>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <p className="fs-5 text-center">Solo se admiten cuentas con el siguiente dominio: <span className="fw-bold">uaeh.edu.mx</span></p>
            <div id="loginButton">
              <LoginButton />
            </div>
            <a href="https://accounts.google.com/signin/v2/recoveryidentifier?utm_source=hc_exp0722c&flowName=GlifWebSignIn&flowEntry=AccountRecovery" target='_blank' className="alert-link">Recuperación de la cuenta</a>
          </div>
        </form>
      </div>
    </>
  )
}
