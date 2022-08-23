import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/system/Unstable_Grid';
import TextField from '@mui/material/TextField';
import { Alert, AlertTitle, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';;
import CustomizedAccordions from './CustomizedAccordions';
import { useState } from 'react';

export const FirstStep = ({ register, message, dataForm }) => {

  let info = undefined;
  let label = undefined;

  //* Extrae el label dependiendo de la modalidad
  (message[dataForm['form']]?.descripcion.label == undefined) ? label : label = message[dataForm['form']].descripcion.label;

  //* Extrae la info dependiendo de la modalidad
  (message[dataForm['form']]?.descripcion.info == undefined) ? info : info = message[dataForm['form']].descripcion.info;

  const [open, setOpen] = useState(true);

  return (
    <>
      {/* //? Select */}
      <Grid item='true' xs={12} className='my-2'>
        <TextField
          select
          fullWidth
          label="Seleccione Modalidad de Titulación"
          defaultValue={''}
          {...register("form")}
        >
          {message.map((option, index) => (
            <MenuItem key={index} value={option.descripcion.value}>
              {option.nombre}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      {/* //? Alert */}
      <Collapse in={open}>
        <Grid item='true' xs={12} className='my-2'>
          <Alert severity="warning" className="mb-2" action={
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
          }>
            <AlertTitle>Info</AlertTitle>
            Los <strong>requisitos</strong> y <strong>documentación</strong> varían dependiendo de la <strong>modalidad</strong>
          </Alert>
        </Grid>
      </Collapse>

      {/* //? Acordions */}
      <Grid item='true' xs={12} className='mb-3'>
        {
          (!dataForm.form == "") ? <CustomizedAccordions info={info} label={label} /> : <Typography variant="body1" align="center">Selecciona una modalidad para poder visualizar los requisitos generales, específicos y documentación correspondiente a la modalidad</Typography>
        }
      </Grid>
    </>
  )
}