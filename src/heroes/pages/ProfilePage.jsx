import { Modal } from '../../components/Modal';

export const ProfilePage = () => {

  const misDatos = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      <form className="row g-3 mt-3">
        <div className="col-12 text-center mb-3">
          <img src={misDatos.picture} style={{ width: "10rem" }} />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputFirstN" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="inputFirstN" disabled readOnly value={misDatos?.given_name} />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputLasName1" className="form-label">Apellido Paterno</label>
          <input type="text" className="form-control" id="inputLasName1" disabled readOnly value={misDatos?.aPaterno} />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputLasName2" className="form-label">Apellido Materno</label>
          <input type="text" className="form-control" id="inputLasName2" disabled readOnly value={misDatos?.aMaterno} />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputEmail4" className="form-label">Correo</label>
          <input type="email" className="form-control" id="inputEmail4" disabled readOnly value={misDatos?.email} />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputMatricula" className="form-label">Matricula</label>
          <input type="text" className="form-control" id="inputMatricula" disabled readOnly value={misDatos?.matricula} />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputID" className="form-label">ID</label>
          <input type="text" className="form-control" id="inputID" disabled readOnly value={misDatos?.id} />
        </div>
      </form>
    </>
  )
}
