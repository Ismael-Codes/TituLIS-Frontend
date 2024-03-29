import { Box, Grid, TextField, Typography } from "@mui/material"
import DescriptionIcon from '@mui/icons-material/Description';

export const CardSolicitud = ({ label, user, finalData }) => {

  const { inputSelect, inputFile, inputText } = finalData;

  return (
    <div className="card">
      <h5 className="card-header">{label}</h5>
      <div className="card-body">
        <Grid container spacing={2}>

          <Grid item xs={12} md={4} >
            <h6 className="card-subtitle">Nombre del Solicitante:</h6>
            <p className="card-text">{`${user.given_name} ${user.aMaterno} ${user.aPaterno}`}</p>
          </Grid>

          <Grid item xs={12} md={4}>
            <h6 className="card-subtitle">Matricula:</h6>
            <p className="card-text">{user.matricula}</p>
          </Grid>

          <Grid item xs={12} md={4}>
            <h6 className="card-subtitle">Correo:</h6>
            <p className="card-text">{user.email}</p>
          </Grid>
        </Grid>
        <hr />
        <Grid container spacing={2}>
          {inputSelect.map((option, index) => (
            <Grid item key={index} xs={12} md={4} >
              <h6 className="card-subtitle">{option.inputName}:</h6>
              <p className="card-text">{option.data}</p>
            </Grid>
          ))}

          {inputText.map((option, index) => (
            <Grid item key={index} xs={12} md={4} >
              <h6 className="card-subtitle">{option.inputName}:</h6>
              <p className="card-text">{option.data}</p>
            </Grid>
          ))}
        </Grid>
        {
          (inputText != '' && inputSelect != '') && (<hr />)
        }
        <Grid container spacing={2} className="mt-2">
          {
            inputFile == ''
            && (<Grid item xs={12} ><Typography variant="h6" color="text.secondary" align="center">
              <strong>Sin Archivo\s</strong>
            </Typography> </Grid>)
          }
          {inputFile.map((option, index) => (
            <Grid item key={index} xs={12} md={6} >
              <h6 className="card-subtitle">{option.inputName}:</h6>
              <a href={option.url} target="_blank" rel="noopener noreferrer"><DescriptionIcon sx={{ color: 'action.active' }} />{option.fileName}</a>
              {/* <p className="card-text"><DescriptionIcon sx={{ color: 'action.active' }} />{option.fileName}</p> */}
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}
