import { useForm } from "react-hook-form";
import Grid from '@mui/system/Unstable_Grid';
import { Alert, Button, Collapse, IconButton, AlertTitle } from '@mui/material';
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

  const [second, setSecond] = useState('')

  //? Mantiene el dataform Actualizado
  watch();

  //? Data extraida del form
  const dataForm = getValues()

  let errors = ''

  let label = undefined;
  message[dataForm['form']]?.descripcion.label !== undefined && (label = message[dataForm['form']].descripcion.label);

  let info = undefined;
  message[dataForm['form']]?.descripcion.info !== undefined && (info = message[dataForm['form']].descripcion.info);

  let inputText = undefined;
  message[dataForm['form']]?.descripcion.inputText !== undefined && (inputText = message[dataForm['form']].descripcion.inputText);

  let inputSelect = undefined;
  message[dataForm['form']]?.descripcion.inputSelect !== undefined && (inputSelect = message[dataForm['form']].descripcion.inputSelect);

  let inputFile = undefined;
  (message[dataForm['form']]?.descripcion.inputFile == undefined) ? inputFile : inputFile = message[dataForm['form']].descripcion.inputFile;


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
    errors = ''

    for (let i = 0; i < inputSelect.length; i++) {
      (!dataForm[inputSelect[i].code] == undefined || !dataForm[inputSelect[i].code] == '') ? helper = true : (helper = false, errors += `${inputSelect[i].name}, `);
    }

    setSecond(errors);

    (helper)
      ? (
        setActiveStep((prevActiveStep) => prevActiveStep + 1),
        setOpen(false)
      )
      : setOpen(true)

    // setActiveStep((prevActiveStep) => prevActiveStep + 1)
  };

  //? Segundo Paso
  const firstHandleBack = () => {
    unregister('');
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  //? Tercer Paso
  const thirdHandleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
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
      <Grid item='true' xs={12} textAlign="center">
        <h1>Proceso de Solicitud</h1>
      </Grid>

      {/* //? Pasos */}
      <Stepper activeStep={activeStep} orientation="vertical" >

        {/* //? Primer Paso */}
        <Step>
          <StepLabel
          // optional={<Typography variant="caption">Primer Paso</Typography>}
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
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                <AlertTitle>Error</AlertTitle>
                Seleccione <strong>modalidad</strong>
              </Alert>
            </Collapse>

            <Button
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
          // optional={<Typography variant="caption">Last step</Typography>}
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
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
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
              Back
            </Button>
          </StepContent>
        </Step>

        {/* //? Tercer Paso */}
        <Step>
          <StepLabel
          // optional={<Typography variant="caption">Last step</Typography>}
          >
            Tercer Paso
          </StepLabel>
          <StepContent>

            {/* //?Tercer Paso */}
            <ThirdStep setValue={setValue} dataForm={dataForm} inputFile={inputFile} />

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
              Back
            </Button>
          </StepContent>
        </Step>
      </Stepper>
      {/* {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )} */}
    </>
  )
}