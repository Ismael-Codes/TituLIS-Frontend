import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/system/Unstable_Grid';

export const LoadingProgress = () => {
  return (
    <>
      <Grid container align='center'>
        <Grid item='true' xs={12}>
          <CircularProgress />
        </Grid>

        <Grid item='true' xs={12}>
          <h5>Cargando...</h5>
        </Grid>
      </Grid>
    </>
  )
}
