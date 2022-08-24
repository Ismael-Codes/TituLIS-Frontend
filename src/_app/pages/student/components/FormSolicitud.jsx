import { useForm } from "react-hook-form";
import Grid from '@mui/system/Unstable_Grid';
import { Alert, Button, Collapse, AlertTitle, Typography } from '@mui/material';
import { useState } from 'react';
import { FirstStep, SecondStep, ThirdStep } from '../components';
import { sendData } from '../../../helpers';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import { validarSecond } from "../helper/validarSecond";
import { mainData } from "../helper";

export const FormSolicitud = ({ message = '' }) => {

  const { getValues, watch, register, setValue, unregister } = useForm();

  const [open, setOpen] = useState(false);
  const [openWarning, setOpenWarning] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const [inputsEmpty, setInputsEmpty] = useState('')
  const [selectsEmpty, setSelectsEmpty] = useState('')

  const [inputsRequired, setInputsRequired] = useState('')
  const [selectsRequired, setSelectsRequired] = useState('')


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
    const helperText = validarSecond(inputText, dataForm)
    const helperSelect = validarSecond(inputSelect, dataForm)

    setInputsEmpty(helperSelect.helperArrayEmpty.join())
    setSelectsEmpty(helperText.helperArrayEmpty.join())

    setInputsRequired(helperText.helperArrayRequired.join())
    setSelectsRequired(helperSelect.helperArrayRequired.join())

    if (helperSelect.helperRequired && helperText.helperRequired) {
      setOpen(false)
      if (helperSelect.helperArrayEmpty || helperText.helperArrayEmpty) {
        setOpenWarning(true)
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
      }
    } else {
      setOpen(true)
    }
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
    // setActiveStep((prevActiveStep) => prevActiveStep + 1)
  };

  //? Tercer Paso Boton Regresar
  const thirdHandleBack = () => {
    setOpenWarning(false)
    const helper = dataForm.form;
    unregister('');
    setValue('form', helper)
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setOpenWarning(false)
    unregister('');
    setActiveStep(0);
  };

  const alertWarningButton = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  console.log(dataForm);

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
              Continuar
            </Button>
          </StepContent>
        </Step>

        {/* //? Segundo Paso */}
        <Step>
          <StepLabel
            optional={<Typography variant="caption">Paso Intermedio</Typography>}
          >
            Segundo Paso
          </StepLabel>
          <StepContent>

            {/* //?Segundo Paso */}
            <SecondStep setValue={setValue} register={register} inputText={inputText} inputSelect={inputSelect} />

            {/* //? Alert */}
            <Collapse in={open}>
              <Alert
                // variant="filled"
                severity="error"
              >
                <AlertTitle>Error</AlertTitle>
                <Grid className="mt-1">Campos obligatorios</Grid>
                {
                  inputsRequired != '' && (<Grid>Caja\s de texto: <strong>{inputsRequired}.</strong></Grid>)
                }
                {
                  selectsRequired != '' && (<Grid>Selectores: <strong>{selectsRequired}.</strong></Grid>)
                }
              </Alert>
            </Collapse>

            {/* //? Alert empty*/}
            <Collapse in={openWarning}>
              <Alert
                // variant="filled"
                severity="warning"
                className="mt-2"
              >
                <AlertTitle>Advertencia</AlertTitle>
                <Grid>Campos no obligatorios pero vacíos, da clic en continuar si deseas dejarlo así</Grid>
                {
                  inputsEmpty != '' && (<Grid>Caja\s de texto vacíos: <strong>{inputsEmpty}.</strong></Grid>)
                }
                {
                  selectsEmpty != '' && (<Grid>Selectores vacíos: <strong>{selectsEmpty}.</strong></Grid>)
                }
                <Grid className="mt-1">
                  <Button variant="outlined" color="warning" onClick={alertWarningButton}>Clic para continuar</Button>
                </Grid>

              </Alert>
            </Collapse>

            <Button
              variant="contained"
              onClick={secondHandleNext}
              sx={{ mt: 1, mr: 1 }}
            >
              Continuar
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
            <ThirdStep
              setValue={setValue}
              dataForm={dataForm}
              inputFile={inputFile}
            />

            <Button
              variant="contained"
              color="error"
              onClick={handleReset}
              sx={{ mt: 1, mr: 1 }}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={thirdHandleNext}
              sx={{ mt: 1, mr: 1 }}
            >
              Enviar
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
    </>
  )
}