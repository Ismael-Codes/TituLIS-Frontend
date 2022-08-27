import { CircularProgress, MenuItem, TextField } from "@mui/material"
import { useFetch } from "../../../../hook/useFetch";

export const InputSelect = ({ url, name, code, register }) => {

  const { data, isLoading, hasError } = useFetch(url)

  const { message } = data;

  return (
    <>
      {
        (isLoading)
          ? <CircularProgress />
          : (!hasError) ? (<TextField
            className='animate__animated animate__headShake'
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
          </TextField>) : <Alert variant="filled" severity="error">Ocurrió un error, inténtelo mas tarde!!</Alert>
      }
    </>
  )
}
