import { Alert, AlertTitle, Collapse, Grid } from "@mui/material"

export const AlertRequired = ({ open, filesRequired, selectsRequired, inputsRequired }) => {

  return (
    <Collapse in={open}>
      <Alert
        // variant="filled"
        severity="error"
        className="my-2"
      >
        <AlertTitle>Error</AlertTitle>
        <Grid className="mt-1">Archivos obligatorios:</Grid>
        {
          filesRequired == '' && (selectsRequired != '' && (<Grid>- Selector\es: <strong>{selectsRequired}.</strong></Grid>))
        }
        {
          filesRequired != ''
            ? (<Grid>- Archivos: <strong>{filesRequired}.</strong></Grid>)
            : inputsRequired != '' && (<Grid>- Caja\s de texto: <strong>{inputsRequired}.</strong></Grid>)
        }
      </Alert>
    </Collapse>
  )
}
