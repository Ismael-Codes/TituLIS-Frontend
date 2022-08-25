import { CardContent, Grid, Typography } from "@mui/material"

export const CardSolicitud = ({ label, user, finalData }) => {

  return (
    <Grid sx={{ backgroundColor: 'white', borderRadius: 2 }} className="mb-2">
      <CardContent>
        <Typography variant="h5" component="div">
          {label}
        </Typography>
        <Typography sx={{ mt: 1 }} color="text.secondary">
          <strong>Nombre:</strong> {`${user.given_name} ${user.aMaterno} ${user.aPaterno}`}
        </Typography>
        <Typography sx={{ mb: 1 }} color="text.secondary">
          <strong>Matricula:</strong> {user.matricula}
        </Typography>
        {finalData.select.map((option) => (
          <Typography variant="body2">
            <strong>{option.helper}:</strong> {option.data}
          </Typography>
        ))}
        {finalData.input.map((option) => (
          <Typography variant="body2">
            <strong>{option.helper}:</strong> {option.data}
          </Typography>
        ))}
        {
          finalData.files != [] && (<Typography variant="body2" sx={{ mt: 1 }}>
            <strong>Archivo\s:</strong>
          </Typography>)
        }
        {
          finalData.files.map((option) => (
            <Typography variant="body2">{option}</Typography>
          ))
        }

      </CardContent>
    </Grid >
  )
}
