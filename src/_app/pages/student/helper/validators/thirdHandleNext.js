import { sendData } from "../sendData"
import { validarSecond } from "./validarSecond"

export const thirdHandleNext = (helperData, helperOpens, setFilesEmpty, setFilesRequired, setFinalData) => {

  const { inputSelect, inputText, inputFile, dataForm } = helperData;
  const { setOpen, setActiveStep, setOpenWarning } = helperOpens;

  const data = sendData(inputFile, inputText, inputSelect, dataForm)

  if (inputFile != undefined) {

    const helperFiles = validarSecond(inputFile, dataForm)

    setFilesEmpty(helperFiles.helperArrayEmpty.join())
    setFilesRequired(helperFiles.helperArrayRequired.join())

    if (helperFiles.helperRequired) {
      setOpen(false)
      if (helperFiles.helperEmpty) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
        setFinalData({
          inputSelect: data[0],
          inputText: data[1],
          inputFile: data[2]
        })
      } else { setOpenWarning(true) }
    } else { setOpen(true) }
  } else {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setFinalData({
      inputSelect: data[0],
      inputText: data[1],
      inputFile: data[2]
    })
  }
}