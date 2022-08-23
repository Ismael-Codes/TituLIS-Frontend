import { Grid } from "@mui/material"

export const LoadingSpinner2 = () => {
  return (
    <Grid container spacing={2} className="mb-3 mt-5">
      <Grid item={true} xs={12} textAlign="center">
        <div className="spinner-border text-center" role="status" aria-hidden="true" style={{ width: '10rem', height: '10rem' }}></div>
      </Grid>
      <Grid item={true} xs={12} textAlign="center">
        <h1 className="text-center">Cargando</h1>
      </Grid>
    </Grid>
  )
}
