import MenuItem from '@mui/material/MenuItem';
import { useForm } from "react-hook-form";
import Grid from '@mui/system/Unstable_Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CustomizedAccordions from '../../components/CustomizedAccordions';
import { Alert, AlertTitle, Box, Checkbox, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import { InputFile } from '../../components';

//? Select
const forms = [
  {
    value: '1',
    label: 'Elaboración de Tesis',
  },
  {
    value: '2',
    label: 'Examen Teórico - Práctico',
  },
  {
    value: '3',
    label: 'Alto Rendimiento Académico',
  },
  {
    value: '4',
    label: 'Examen General de Egreso',
  },
  {
    value: '5',
    label: 'Realización de estudios de Maestría',
  },
  {
    value: '6',
    label: 'Realización de estudios de Doctorado',
  },
  {
    value: '7',
    label: 'Titulación como primer autor de artículo científico',
  }
];

export const Solicitud = () => {

  const { formState, getValues, watch, register = '', handleSubmit, setValue } = useForm();
  const { errors = false } = formState;

  //^ No es necesario
  watch();

  //? Data extraida del form
  const dataForm = getValues()
  console.log(dataForm);

  const onSubmit = (data) => alert(JSON.stringify(data, null, 4));

  //? Base 64
  const convertirBase64 = (archivos, name) => {
    Array.from(archivos).forEach((archivo) => {
      let reader = new FileReader();
      reader.readAsDataURL(archivo);
      reader.onload = () => {
        let arrayAuxiliar = [];
        let base64 = reader.result;
        arrayAuxiliar = base64.split(',')
        const file = { name: archivo.name, base64: arrayAuxiliar[1] }
        setValue(name, { file })
      }
    })
  }
  const [open, setOpen] = useState(true);

  return (
    <>
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
                {forms.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
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

            {/* //? Ejemplo 1 */}
            {/* <Grid item='true' xs={12}>
              <TextField
                sx={{ width: 1 }}
                label="Ejemplo"
                defaultValue={''}
                {...register("ejemplo")}
                inputProps={register('ejemplo', {
                  required: 'Por favor ingrese un ejemplo',
                })}
                error={!!errors.ejemplo}
                helperText={errors?.ejemplo?.message}
              // required={true}
              />
            </Grid> */}

            <Grid item='true' xs={12}>
              <Typography component={'h1'} align='center'>Subir Archivos</Typography>
            </Grid>

            <Box
              sx={{
                // backgroundColor: 'white',
                border: '1px dashed black',
                borderRadius: '8px',
              }}
            >
              <Grid spacing={1} container item='true' xs={12}>
                {/* //? Input File */}
                <Grid item='true' xs={12} align='center'>
                  <h3>Subir Archivos</h3>
                </Grid>

                {/* //? Constacia de Servicio Social */}
                <Grid item='true'>
                  <InputFile name={'Constancia Servicio Social'} code={'ConstanciaServicio'} condicion={dataForm?.ConstanciaServicio} fileName={dataForm?.ConstanciaServicio?.file.name} convertirBase64={convertirBase64} />
                </Grid>

                {/* //? CURP */}
                <Grid item='true'>
                  <InputFile name={'CURP'} code={'CURP'} condicion={dataForm?.CURP} fileName={dataForm?.CURP?.file.name} convertirBase64={convertirBase64} />
                </Grid>

                {/* //? Constacia Practicas */}
                <Grid item='true'>
                  <InputFile name={'Constancia Practicas'} code={'ConstanciaPractica'} condicion={dataForm?.ConstanciaPractica} fileName={dataForm?.ConstanciaPractica?.file.name} convertirBase64={convertirBase64} />
                </Grid>



              </Grid>
            </Box>
          </Grid>

          {/*//? Segundo */}
          <Grid spacing={2} xs={12} md={6} className="mb-3">
            {/* //? Acordions */}
            <Grid item='true' xs={12}>
              {
                (!dataForm.form == "") ? <CustomizedAccordions dataForm={dataForm} /> : <span className="text-end fs-4 fw-normal">Selecciona una modalidad para visualizar los documentos y requisitos</span>
              }
            </Grid>
          </Grid>

          {/* //? Boton de enviar */}
          <Grid item='true' xs={12}>
            <Button variant="contained" color="success" size="large">
              enviar Solicitud
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}
