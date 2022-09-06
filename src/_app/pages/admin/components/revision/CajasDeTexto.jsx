import { Delete } from "@mui/icons-material";
import { Grid, IconButton, MenuItem, TextField, Tooltip } from "@mui/material"

export const CajasDeTexto = ({ index, data, variante, openEdit, register, cajaTexto, unregister }) => {

  return (
    <Grid item container xs={12} sx={{ marginBottom: '20px' }} spacing={2}>
      <Grid item xs={12} md={3} sx={{ width: '100%' }} >
        <TextField
          sx={{ width: 1 }}
          label="Nombre"
          {...register(`descripcion.inputText.${index}.name`)}
          defaultValue={data.name}
          variant={variante}
          InputProps={{
            readOnly: openEdit
          }}
        />
      </Grid>

      <Grid item xs={12} md={3} sx={{ width: '100%' }} >
        <TextField
          sx={{ width: 1 }}
          label="Código"
          {...register(`descripcion.inputText.${index}.code`)}
          defaultValue={data.code}
          variant={variante}
          InputProps={{
            readOnly: openEdit
          }}
        />
      </Grid>

      <Grid item xs={12} md={2} sx={{ width: '100%' }} >
        <TextField
          select
          fullWidth
          label='Requerido'
          {...register(`descripcion.inputText.${index}.required`)}
          defaultValue={data.required}
          variant={variante}
          InputProps={{
            readOnly: openEdit
          }}
        >
          <MenuItem value='true' >
            Sí
          </MenuItem>
          <MenuItem value='false'>
            No
          </MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} md={0.5} sx={{ width: '100%' }} >
        {
          !openEdit && (<Tooltip title="Eliminar">
            <IconButton className="animate__animated animate__headShake" onClick={() => {
              unregister(`descripcion.inputText.${index}`)
              delete cajaTexto[index]
            }}>
              <Delete />
            </IconButton>
          </Tooltip>)
        }
      </Grid>
    </Grid>
  )
}
