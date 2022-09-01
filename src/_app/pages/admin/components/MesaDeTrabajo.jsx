import { Grid } from "@mui/material";
import { Graficas } from "./Graficas";
import { TableUser } from "./TableUser"

export const MesaDeTrabajo = ({ message }) => {


  let estudiante = 0;
  let docente = 0;

  message.forEach((option) => {
    (option.tipoUsuario_id == 1)
      ? estudiante += 1
      : (option.tipoUsuario_id == 2) && (docente += 1)
  });

  const label = ['Estudiantes', 'Docentes']
  const result = [estudiante, docente]

  return (
    <>
      <Grid container>
        <Graficas result={result} label={label} />
        <TableUser message={message} />
      </Grid>
    </>
  )
}
