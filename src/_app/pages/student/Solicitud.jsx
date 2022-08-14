import MenuItem from '@mui/material/MenuItem';
import { useForm } from "react-hook-form";
import Grid from '@mui/system/Unstable_Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

//? Select
const forms = [
  {
    value: '1',
    label: 'Elaboración Tesis',
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
    label: 'Realización de estudios de Maestría',
  },
  {
    value: '5',
    label: 'Realización de estudios de Doctorado',
  },
  {
    value: '6',
    label: 'Titulación como primer autor de artículo científico<',
  }
];

export const Solicitud = () => {

  const { formState, getValues, watch, register, handleSubmit } = useForm();
  const { errors } = formState;

  //^ No es necesario
  watch();

  const onSubmit = (data) => alert(JSON.stringify(data, null, 4));

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} className="mb-3">
          <Grid item='true' xs={12} textAlign="center">
            <h1>Proceso de Solicitud</h1>
          </Grid>
          <Grid item='true' xs={12} md={6}>
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
          <Grid item='true' xs={12} md={6}>
            <TextField
              sx={{ width: 1 }}
              label="Ejemplo 2"
              {...register("ejemplo2")}
              inputProps={register('ejemplo2', {
                required: 'Por favor ingrese un ejemplo 2',
              })}
              error={errors.ejemplo2}
              helperText={errors.ejemplo2?.message}
            />
          </Grid>
          <Grid item='true' xs={12} md={4}>
            <TextField
              select
              fullWidth
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
