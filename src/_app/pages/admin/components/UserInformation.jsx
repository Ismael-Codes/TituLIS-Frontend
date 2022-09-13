import { Alert, Avatar, Button, Grid, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { Details } from "./revision";

export const UserInformation = ({ userData, register, variante, helper, newType, config, setConfig }) => {

  let matricula;

  let date = '';
  userData.tsDeleted != null && (userData.tsDeleted != 'null' &&
    (date = new Date(parseInt(userData.tsDeleted)))
  );

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
        <Grid item xs={12} md={6}>
          {!helper && ((config)
            ? <Alert
              color="success"
              variant="outlined"
              action={
                <Button color="inherit" size="small" onClick={() => {
                  setConfig(false)
                }}>
                  Activar
                </Button>
              }
            >
              <strong>Activar</strong> Usuario
            </Alert>
            : <Alert
              color="error"
              variant="outlined"
              action={
                <Button color="inherit" size="small" onClick={() => {
                  setConfig(true)
                }}>
                  Desactivar
                </Button>
              }
            >
              <strong>Desactivar</strong> Usuario
            </Alert>)}
        </Grid>
        <Grid item xs={12}>
          <Details tsDeleted={userData.tsDeleted} date={date} ts_create={userData.ts_create} ts_update={userData.ts_update} />
        </Grid>
      </Grid>
    </>

  )
}
