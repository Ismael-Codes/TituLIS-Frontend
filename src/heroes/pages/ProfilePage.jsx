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
      <form className="row g-3 mt-5">
        <div className="col-12 text-center mb-5">
          <img src={misDatos.picture} style={{ width: "10rem" }} />
        </div>
        <div class="col-md-4">
          <label for="inputFirstN" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="inputFirstN" disabled readonly value={misDatos?.given_name} />
        </div>

        <div className="col-md-4">
          <label for="inputLasName1" className="form-label">Apellido Paterno</label>
          <input type="text" className="form-control" id="inputLasName1" disabled readonly value={misDatos?.aPaterno} />
        </div>

        <div className="col-md-4">
          <label for="inputLasName2" className="form-label">Apellido Materno</label>
          <input type="text" className="form-control" id="inputLasName2" disabled readonly value={misDatos?.aMaterno} />
        </div>

        <div className="col-md-4">
          <label for="inputEmail4" className="form-label">Correo</label>
          <input type="email" className="form-control" id="inputEmail4" disabled readonly value={misDatos?.email} />
        </div>

        <div className="col-md-4">
          <label for="inputMatricula" className="form-label">Matricula</label>
          <input type="text" className="form-control" id="inputMatricula" disabled readonly value={misDatos?.matricula} />
        </div>

        <div className="col-md-4">
          <label for="inputID" className="form-label">ID</label>
          <input type="text" className="form-control" id="inputID" disabled readonly value={misDatos?.id} />
        </div>

        <div className="col-12 mb-2">
          <button type="submit" className="btn btn-primary" onClick={handleSubmit} data-bs-toggle="modal" data-bs-target="#exampleModal" id='buttonSend'>Comprobar Registro</button>


          {/* <LoadingSpinner /> */}
          {/* <!-- Modal --> */}
          <Modal />
        </div>
      </form>
    </>
  )
}
