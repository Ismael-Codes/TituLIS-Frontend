import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { useContext, useState } from 'react';
import { AuthContext } from '../../auth';

export const ProfilePage = () => {

  const { user } = useContext(AuthContext)

  const [open, setOpen] = useState(user.newUser);

  return (
    <>
      <form className="row g-3 mt-3">
        <div className="col-12 text-center mb-3">
          <img src={user.picture} style={{ width: "10rem" }} />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputFirstN" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="inputFirstN" disabled readOnly value={user.given_name} />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputLasName1" className="form-label">Apellido Paterno</label>
          <input type="text" className="form-control" id="inputLasName1" disabled readOnly value={user.aPaterno} />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputLasName2" className="form-label">Apellido Materno</label>
          <input type="text" className="form-control" id="inputLasName2" disabled readOnly value={user.aMaterno} />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputEmail4" className="form-label">Correo</label>
          <input type="email" className="form-control" id="inputEmail4" disabled readOnly value={user.email} />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputMatricula" className="form-label">Matricula</label>
          <input type="text" className="form-control" id="inputMatricula" disabled readOnly value={user.matricula} />
        </div>

        <div className="col-md-4 mb-3">
          <label htmlFor="inputID" className="form-label">ID</label>
          <input type="text" className="form-control" id="inputID" disabled readOnly value={user.id} />
        </div>
        <Collapse in={open} className="col-md-4 mb-3">
          <Alert
            variant="filled"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Usuario registrado con éxito!
          </Alert>
        </Collapse>
      </form>
    </>
  )
}
