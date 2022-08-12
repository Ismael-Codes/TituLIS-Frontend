import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { useContext, useState } from 'react';
import { AuthContext } from '../../auth';

//? Material UI
import Grid from '@mui/system/Unstable_Grid';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';

export const ProfilePage = () => {

  let tipoDeUsuario = 'Docente';

  const { user } = useContext(AuthContext)

  const [open, setOpen] = useState(user.newUser);

  if(user.userType === 1){
    tipoDeUsuario = 'Estudiante'
  }

  return (
    <>
      <Grid container spacing={2} className="mb-3">
        <Grid item='true' xs={12} md={12} align='center' className="mb-3">
          <Avatar
            alt={user.given_name}
            src={user.picture}
            sx={{ width: 150, height: 150 }}
          />
        </Grid>

        <Grid item='true' xs={12} md={6}>
          <TextField
            sx={{ width: 1 }}
            label="Nombre"
            defaultValue={user.given_name + ' ' + user.aPaterno + ' ' + user.aMaterno}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        <Grid item='true' xs={12} md={6}>
          <TextField
            sx={{ width: 1 }}
            label="Correo"
            defaultValue={user.email}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        <Grid item='true' xs={4}>
          <TextField
            sx={{ width: 1 }}
            label="Matricula"
            defaultValue={user.matricula}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        <Grid item='true' xs={4}>
          <TextField
            sx={{ width: 1 }}
            label="Tipo de Usuario"
            defaultValue={tipoDeUsuario}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        <Grid item='true' xs={4}>
          <Collapse in={open} className="col-md-4 mb-3" sx={{ width: 1 }}>
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
            // sx={{ mb: 8 }}
            >
              Usuario registrado con éxito!
            </Alert>
          </Collapse>
        </Grid>
      </Grid>
    </>
  )
}
