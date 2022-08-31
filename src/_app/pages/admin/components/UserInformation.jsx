import { Avatar, Button, Grid, TextField } from "@mui/material";
import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom'

export const UserInformation = ({ message, id }) => {

  let user;
  let tipoDeUsuario = 'Docente';


  message.map((option, index) => {
    (option.id == id) && (user = option)
  })

  if (user.userType == 1) {
    tipoDeUsuario = 'Estudiante'
  } else if (user.userType == 3) {
    tipoDeUsuario = 'Administrador'

  }

  return (
    <>
      {/* <h1>Usuario: {id}</h1> */}
      <Grid container spacing={2} className="mb-3">
        <Grid item xs={12} md={12} align='center' className="mb-3">
          <Avatar
            sx={{ width: 150, height: 150 }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            sx={{ width: 1 }}
            label="Nombre"
            defaultValue={user.nombre}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            sx={{ width: 1 }}
            label="Correo"
            defaultValue={user.email}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        {
          (user.tipoUsuario_id == 2 || user.tipoUsuario_id == 3)
            ? <></>
            : <Grid item xs={12} md={4}>
              <TextField
                sx={{ width: 1 }}
                label="Matricula"
                defaultValue={user.matricula}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
        }

        <Grid item xs={12} md={4}>
          <TextField
            sx={{ width: 1 }}
            label="Tipo de Usuario"
            defaultValue={tipoDeUsuario}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

      </Grid>
    </>

  )
}
