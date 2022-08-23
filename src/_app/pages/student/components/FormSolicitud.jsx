import { useForm } from "react-hook-form";
import Grid from '@mui/system/Unstable_Grid';
import { Alert, Button, Collapse, IconButton, AlertTitle, Typography } from '@mui/material';
import { useState } from 'react';
import { FirstStep, SecondStep, ThirdStep } from '../components';
import { sendData } from '../../../helpers';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import CloseIcon from '@mui/icons-material/Close';

export const FormSolicitud = ({ message = '' }) => {

  const { getValues, watch, register, setValue, unregister } = useForm();

  const [second, setSecond] = useState('no errors')

  //? Mantiene el dataform Actualizado
  watch();

  //? Data extraida del form
  const dataForm = getValues()

  let label = undefined;
  message[dataForm['form']]?.descripcion.label !== undefined && (label = message[dataForm['form']].descripcion.label);

  let info = undefined;
  message[dataForm['form']]?.descripcion.info !== undefined && (info = message[dataForm['form']].descripcion.info);

  let inputText = undefined;
  message[dataForm['form']]?.descripcion.inputText !== undefined && (inputText = message[dataForm['form']].descripcion.inputText);

  let inputSelect = undefined;
  message[dataForm['form']]?.descripcion.inputSelect !== undefined && (inputSelect = message[dataForm['form']].descripcion.inputSelect);

  let inputFile = undefined;
  (message[dataForm['form']]?.descripcion.inputFile !== undefined) && (inputFile = message[dataForm['form']].descripcion.inputFile);


  const [open, setOpen] = useState(false);

  const [activeStep, setActiveStep] = useState(0);

  //? Pimer Paso
  const firstHandleNext = () => {
    (!dataForm.form == undefined || !dataForm.form == '')
      ? (
        setActiveStep((prevActiveStep) => prevActiveStep + 1),
        setOpen(false)
      )
      : setOpen(true)
  };

  //? Segundo Paso
  const secondHandleNext = () => {

    let helper;
    let helperText = [];
    let helperSelect = [];

    inputSelect.forEach((input, index) => {
      (input.required == true)
        && ((dataForm[input.code] == '' || dataForm[input.code] == undefined)
          ? helperSelect[index] = input.name + ', '
          : delete helperSelect[dataForm[input.name]])
    })

    inputText.forEach((input, index) => {
      (input.required == true)
        && ((dataForm[input.code] == '' || dataForm[input.code] == undefined)
          ? helperText[index] = input.name + ', '
          : delete helperText[dataForm[input.name]])
    })

    helperSelect == '' && helperText == '' && (helper = true)

    let newArreglo = (helperSelect + helperText).slice(0, -2) + '.';

    (helper)
      ? (
        setActiveStep((prevActiveStep) => prevActiveStep + 1),
        setOpen(false)
      )
      : (setSecond(newArreglo), setOpen(true))
  };

  //? Segundo Paso
  const firstHandleBack = () => {
    setOpen(false)
    unregister('');
    setActiveStep((prevActiveStep) => {
      setValue('form', '')
      return prevActiveStep - 1
    });
  };

  //? Tercer Paso
  const thirdHandleNext = () => {

    // setActiveStep((prevActiveStep) => prevActiveStep + 1)
  };

  //? Tercer Paso
  const thirdHandleBack = () => {
    const helper = dataForm.form;
    unregister('');
    setValue('form', helper)
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    unregister('');
    setActiveStep(0);
  };

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

            {/* //? Alert */}
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
                Seleccione <strong>{second}</strong>
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