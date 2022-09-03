import { Avatar, Grid, MenuItem, TextField } from "@mui/material";

export const UserInformation = ({ userData, register, variante, helper, newType }) => {

  let matricula;

  (userData.matricula == '')
    ? matricula = 'No tiene Matricula'
    : matricula = userData.matricula;

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
            defaultValue={`${userData.nombre} ${userData.a_paterno} ${userData.a_materno}`}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            sx={{ width: 1 }}
            label="Correo"
            defaultValue={userData.email}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        {
          (userData.tipoUsuario_id == 2 || userData.tipoUsuario_id == 3)
            ? <></>
            : <Grid item xs={12} md={4}>
              <TextField
                sx={{ width: 1 }}
                label="Matricula"
                defaultValue={matricula}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
        }

        <Grid item xs={12} md={4}>
          <TextField
            select
            fullWidth
            variant={variante}
            label='Tipo de Usuario'
            {...register("tipoUsuario_id", userData.tipoUsuario_id)}
            defaultValue={newType}
            InputProps={{
              readOnly: helper,
            }}
          >
            <MenuItem value='1' >
              Estudiante
            </MenuItem>
            <MenuItem value='2' >
              Docente
            </MenuItem>
            <MenuItem value='3' >
              Administrador
            </MenuItem>
          </TextField>
        </Grid>
      </Grid>
    </>

  )
}
