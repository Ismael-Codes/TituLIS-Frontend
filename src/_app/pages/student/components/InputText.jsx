import { TextField } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid';

export const InputText = ({ name = '', code = '', register }) => {

  return (
    <Grid item='true' xs={12}>
      <TextField
        className='animate__animated animate__headShake'
        sx={{ width: 1 }}
        label={name}
        defaultValue={''}
        {...register(code)}
      />
    </Grid>
  )
}
