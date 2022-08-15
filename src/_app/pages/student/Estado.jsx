import { Card } from "@mui/material"
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Fragment } from "react";
import Grid from '@mui/system/Unstable_Grid';

export const Estado = () => {

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  const card = (
    <Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Modalidad
        </Typography>
        <Typography variant="h5" component="div">
          Titulo
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="error" size="small">Cancelar</Button>
        <Button variant="contained" size="small">Editar</Button>
      </CardActions>
    </Fragment>
  );

  return (
    <>
      <Grid container spacing={2} className="mb-3">
        <Grid item='true' xs={12} textAlign="center">
          <h1>Estado de Solicitud</h1>
        </Grid>
        <Grid item='true' xs={12} md={6}>
          <Box sx={{ minWidth: 275 }} className="col-6">
            <Card variant="outlined">{card}</Card>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
