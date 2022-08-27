import { CardContent, Grid, Typography } from "@mui/material"

export const CardSolicitud = ({ label, user, finalData }) => {

  const { inputSelect, inputFile, inputText } = finalData;

  return (
    <div className="card">
      <h5 class="card-header">{label}</h5>
      <div className="card-body">
        <Grid container spacing={2}>

          <Grid item='true' xs={12} md={6} >
            <h6 className="card-subtitle">Nombre del Solicitante:</h6>
            <p className="card-text">{`${user.given_name} ${user.aMaterno} ${user.aPaterno}`}</p>
          </Grid>

          <Grid item='true' xs={12} md={6}>
            <h6 className="card-subtitle">Matricula:</h6>
            <p className="card-text">{user.matricula}</p>
          </Grid>

          <Grid item='true' xs={12} md={6}>
            <h6 className="card-subtitle">Correo:</h6>
            <p className="card-text">{user.email}</p>
          </Grid>
        </Grid>
        <hr />
        <Grid container spacing={2}>
          {inputSelect.map((option, index) => (
            <Grid item key={index} xs={12} md={6} >
              <h6 className="card-subtitle">{option.inputName}:</h6>
              <p className="card-text">{option.data}</p>
            </Grid>
          ))}

          {inputText.map((option, index) => (
            <Grid item key={index} xs={12} md={6} >
              <h6 className="card-subtitle">{option.inputName}:</h6>
              <p className="card-text">{option.data}</p>
            </Grid>
          ))}
        </Grid>
        <hr />
        <Grid container spacing={2}>
          {
            inputFile == ''
            && (<Grid item xs={12} ><Typography variant="h6" color="text.secondary" align="center">
              <strong>Sin Archivo\s</strong>
            </Typography> </Grid>)
          }
          {inputFile.map((option, index) => (
            <Grid item key={index} xs={12} md={6} >
              <h6 className="card-subtitle">{option.inputName}:</h6>
              <p className="card-text">{option.fileName}</p>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}
