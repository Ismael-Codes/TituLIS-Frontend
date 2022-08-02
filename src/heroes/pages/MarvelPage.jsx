import { useFetchPost } from "../../hook";
import { HeroList } from "../components"

export const MarvelPage = () => {

  const misDatos = JSON.parse(localStorage.getItem('user'));

  const { handleSubmit } = useFetchPost({
    url: "https://restserver-node-brian.herokuapp.com/api/usuarios/", data:
    {
      "nombre": "Brian Cruz Sanchez",
      "correo": "test168@gmail.com",
      "password": "123456",
      "rol": "USER_ROLE"
    }
  })

  return (
    <>
      <h1>Profile</h1>
      <hr />
      <img src={misDatos.picture} />
      <p className="fs-4 fw-bold">Nombre: <span className="fw-normal">{misDatos?.given_name}</span></p>
      <p className="fs-4 fw-bold">Apellido Paterno: <span className="fw-normal">{misDatos?.aPaterno}</span> </p>
      <p className="fs-4 fw-bold">Apellido Materno: <span className="fw-normal">{misDatos?.aMaterno}</span> </p>
      <p className="fs-4 fw-bold">Correo Electrónico: <span className="fw-normal">{misDatos?.email}</span> </p>
      <p className="fs-4 fw-bold">Matricula: <span className="fw-normal">{misDatos?.matricula}</span></p>
      <p className="fs-4 fw-bold">ID: <span className="fw-normal">{misDatos?.id}</span></p>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Enviar Datos</button>
      {/* <HeroList publisher={'Marvel Comics'} /> */}
    </>
  )
}
