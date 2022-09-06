import { Delete } from "@mui/icons-material";
import { Grid, IconButton, MenuItem, TextField, Tooltip } from "@mui/material"

export const Selectores = ({ data, index, variante, openEdit, register, unregister, selector }) => {

  return (
    <Grid item container xs={12} sx={{ marginBottom: '20px' }} spacing={2}>
      <Grid item xs={12} md={3} sx={{ width: '100%' }} >
        <TextField
          className="animate__animated animate__headShake"
          sx={{ width: 1 }}
          label="Nombre"
          {...register(`descripcion.inputSelect.${index}.name`)}
          defaultValue={data.name}
          variant={variante}
          InputProps={{
            readOnly: openEdit
          }}
        />
      </Grid>

      <Grid item xs={12} md={3} sx={{ width: '100%' }} >
        <TextField
          className="animate__animated animate__headShake"
          sx={{ width: 1 }}
          label="Código"
          {...register(`descripcion.inputSelect.${index}.code`)}
          defaultValue={data.code}
          variant={variante}
          InputProps={{
            readOnly: openEdit
          }}
        />
      </Grid>

      <Grid item xs={12} md={4} sx={{ width: '100%' }} >
        <TextField
          className="animate__animated animate__headShake"
          sx={{ width: 1 }}
          label="API url"
          {...register(`descripcion.inputSelect.${index}.url`)}
          defaultValue={data.url}
          variant={variante}
          InputProps={{
            readOnly: openEdit
          }}
        />
      </Grid>

      <Grid item xs={12} md={1.5} sx={{ width: '100%' }} >
        <TextField
          className="animate__animated animate__headShake"
          select
          fullWidth
          label='Requerido'
          {...register(`descripcion.inputSelect.${index}.required`)}
          defaultValue={data.required}
          variant={variante}
          InputProps={{
            readOnly: openEdit
          }}
        >
          <MenuItem value='true' >
            Sí
          </MenuItem>
          <MenuItem value='false' >
            No
          </MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} md={0.5} sx={{ width: '100%' }} >
        {
          !openEdit && (<Tooltip title="Eliminar">
            <IconButton className="animate__animated animate__headShake" onClick={() => {
              unregister(`descripcion.inputSelect.${index}`)
              delete selector[index]
            }}>
              <Delete />
            </IconButton>
          </Tooltip>)
        }
      </Grid>
    </Grid >
  )
}
