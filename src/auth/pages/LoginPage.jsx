import { useFetch } from '../../hook/useFetch';
import { LoginButton } from './LoginButton';

export const LoginPage = () => {

  //todo: token personalization, udemy video

  const url = 'https://express-with-vercel-iota.vercel.app'

  //* Despierta la base de datos
  useFetch(`${url}/api/saludar`)

  return (
    <>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <p className="fs-5 text-center">Solo se admiten cuentas con el siguiente dominio: <span className="fw-bold">uaeh.edu.mx</span></p>
            <LoginButton />
            <a href="https://accounts.google.com/signin/v2/recoveryidentifier?utm_source=hc_exp0722c&flowName=GlifWebSignIn&flowEntry=AccountRecovery" target='_blank' className="alert-link">Recuperación de la cuenta</a>
          </div>
        </form>
      </div>
    </>
  )
}
