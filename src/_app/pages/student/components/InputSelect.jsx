import { CircularProgress, Grid, MenuItem, TextField, Typography } from "@mui/material"
import { useFetch } from "../../../../hook/useFetch";

export const InputSelect = ({ url, name, code, register }) => {

  const { data, isLoading, hasError } = useFetch(url)

  const { message } = data;

  return (
    <>
      {
        (!isLoading)
          ? (<TextField
            className='animate__animated animate__headShake my-2'
            select
            fullWidth
            label={name}
            defaultValue={''}
            {...register(code)}
          >
            {message.map((option, index) => (
              <MenuItem key={index} value={option.email} >
                {`${option.nombre} ${option.a_paterno} ${option.a_materno}`}
              </MenuItem>
            ))}
          </TextField>)
          : <CircularProgress />
      }

    </>
  )
}
