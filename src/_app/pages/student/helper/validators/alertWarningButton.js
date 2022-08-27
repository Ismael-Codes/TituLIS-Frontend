import { sendData } from "../sendData"

export const alertWarningButton = (helperData, setActiveStep, setOpenWarning, setFinalData) => {

  const { inputSelect, inputText, inputFile, dataForm } = helperData;

  setActiveStep((prevActiveStep) => prevActiveStep + 1)
  const data = sendData(inputFile, inputText, inputSelect, dataForm)
  setFinalData({
    inputSelect: data[0],
    inputText: data[1],
    inputFile: data[2]
  })
  setOpenWarning(false)
}