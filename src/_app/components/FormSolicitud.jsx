import MenuItem from '@mui/material/MenuItem';
import { useForm } from "react-hook-form";
import Grid from '@mui/system/Unstable_Grid';
import TextField from '@mui/material/TextField';
import { Alert, AlertTitle, Box, Button, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import { InputFile, InputText, InputSelect } from '../components';
import CustomizedAccordions from './CustomizedAccordions';

export const FormSolicitud = ({ message }) => {

  const { formState, getValues, watch, register = '', handleSubmit, setValue } = useForm();
  const { errors = false } = formState;

  //? Mantiene el dataform Actualizado
  watch();

  //? Data extraida del form
  const dataForm = getValues()
  let inputFile = undefined;
  let inputText = undefined;
  let inputSelect = undefined;
  let info = undefined;
  let label = undefined;

  //* Extrae los inputFile dependiendo de la modalidad
  (message[dataForm['form']]?.descripcion.inputFile == undefined) ? inputFile : inputFile = message[dataForm['form']].descripcion.inputFile;

  //* Extrae los inputText dependiendo de la modalidad
  (message[dataForm['form']]?.descripcion.inputText == undefined) ? inputText : inputText = message[dataForm['form']].descripcion.inputText;

  //* Extrae el inputSelect dependiendo de la modalidad
  (message[dataForm['form']]?.descripcion.inputSelect == undefined) ? inputSelect : inputSelect = message[dataForm['form']].descripcion.inputSelect;

  //* Extrae la info dependiendo de la modalidad
  (message[dataForm['form']]?.descripcion.info == undefined) ? info : info = message[dataForm['form']].descripcion.info;

  //* Extrae el label dependiendo de la modalidad
  (message[dataForm['form']]?.descripcion.label == undefined) ? label : label = message[dataForm['form']].descripcion.label;


  // console.log(dataForm);

  const sendData = () => {

    let solicitud = [];
    let files = [];
    let inputText = [];
    let inputSelect = [];

    //* Arvhicos que se enviaran
    if (message[dataForm['form']]?.descripcion.inputFile != undefined) {
      for (let i = 0; i < message[dataForm['form']].descripcion.inputFile.length; i++) {
        const code = message[dataForm['form']].descripcion.inputFile[i].code;
        if (dataForm[code] != undefined) {
          const data = dataForm[code].file;
          files = [...files, { code, file: data }]
        }
      }
    }

    //* InputText que se enviaran
    if (message[dataForm['form']]?.descripcion.inputText != undefined) {
      for (let i = 0; i < message[dataForm['form']].descripcion.inputText.length; i++) {
        const code = message[dataForm['form']].descripcion.inputText[i].code;
        if (dataForm[code] != undefined) {
          const data = dataForm[code];
          inputText = [...inputText, { code, data }]
        }
      }
    }

    //* InputSelect que se enviaran
    if (message[dataForm['form']]?.descripcion.inputSelect != undefined) {
      for (let i = 0; i < message[dataForm['form']].descripcion.inputSelect.length; i++) {
        const code = message[dataForm['form']].descripcion.inputSelect[i].code;
        if (dataForm[code] != undefined) {
          const data = dataForm[code];
          inputSelect = [...inputSelect, { code, data }]
        }
      }
    }

    solicitud = [inputSelect, inputText, files]
    console.log(solicitud, 'Solicitud')
  }

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
              label="Seleccione Modalidad de Titulación"
              defaultValue={''}
              {...register("form")}
              inputProps={register('form', {
                required: 'Por favor seleccione una modalidad',
              })}
              error={!!errors?.form}
              helperText={errors?.form?.message}
            // required={true}
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
            <Grid item='true' xs={12}>
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


          {/* //? InputSelect */}
          {
            (inputSelect == undefined)
              ? <></>
              : inputSelect.map((option, index) => (
                <InputSelect key={index} url={option.url} name={option.name} code={option.code} setValue={setValue} register={register} errors={errors} />
              ))
          }

          {/* //? InputText */}
          {
            (inputText == undefined)
              ? <></>
              : inputText.map((option, index) => (
                <InputText key={index} name={option.name} code={option.code} setValue={setValue} register={register} errors={errors} />
              ))
          }

          {/* //? Documentación Label */}
          <Grid item='true' xs={12}>
            <Typography component={'h1'} align='center'>Documentación</Typography>
          </Grid>

          {/* //? InputFiles */}
          <Box
            sx={{
              // backgroundColor: 'white',
              border: '1px dashed black',
              borderRadius: '8px',
            }}
          >
            <Grid spacing={1} container item='true' xs={12}>
              {
                (inputFile == undefined)
                  ? <Grid item='true' xs={12} align='center'> <Typography>Selecciona una modalidad para poder ingresar los documentos correspondientes</Typography> </Grid>
                  : inputFile.map((option, index) => (
                    <InputFile key={index} name={option.name} code={option.code} setValue={setValue} dataForm={dataForm[option.code]} />
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
        <Grid item='true' xs={12}>
          <Button type='submit' variant="contained" color="success" size="large" onClick={sendData}>
            enviar Solicitud
          </Button>
        </Grid>
      </Grid>
    </form >
  )
}
