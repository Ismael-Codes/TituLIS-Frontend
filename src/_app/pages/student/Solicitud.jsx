import MenuItem from '@mui/material/MenuItem';
import { useForm } from "react-hook-form";
import Grid from '@mui/system/Unstable_Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

//? Select
const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

export const Solicitud = () => {


  const { formState, getValues, watch, register, handleSubmit } = useForm();
  const { errors } = formState;

  watch();

  const onSubmit = (data) => alert(JSON.stringify(data, null, 4));



  // const { register, handleSubmit, control } = useForm();
  // const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} className="mb-3">
          <Grid item='true' xs={12} md={6}>
            <TextField
              sx={{ width: 1 }}
              label="Nombre"
              {...register("firstName")}
              inputProps={register('firstName', {
                required: 'Please enter First Name',
              })}
              error={errors.firstName}
              helperText={errors.firstName?.message}
            />
          </Grid>
          <Grid item='true' xs={12} md={6}>
            <TextField
              sx={{ width: 1 }}
              label="Correo"
              {...register("email")}
              inputProps={register('email', {
                required: 'Please enter email',
              })}
              error={errors.email}
              helperText={errors.email?.message}
            />
          </Grid>
          <Grid item='true' xs={12} md={4}>
            <TextField
              select
              fullWidth
              defaultValue=""
              label="Select"
              inputProps={register('currency', {
                required: 'Please enter currency',
              })}
              error={errors.currency}
              helperText={errors.currency?.message}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item='true' xs={12}>
            <Button type="submit" variant="contained" color="success" size="large">
              submit
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
