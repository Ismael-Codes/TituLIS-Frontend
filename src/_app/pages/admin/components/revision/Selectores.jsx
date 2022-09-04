import { Delete } from "@mui/icons-material";
import { Grid, IconButton, MenuItem, TextField, Tooltip } from "@mui/material"

export const Selectores = ({ data, variante, openEdit }) => {

  const requerido = data.required == true ? 1 : 2;

  return (
    <Grid item container xs={12} sx={{ marginBottom: '20px' }} spacing={2}>
      <Grid item xs={12} md={3} sx={{ width: '100%' }} >
        <TextField
          sx={{ width: 1 }}
          label="Nombre"
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
          defaultValue={data.code}
          variant={variante}
          InputProps={{
            readOnly: openEdit
          }}
        />
      </Grid>

      <Grid item xs={12} md={4} sx={{ width: '100%' }} >
        <TextField
          sx={{ width: 1 }}
          label="API url"
          defaultValue={data.url}
          variant={variante}
          InputProps={{
            readOnly: openEdit
          }}
        />
      </Grid>

      <Grid item xs={12} md={1.5} sx={{ width: '100%' }} >
        <TextField
          select
          fullWidth
          label='Requerido'
          // value={requerido}
          defaultValue={requerido}
          variant={variante}
          InputProps={{
            readOnly: openEdit
          }}
        >
          <MenuItem value='1' >
            Sí
          </MenuItem>
          <MenuItem value='2' >
            No
          </MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} md={0.5} sx={{ width: '100%' }} >
        {
          !openEdit && (<Tooltip title="Eliminar">
            <IconButton >
              <Delete />
            </IconButton>
          </Tooltip>)
        }
      </Grid>
    </Grid>
  )
}
