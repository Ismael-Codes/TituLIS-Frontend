import { Box, Grid, Typography } from "@mui/material"
import { InputFile } from "./InputFile"

export const ThirdStep = ({ setValue, dataForm, inputFile }) => {

  return (
    <>
      {/* //? Documentación Label */}
      <Typography component={'h1'} align='center'>Documentación</Typography>

      {/* //? InputFiles */}
      <Box
        sx={{
          // backgroundColor: 'white',
          border: '1px dashed black',
          borderRadius: '8px',
        }}
      >
        <Grid container item={true}>
          {
            (inputFile == undefined)
              ? <Grid item='true' xs={12} align='center'> <Typography>Selecciona una modalidad para poder ingresar los documentos correspondientes</Typography> </Grid>
              : inputFile.map((option, index) => (
                <InputFile key={index} name={option.name} code={option.code} setValue={setValue} dataForm={dataForm[option.code]} />
              ))
          }
        </Grid>
      </Box>
    </>
  )
}
