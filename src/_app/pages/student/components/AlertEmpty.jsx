import { Alert, AlertTitle, Button, Collapse, Grid } from "@mui/material"

export const AlertEmpty = ({ openWarning, filesEmpty = '', selectsEmpty, inputsEmpty, preFinalData }) => {
  return (
    <Collapse in={openWarning}>
      <Alert
        severity="warning"
        className="my-2"
      >
        <AlertTitle>Advertencia</AlertTitle>
        <Grid className="mt-1">Campos <strong>no obligatorios</strong> pero vacíos:</Grid>
        {
          filesEmpty == '' && (selectsEmpty != '' && (<Grid>- Selector\es: <strong>{selectsEmpty}.</strong></Grid>))
        }
        {
          filesEmpty != ''
            ? (<Grid>- Archivos: <strong>{filesEmpty}.</strong></Grid>)
            : inputsEmpty != '' && (<Grid>- Caja\s de texto: <strong>{inputsEmpty}.</strong></Grid>)
        }
        <Grid className="mt-1">
          <Button variant="outlined" color="warning" onClick={preFinalData}>Continuar de todos modos</Button>
        </Grid>
      </Alert>
    </Collapse>
  )
}
