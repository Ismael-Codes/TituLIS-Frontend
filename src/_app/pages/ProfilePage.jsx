import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { useContext, useState } from 'react';
import { AuthContext } from '../../auth';

import Grid from '@mui/system/Unstable_Grid';


import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import styled from '@mui/system/styled';

export const ProfilePage = () => {

  const { user } = useContext(AuthContext)

  const [open, setOpen] = useState(user.newUser);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
        </Grid>
      </Grid>

      <form className="row g-3 mt-3">
        <div className="col-12 text-center mb-3">
          <img src={user.picture} style={{ width: "10rem" }} />
        </div>
        <div className="col-md-4">

          <TextField
            fullWith={true}
            id="outlined-read-only-input"
            label="Nombre"
            defaultValue={user.given_name}
            InputProps={{
              readOnly: true,
            }}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputLasName1" className="form-label">Apellido Paterno</label>
          <input type="text" className="form-control" id="inputLasName1" disabled readOnly value={user?.aPaterno} />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputLasName2" className="form-label">Apellido Materno</label>
          <input type="text" className="form-control" id="inputLasName2" disabled readOnly value={user?.aMaterno} />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputEmail4" className="form-label">Correo</label>
          <input type="email" className="form-control" id="inputEmail4" disabled readOnly value={user?.email} />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputMatricula" className="form-label">Matricula</label>
          <input type="text" className="form-control" id="inputMatricula" disabled readOnly value={user?.matricula} />
        </div>

        <div className="col-md-4 mb-3">
          <label htmlFor="inputID" className="form-label">ID</label>
          <input type="text" className="form-control" id="inputID" disabled readOnly value={user?.id} />
        </div>
      </form>

      <TextField
        fullWith
        id="outlined-read-only-input"
        label="Apellido Paterno"
        defaultValue={user.aPaterno}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        fullWith
        id="outlined-read-only-input"
        label="Apellido Materno"
        defaultValue={user.aMaterno}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        fullWith
        id="outlined-read-only-input"
        label="Matricula"
        defaultValue={user.matricula}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        fullWith
        id="outlined-read-only-input"
        label="Correo"
        defaultValue={user.email}
        InputProps={{
          readOnly: true,
        }}
      />
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


      <Avatar
        justify="center"
        alt={user.given_name}
        src={user.picture}
        sx={{ width: 150, height: 150 }}
      />
    </>
  )
}
