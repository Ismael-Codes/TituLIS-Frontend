import { Button, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { PieChart } from "./PieChart"
import { TableModalidades } from "./TableModalidades"

export const MesaDeTrabajoMo = ({ message }) => {

  return (
    <Grid container className="mb-3">
      <Grid item xs={12} sx={{ marginBottom: '10px' }}>
        <Button variant="contained" fullWidth>agregar de Modalidad</Button>
      </Grid>
      <Grid item container xs={12} sx={{ marginBottom: '10px' }} spacing={2}>
        <Grid item xs={12} md={4} sx={{ width: '100%' }} >
          <Box sx={{ backgroundColor: '#FFFFFF', borderRadius: '10px', padding: '10px', height: '520px' }} >
            <PieChart />
          </Box>
        </Grid>

        <Grid item xs={12} md={8} sx={{ width: '100%' }} >
          <Box sx={{
            backgroundColor: '#FFFFFF', borderRadius: '10px', padding: '10px', height: '100%'
          }}>
            <TableModalidades message={message} />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
}
