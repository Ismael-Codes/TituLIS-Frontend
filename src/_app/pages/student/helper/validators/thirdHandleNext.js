import { sendData } from "../sendData"
import { validarSecond } from "./validarSecond"

export const thirdHandleNext = (helperData, helperOpens, setFilesEmpty, setFilesRequired, setFinalData) => {

  const { inputSelect, inputText, inputFile, dataForm } = helperData;
  const { setOpen, setActiveStep, setOpenWarning } = helperOpens;

  if (inputFile != undefined) {

    const helperFiles = validarSecond(inputFile, dataForm)

    setFilesEmpty(helperFiles.helperArrayEmpty.join())
    setFilesRequired(helperFiles.helperArrayRequired.join())

    if (helperFiles.helperRequired) {
      setOpen(false)
      if (helperFiles.helperEmpty) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
        const data = sendData(inputFile, inputText, inputSelect, dataForm)
        setFinalData({
          select: data[6],
          input: data[5],
          files: data[4]
        })
      } else { setOpenWarning(true) }
    } else { setOpen(true) }
  } else {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    const data = sendData(inputFile, inputText, inputSelect, dataForm)
    setFinalData({
      select: data[6],
      input: data[5],
      files: data[4]
    })
  }

}