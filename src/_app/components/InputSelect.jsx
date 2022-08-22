import { Grid, MenuItem, TextField, Typography } from "@mui/material"
import { useFetch } from "../../hook/useFetch"

export const InputSelect = ({ url, name, code, setValue, register, errors }) => {

  const { data, isLoading, hasError } = useFetch(url)
  const { message } = data;

  return (
    <>
      {
        (isLoading)
          ? <></>
          : <Grid item='true' xs={12} className="mb-3">
            <TextField
              select
              fullWidth
              label={name}
              defaultValue={''}
              {...register(code)}
              inputProps={register(code, {
                required: `Por favor ingrese ${name}`,
              })}
              error={!!errors[code]}
              helperText={errors[code]?.message}
            // required={true}
            >
              {message.map((option, index) => (
                <MenuItem key={index} value={option.email} >
                  {`${option.nombre} ${option.a_paterno} ${option.a_materno}`}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
      }

    </>
  )
}
