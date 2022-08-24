import { TextField } from '@mui/material';

export const InputText = ({ name = '', code = '', register }) => {

  return (
      <TextField
        className='animate__animated animate__headShake'
        sx={{ width: 1 }}
        label={name}
        defaultValue={''}
        {...register(code)}
      />
  )
}
