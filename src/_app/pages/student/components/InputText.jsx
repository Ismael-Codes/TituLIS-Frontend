import { TextField } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid';

export const InputText = ({ name = '', code = '', register }) => {

  return (
    <Grid xs={12}>
      <TextField
        className='animate__animated animate__headShake my-2'
        sx={{ width: 1 }}
        label={name}
        defaultValue={''}
        {...register(code)}
      />
    </Grid>
  )
}
