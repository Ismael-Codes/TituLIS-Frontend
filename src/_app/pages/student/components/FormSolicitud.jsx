import { useForm } from "react-hook-form";
import { Alert, Button, Collapse, AlertTitle, Typography } from '@mui/material';
import { useState } from 'react';
import { FirstStep, SecondStep, ThirdStep } from '../components';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import { useContext } from 'react';
import { AuthContext } from "../../../../auth/context/AuthContext";
import { CardSolicitud } from "./CardSolicitud";
import { alertWarningButton, firstHandleBack, firstHandleNext, handleResetHelper, mainData, secondHandleNext, sendData, thirdHandleBack, thirdHandleNext } from "../helper";
import { AlertEmpty } from "./AlertEmpty";
import { AlertRequired } from "./AlertRequired";

export const FormSolicitud = ({ message = '' }) => {

  const { user } = useContext(AuthContext)

  const { getValues, watch, register, setValue, unregister } = useForm();

  const [open, setOpen] = useState(false);
  const [openWarning, setOpenWarning] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  //* Información que se mostrara al final
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

  //* Almacena data
  const helperData = { inputSelect, inputText, inputFile, dataForm }

  //* Almacena Opens
  const helperOpens = { setOpen, setActiveStep, setOpenWarning }

  //* Almacena validators
  const helperValidators = { setInputsEmpty, setSelectsEmpty, setInputsRequired, setSelectsRequired, setFilesEmpty, setFilesRequired }

  const preFinalData = () => {
    alertWarningButton(helperData, setActiveStep, setOpenWarning, setFinalData)
  }

  const enviarSolicitud = () => {

    const data = sendData(inputFile, inputText, inputSelect, dataForm)

    console.log(`Usuario: ${user.given_name} ${user.aPaterno} ${user.aMaterno}, Matricula: ${user.matricula}`);
    console.log('Información que se enviara');
    console.log('Inputs:', data[1])
    console.log('Selects:', data[0])
    console.log('Archivos:', data[2])
    console.log('Forma:', label, ' ', data[3])
  }

  return (
    <>
      {/* //? Titulo */}
      <Typography variant="h4" textAlign="center">
        Proceso de Solicitud
      </Typography>

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

            <FirstStep register={register} message={message} dataForm={dataForm} label={label} info={info} />

            {/* //? Alert required */}
            <Collapse in={open}>
              <Alert
                severity="error"
              >
                <AlertTitle>Error</AlertTitle>
                Seleccione <strong>modalidad</strong>, para poder visualizar sus <strong>requisitos</strong> y <strong>documentación</strong>
              </Alert>
            </Collapse>

            <Button
              className='animate__animated animate__headShake'
              variant="contained"
              onClick={() => firstHandleNext(dataForm['form'], helperOpens)}
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

            <AlertRequired open={open} filesRequired={filesRequired} selectsRequired={selectsRequired} inputsRequired={inputsRequired} />

            <AlertEmpty openWarning={openWarning} selectsEmpty={selectsEmpty} inputsEmpty={inputsEmpty} preFinalData={preFinalData} />

            <Button
              variant="contained"
              onClick={() => secondHandleNext(helperData, helperOpens, helperValidators)}
              sx={{ mt: 1, mr: 1 }}
            >
              Verificar y Continuar
            </Button>
            <Button
              onClick={() => firstHandleBack(helperOpens, unregister, setValue)}
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


            <AlertRequired open={open} filesRequired={filesRequired} selectsRequired={selectsRequired} inputsRequired={inputsRequired} />

            <AlertEmpty openWarning={openWarning} filesEmpty={filesEmpty} selectsEmpty={selectsEmpty} inputsEmpty={inputsEmpty} preFinalData={preFinalData} />


            <Button
              variant="contained"
              onClick={() => thirdHandleNext(helperData, helperOpens, setFilesEmpty, setFilesRequired, setFinalData)}
              sx={{ mt: 1, mr: 1 }}
            >
              Continuar
            </Button>
            <Button
              onClick={() => thirdHandleBack(helperOpens, unregister, setValue, dataForm)}
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
            onClick={() => handleResetHelper(setOpenWarning, unregister, setActiveStep)}
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
            onClick={() => setActiveStep((prevActiveStep) => prevActiveStep - 1)}
            sx={{ mt: 1, mr: 1 }}
          >
            Regresar
          </Button>
        </>
      )}
    </>
  )
}