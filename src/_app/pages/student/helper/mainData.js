import { dataExtraction } from "./dataExtraction";

export const mainData = (message, dataForm) => {

  const label = dataExtraction(message[dataForm['form']]?.descripcion.label, 'label');
  console.log(label);

  const info = dataExtraction(message[dataForm['form']]?.descripcion.info, 'info')

  const inputText = dataExtraction(message[dataForm['form']]?.descripcion.inputText, 'inputText')

  const inputSelect = dataExtraction(message[dataForm['form']]?.descripcion.inputSelect, 'inputSelect')

  const inputFile = dataExtraction(message[dataForm['form']]?.descripcion.inputFile, 'inputFile')

  return { label, inputText, inputSelect, inputFile, info }
}