import { useForm } from "react-hook-form";
import Grid from '@mui/system/Unstable_Grid';
import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { FirstStep, SecondStep, ThirdStep } from '../components';
import { sendData } from '../helpers';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

export const FormSolicitud = ({ message = '' }) => {

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (dataForm.form != undefined) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const firstHandleBack = () => {
    unregister('form');
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleBack = () => {
    const helper = dataForm.form;
    unregister('');
    setValue('form', helper)
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    unregister('');
    setActiveStep(0);
  };

  const { getValues, watch, register, setValue, unregister } = useForm();

  //? Mantiene el dataform Actualizado
  watch();

  //? Data extraida del form
  const dataForm = getValues()

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
            <FirstStep register={register} message={message} dataForm={dataForm} />

            <Button
              variant="contained"
              onClick={handleNext}
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
            <SecondStep message={message} setValue={setValue} register={register} dataForm={dataForm} />

            <Button
              variant="contained"
              onClick={handleNext}
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
            <ThirdStep setValue={setValue} dataForm={dataForm} message={message} />

            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ mt: 1, mr: 1 }}
            >
              Continuar
            </Button>
            <Button
              onClick={handleBack}
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