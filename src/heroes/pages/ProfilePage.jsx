import { useFetchPost } from '../../hook';
import { Modal } from '../../components/Modal';
import { LoadingSpinner } from '../../components/LoadingSpinner';

export const ProfilePage = () => {

  const misDatos = JSON.parse(localStorage.getItem('user'));

  const { handleSubmit } = useFetchPost({
    url: "https://restserver-node-brian.herokuapp.com/api/usuarios/", misDatos
  })

  return (
    <>
      <h1>Perfil</h1>
      <hr className="border border-dark border-1 opacity-50" />

      <form className="row">
        <img src={misDatos.picture} style={{ width: "10rem" }} />
        <p className="fs-5 fw-bold mt-2">Nombre: <span className="fw-normal">{misDatos?.given_name}</span></p>
        <p className="fs-5 fw-bold">Apellido Paterno: <span className="fw-normal">{misDatos?.aPaterno}</span> </p>
        <p className="fs-5 fw-bold">Apellido Materno: <span className="fw-normal">{misDatos?.aMaterno}</span> </p>
        <p className="fs-5 fw-bold">Correo Electrónico: <span className="fw-normal">{misDatos?.email}</span> </p>
        <p className="fs-5 fw-bold">Matricula: <span className="fw-normal">{misDatos?.matricula}</span></p>
        <p className="fs-5 fw-bold">ID: <span className="fw-normal">{misDatos?.id}</span></p>

        <div className="col-auto mb-2">
          <button type="submit" className="btn btn-primary" onClick={handleSubmit} data-bs-toggle="modal" data-bs-target="#exampleModal" id='buttonSend'>Enviar Datos</button>


          {/* <LoadingSpinner /> */}
          {/* <!-- Modal --> */}
          <Modal />
        </div>
      </form>
    </>
  )
}
