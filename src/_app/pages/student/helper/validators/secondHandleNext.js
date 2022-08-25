import { validarSecond } from "./validarSecond"

export const secondHandleNext = (helperData, helperOpens, helperValidators) => {

  const { inputSelect, inputText, dataForm } = helperData;
  const { setOpen, setActiveStep, setOpenWarning } = helperOpens;
  const { setInputsEmpty, setSelectsEmpty, setInputsRequired, setSelectsRequired } = helperValidators;


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
      } else { setOpenWarning(true) }
    } else { setOpen(true) }
  } else { setActiveStep((prevActiveStep) => prevActiveStep + 1) }

}