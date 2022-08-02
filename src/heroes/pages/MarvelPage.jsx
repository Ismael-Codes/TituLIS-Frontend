import { HeroList } from "../components"

export const MarvelPage = () => {

  let misDatos = JSON.parse(localStorage.getItem('user'));


  return (
    <>
      <h1>Profile</h1>
      <hr />
      <img src={misDatos.picture} />
      <p className="fs-4 fw-bold">Nombre: <span className="fw-normal">{misDatos.given_name}</span></p>
      <p className="fs-4 fw-bold">Apellido Paterno: <span className="fw-normal">{misDatos.aPaterno}</span> </p>
      <p className="fs-4 fw-bold">Apellido Materno: <span className="fw-normal">{misDatos.aMaterno}</span> </p>
      <p className="fs-4 fw-bold">Correo Electrónico: <span className="fw-normal">{misDatos.email}</span> </p>
      <p className="fs-4 fw-bold">Matricula: <span className="fw-normal">{misDatos.matricula}</span></p>
      <button className="btn btn-primary">Enviar Datos</button>
      {/* <HeroList publisher={'Marvel Comics'} /> */}
    </>
  )
}
