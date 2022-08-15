import MenuItem from '@mui/material/MenuItem';
import { useForm } from "react-hook-form";
import Grid from '@mui/system/Unstable_Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CustomizedAccordions from '../../components/CustomizedAccordions';
import { Alert, AlertTitle } from '@mui/material';

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

  const { formState, getValues, watch, register, handleSubmit, reset } = useForm();
  const { errors } = formState;

  //^ No es necesario
  watch();

  //? Data extraida del form
  const dataForm = getValues()

  const onSubmit = (data) => alert(JSON.stringify(data, null, 4));

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register("form")}
                label="Modalidad de Titulación"
                inputProps={register('form', {
                  required: 'Por favor seleccione una modalidad',
                })}
                error={errors.form}
                helperText={errors.form?.message}
              >
                {forms.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* //? Alert */}
            <Grid item='true' xs={12}>
              <Alert severity="info" className="mb-2">
                <AlertTitle>Info</AlertTitle>
                Los <strong>requisitos</strong> y <strong>documentación</strong> varían dependiendo de la <strong>modalidad</strong>
              </Alert>
            </Grid>

            {/* //? Ejemplo 1 */}
            <Grid item='true' xs={12}>
              <TextField
                sx={{ width: 1 }}
                label="Ejemplo"
                {...register("ejemplo")}
                inputProps={register('ejemplo', {
                  required: 'Por favor ingrese un ejemplo',
                })}
                error={errors.ejemplo}
                helperText={errors.ejemplo?.message}
              />
            </Grid>
          </Grid>

          {/*//? Segundo */}
          <Grid spacing={2} xs={12} md={6} className="mb-3">

            {/* //? Acordions */}
            <Grid item='true' xs={12}>
              {
                (!dataForm.form == "") ? <CustomizedAccordions dataForm={dataForm} /> : <></>
              }
            </Grid>
          </Grid>

          {/* //? Boton de enviar */}
          <Grid item='true' xs={12}>
            <Button type="submit" variant="contained" color="success" size="large">
              enviar Solicitud
            </Button>
          </Grid>
          <Grid item='true' xs={12}>
            <pre>{JSON.stringify(getValues(), null, 4)}</pre>
          </Grid>
        </Grid>
      </form>
    </>
  )
}
