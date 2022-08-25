import { useForm } from "react-hook-form";
import Grid from '@mui/system/Unstable_Grid';
import { Alert, Button, Collapse, AlertTitle, Typography, Paper, CardContent, CardActions, Box, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { useState } from 'react';
import { FirstStep, SecondStep, ThirdStep } from '../components';
import { sendData } from '../../../helpers';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import { mainData, validarSecond } from "../helper";
import { useContext } from 'react';
import { AuthContext } from "../../../../auth/context/AuthContext";
import { CardSolicitud } from "./CardSolicitud";

export const FormSolicitud = ({ message = '' }) => {

  const { user } = useContext(AuthContext)

  const { getValues, watch, register, setValue, unregister } = useForm();

  const [open, setOpen] = useState(false);
  const [openWarning, setOpenWarning] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const [finalData, setFinalData] = useState({
    select: null,
    input: null,
    files: null,
  })

  //* Almacena los empty
  const [inputsEmpty, setInputsEmpty] = useState('')
  const [selectsEmpty, setSelectsEmpty] = useState('')
  const [filesEmpty, setFilesEmpty] = useState('')

  //* Almacena los required
  const [inputsRequired, setInputsRequired] = useState('')
  const [selectsRequired, setSelectsRequired] = useState('')
  const [filesRequired, setFilesRequired] = useState('')


  //* Mantiene el dataform Actualizado
  watch();

  //? Data extraida del form
  const dataForm = getValues()

  //* Extrae la data que sera mostrada
  const { label, info, inputText, inputSelect, inputFile } = mainData(message, dataForm)

  //? Pimer Paso Boton Siguiente
  const firstHandleNext = () => {
    (!dataForm.form == undefined || !dataForm.form == '')
      ? (
        setActiveStep((prevActiveStep) => prevActiveStep + 1),
        setOpen(false)
      )
      : setOpen(true)
  };

  //? Segundo Paso Boton Siguiente
  const secondHandleNext = () => {

    //* Valida los 'required = true'
    if (inputText != undefined || inputSelect != undefined) {
      const helperText = validarSecond(inputText, dataForm)
      const helperSelect = validarSecond(inputSelect, dataForm)

      setInputsEmpty(helperText.helperArrayEmpty.join())
      setSelectsEmpty(helperSelect.helperArrayEmpty.join())

      setInputsRequired(helperText.helperArrayRequired.join())
      setSelectsRequired(helperSelect.helperArrayRequired.join())

      if (helperSelect.helperRequired && helperText.helperRequired) {
        setOpenWarning(false)
        setOpen(false)
        if (helperSelect.helperEmpty && helperText.helperEmpty) {
          setActiveStep((prevActiveStep) => prevActiveStep + 1)
        } else {
          setOpenWarning(true)
        }
      } else {
        setOpen(true)
      }
    } else { setActiveStep((prevActiveStep) => prevActiveStep + 1) }
  };

  //? Segundo Paso Boton Regresar
  const firstHandleBack = () => {
    setOpenWarning(false)
    setOpen(false)
    unregister('');
    setActiveStep((prevActiveStep) => {
      setValue('form', '')
      return prevActiveStep - 1
    });
  };

  //? Tercer Paso Boton Siguiente
  const thirdHandleNext = () => {

    if (inputFile != undefined) {

      const helperFiles = validarSecond(inputFile, dataForm)

      setFilesEmpty(helperFiles.helperArrayEmpty.join())
      setFilesRequired(helperFiles.helperArrayRequired.join())

      if (helperFiles.helperRequired) {
        setOpenWarning(false)
        setOpen(false)
        if (helperFiles.helperEmpty) {
          setActiveStep((prevActiveStep) => prevActiveStep + 1)
          const data = sendData(inputFile, inputText, inputSelect, dataForm)
          setFinalData({
            select: data[6],
            input: data[5],
            files: data[4]
          })
        } else {
          setOpenWarning(true)
        }
      } else {
        setOpen(true)
      }
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
      const data = sendData(inputFile, inputText, inputSelect, dataForm)
      setFinalData({
        select: data[6],
        input: data[5],
        files: data[4]
      })
    }
  };

  //? Tercer Paso Boton Regresar
  const thirdHandleBack = () => {
    setOpenWarning(false)
    setOpen(false)
    setActiveStep((prevActiveStep) => {
      return prevActiveStep - 1
    });
  };

  //? Reset
  const handleReset = () => {
    setOpenWarning(false)
    unregister('');
    setActiveStep(0);
  };

  const alertWarningButton = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    const data = sendData(inputFile, inputText, inputSelect, dataForm)
    setFinalData({
      select: data[6],
      input: data[5],
      files: data[4]
    })
    setOpenWarning(false)
  }

  const enviarSolicitud = () => {

    const data = sendData(inputFile, inputText, inputSelect, dataForm)

    console.log(`Usuario: ${user.given_name} ${user.aPaterno} ${user.aMaterno}, Matricula: ${user.matricula}`);
    console.log('Información que se enviara');
    console.log('Inputs:', data[1])
    console.log('Selects', data[0])
    console.log('Archivos', data[2])
    console.log('Forma', label, ' ', data[3])
  }


  return (
    <>
      {/* //? Titulo */}
      <Grid xs={12} textAlign="center">
        <h1>Proceso de Solicitud</h1>
      </Grid>

      {/* //? Pasos */}
      <Stepper activeStep={activeStep} orientation="vertical" >

        {/* //? Primer Paso */}
        <Step>
          <StepLabel
            optional={<Typography variant="caption">Selecciona una Modalidad</Typography>}
          >
            Primer Paso
          </StepLabel>
          <StepContent>

            {/* //? Primer Paso  */}
            <FirstStep register={register} message={message} dataForm={dataForm} label={label} info={info} />

            {/* //? Alert required */}
            <Collapse in={open}>
              <Alert
                // variant="filled"
                severity="error"
              >
                <AlertTitle>Error</AlertTitle>
                Seleccione <strong>modalidad</strong>, para poder visualizar sus <strong>requisitos</strong> y <strong>documentación</strong>
              </Alert>
            </Collapse>

            <Button
              className='animate__animated animate__headShake'
              variant="contained"
              onClick={firstHandleNext}
              sx={{ mt: 1, mr: 1 }}
            >
              Verificar y Continuar
            </Button>
          </StepContent>
        </Step>

        {/* //? Segundo Paso */}
        <Step>
          <StepLabel
            optional={<Typography variant="caption">Información Extra</Typography>}
          >
            Segundo Paso
          </StepLabel>
          <StepContent>

            {/* //?Segundo Paso */}
            {
              (inputSelect == undefined && inputText == undefined)
                ? <Typography className="my-4 fs-4" align="center">Esta modalidad no requiere <strong>Información extra</strong>puedes continuar sin ningún problema.</Typography>
                : <SecondStep setValue={setValue} register={register} inputText={inputText} inputSelect={inputSelect} />
            }

            {/* //? Alert */}
            <Collapse in={open}>
              <Alert
                // variant="filled"
                severity="error"
                className="my-2"
              >
                <AlertTitle>Error</AlertTitle>
                <Grid className="mt-1">Campos obligatorios:</Grid>
                {
                  selectsRequired != '' && (<Grid>- Selector\es: <strong>{selectsRequired}.</strong></Grid>)
                }
                {
                  inputsRequired != '' && (<Grid>- Caja\s de texto: <strong>{inputsRequired}.</strong></Grid>)
                }
              </Alert>
            </Collapse>

            {/* //? Alert empty*/}
            <Collapse in={openWarning}>
              <Alert
                // variant="filled"
                severity="warning"
                className="my-2"
              >
                <AlertTitle>Advertencia</AlertTitle>
                <Grid className="mt-1">Campos <strong>no obligatorios</strong> pero vacíos:</Grid>
                {
                  selectsEmpty != '' && (<Grid>- Selector\es: <strong>{selectsEmpty}.</strong></Grid>)
                }
                {
                  inputsEmpty != '' && (<Grid>- Caja\s de texto: <strong>{inputsEmpty}.</strong></Grid>)
                }
                <Grid className="mt-1">
                  <Button variant="outlined" color="warning" onClick={alertWarningButton}>Continuar de todos modos</Button>
                </Grid>

              </Alert>
            </Collapse>

            <Button
              variant="contained"
              onClick={secondHandleNext}
              sx={{ mt: 1, mr: 1 }}
            >
              Verificar y Continuar
            </Button>
            <Button
              onClick={firstHandleBack}
              sx={{ mt: 1, mr: 1 }}
            >
              Regresar
            </Button>
          </StepContent>
        </Step>

        {/* //? Tercer Paso */}
        <Step>
          <StepLabel
            optional={<Typography variant="caption">Sube tus Archivos</Typography>}
          >
            Tercer Paso
          </StepLabel>
          <StepContent>

            {/* //?Tercer Paso */}
            {
              (inputFile == undefined)
                ? <Typography className="my-4 fs-4" align="center">Esta modalidad no requiere <strong>documentación</strong>, puedes continuar sin ningún problema.</Typography>
                : <ThirdStep
                  setValue={setValue}
                  dataForm={dataForm}
                  inputFile={inputFile}
                />
            }


            {/* //? Alert */}
            <Collapse in={open}>
              <Alert
                // variant="filled"
                severity="error"
                className="my-2"
              >
                <AlertTitle>Error</AlertTitle>
                <Grid className="mt-1">Archivos obligatorios:</Grid>
                {
                  filesRequired != '' && (<Grid>- Selector\es: <strong>{filesRequired}.</strong></Grid>)
                }
              </Alert>
            </Collapse>

            {/* //? Alert empty*/}
            <Collapse in={openWarning}>
              <Alert
                // variant="filled"
                severity="warning"
                className="my-2"
              >
                <AlertTitle>Advertencia</AlertTitle>
                <Grid className="mt-1">Archivos <strong>no obligatorios</strong> pero vacíos:</Grid>
                {
                  filesEmpty != '' && (<Grid>- Selector\es: <strong>{filesEmpty}.</strong></Grid>)
                }
                <Grid className="mt-1">
                  <Button variant="outlined" color="warning" onClick={alertWarningButton}>Continuar de todos modos</Button>
                </Grid>

              </Alert>
            </Collapse>

            <Button
              variant="contained"
              onClick={thirdHandleNext}
              sx={{ mt: 1, mr: 1 }}
            >
              Continuar
            </Button>
            <Button
              onClick={thirdHandleBack}
              sx={{ mt: 1, mr: 1 }}
            >
              Regresar
            </Button>
          </StepContent>
        </Step>
      </Stepper>

      {/* //? Ultimo Paso */}
      {activeStep == 3 && (
        <>
          <Typography variant="h5" component="div" align="center" className="my-2">
            Solicitud
          </Typography>

          <CardSolicitud label={label} user={user} finalData={finalData} />

          <Button
            variant="contained"
            color="error"
            onClick={handleReset}
            sx={{ mt: 1, mr: 1 }}
          >
            Cancelar Solicitud
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={enviarSolicitud}
            sx={{ mt: 1, mr: 1 }}
          >
            Enviar Solicitud
          </Button>
          <Button
            onClick={thirdHandleBack}
            sx={{ mt: 1, mr: 1 }}
          >
            Regresar
          </Button>
        </>
      )}
    </>
  )
}