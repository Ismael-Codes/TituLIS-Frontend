import { TextField } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid';

export const InputText = ({ name = '', code = '', register, errors }) => {

  return (
    <Grid item='true' xs={12}>
      <TextField
      className='animate__animated animate__headShake'
        sx={{ width: 1 }}
        label={name}
        defaultValue={''}
        {...register(code)}
        inputProps={register(code, {
          required: `Por favor ingrese ${name}`,
        })}
        error={!!errors[code]}
        helperText={errors[code]?.message}
      />
    </Grid>
  )
}
