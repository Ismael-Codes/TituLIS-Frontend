import { Grid, TextField } from "@mui/material"

export const Requisitos = ({ info, label, variante, openEdit, register, name }) => {

  return (
    <Grid container spacing={2} className="mb-3">
      <Grid item xs={12} md={12} align='center' className="mb-3">
        <TextField
          fullWidth
          id="outlined-multiline-static"
          label={label}
          defaultValue={info}
          {...register(`descripcion.info.${name}`)}
          multiline
          variant={variante}
          InputProps={{
            readOnly: openEdit
          }}
        />

      </Grid>
    </Grid >
  )
}
