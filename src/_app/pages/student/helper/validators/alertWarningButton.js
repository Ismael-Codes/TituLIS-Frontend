import { sendData } from "../sendData"

export const alertWarningButton = (helperData, setActiveStep, setOpenWarning, setFinalData) => {

  const { inputSelect, inputText, inputFile, dataForm } = helperData;

  setActiveStep((prevActiveStep) => prevActiveStep + 1)
  const data = sendData(inputFile, inputText, inputSelect, dataForm)
  setFinalData({
    select: data[6],
    input: data[5],
    files: data[4]
  })
  setOpenWarning(false)
}