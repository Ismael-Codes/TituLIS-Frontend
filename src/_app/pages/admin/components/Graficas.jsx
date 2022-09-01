import { Box, Grid, Typography } from "@mui/material"
import { DoughnutChart } from "./DoughnutChart"

export const Graficas = ({ result, label }) => {

  return (

    <Grid item container xs={12} sx={{ marginBottom: '10px' }} spacing={2}>
      <Grid item xs={12} md={3} sx={{ width: '100%' }} >
        <Box sx={{ backgroundColor: '#FFFFFF', borderRadius: '10px', padding: '10px', height: '300px' }} >
          <DoughnutChart result={result} label={label} />
        </Box>
      </Grid>

      <Grid item xs={12} md={9} sx={{ width: '100%' }} >
        <Box sx={{
          backgroundColor: '#FFFFFF', borderRadius: '10px', padding: '10px', height: '100%'
        }}>
          <Typography variant="h4" align="center">Hola, Soy una box vacía!!</Typography>
        </Box>
      </Grid>
    </Grid>
  )
}
