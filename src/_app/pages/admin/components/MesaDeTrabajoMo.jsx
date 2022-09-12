import { Button, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Link } from "react-router-dom"
import { object } from "../../../helpers"
import { PieChart } from "./PieChart"
import { TableModalidades } from "./TableModalidades"

export const MesaDeTrabajoMo = ({ message }) => {

  return (
    <Grid container className="mb-3">
      <Grid item container xs={12} sx={{ marginBottom: '10px' }} spacing={2}>
        <Grid item xs={12} md={4} sx={{ width: '100%' }} >
          <Grid item xs={12} sx={{ marginBottom: '10px' }}>
            <Link to={`/modalidad/add`} state={{ data: object, edit: false, variante: "standard" }}><Button variant="contained" fullWidth>agregar de Modalidad</Button></Link>
          </Grid>
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
