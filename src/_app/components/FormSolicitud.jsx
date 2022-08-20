import MenuItem from '@mui/material/MenuItem';
import { useForm } from "react-hook-form";
import Grid from '@mui/system/Unstable_Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Alert, AlertTitle, Box, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import { InputFile } from './InputFile';
import CustomizedAccordions from './CustomizedAccordions';

export const FormSolicitud = ({ message }) => {

  const { formState, getValues, watch, register = '', handleSubmit, setValue } = useForm();
  const { errors = false } = formState;

  //? Mantiene el dataform Actualizado
  watch();

  //? Data extraida del form
  const dataForm = getValues()
  let inputs = undefined;
  let info = undefined;
  let label = undefined;

  //* Extrae los inputs dependiendo de la modalidad
  (message[dataForm['form']]?.descripcion.input_file == undefined) ? inputs : inputs = message[dataForm['form']].descripcion.input_file;

  //* Extrae la info dependiendo de la modalidad
  (message[dataForm['form']]?.descripcion.info == undefined) ? inputs : info = message[dataForm['form']].descripcion.info;

  //* Extrae el label dependiendo de la modalidad
  (message[dataForm['form']]?.descripcion.label == undefined) ? inputs : label = message[dataForm['form']].descripcion.label;

  console.log(dataForm);

  const onSubmit = (data) => alert(JSON.stringify(data, null, 4));

  const [open, setOpen] = useState(true);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <form> */}
      <Grid container spacing={2} className="mb-3">

        {/* //? Titulo */}
        <Grid item='true' xs={12} textAlign="center">
          <h1>Proceso de Solicitud</h1>
        </Grid>

        {/* //? Primero */}
        <Grid spacing={2} xs={12} md={6} className="mb-3">

          {/* //? Select */}
          <Grid item='true' xs={12}>
            <TextField
              select
              fullWidth
              label="Modalidad de Titulación"
              defaultValue={''}
              {...register("form")}
              inputProps={register('form', {
                required: 'Por favor seleccione una modalidad',
              })}
              error={!!errors?.form}
              helperText={errors?.form?.message}
            // required={true}
            >
              {message.map((option) => (
                <MenuItem key={option.descripcion.value} value={option.descripcion.value}>
                  {option.nombre}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* //? Alert */}
          <Collapse in={open}>
            <Grid item='true' xs={12}>
              <Alert severity="info" className="mb-2" action={
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

          <Grid item='true' xs={12}>
            <Typography component={'h1'} align='center'>Documentación</Typography>
          </Grid>

          <Box
            sx={{
              // backgroundColor: 'white',
              border: '1px dashed black',
              borderRadius: '8px',
            }}
          >
            <Grid spacing={1} container item='true' xs={12}>
              {
                (inputs == undefined)
                  ? <Grid item='true' xs={12} align='center'> <Typography>Selecciona una modalidad para poder ingresar los documentos correspondientes</Typography> </Grid>
                  : inputs.map((option) => (
                    <InputFile key={option.value} name={option.name} code={option.code} setValue={setValue} dataForm={dataForm['ConstanciaPractica']} />
                  ))
              }
            </Grid>
          </Box>

        </Grid>

        {/*//? Segundo */}
        <Grid spacing={2} xs={12} md={6} className="mb-3">
          {/* //? Acordions */}
          <Grid item='true' xs={12}>
            {
              (!dataForm.form == "") ? <CustomizedAccordions info={info} label={label} /> : <Typography variant="body1" align="center">Selecciona una modalidad para poder visualizar los requisitos generales, específicos y documentación correspondiente a la modalidad</Typography>
            }
          </Grid>
        </Grid>

        {/* //? Boton de enviar */}
        {/* <Grid item='true' xs={12}>
          <Button variant="contained" color="success" size="large">
            enviar Solicitud
          </Button>
        </Grid> */}
      </Grid>
    </form >
  )
}
