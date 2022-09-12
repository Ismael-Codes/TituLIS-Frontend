//* Extrae la data que sera mostrada

import { dataExtraction } from "./dataExtraction";

export const mainData = (message, dataForm) => {

  const helper = message.map(option => {
    return {
      id: option.id,
      nombre: option.nombre,
      descripcion: JSON.parse(atob(option.descripcion.codification))
    }
  })

  const label = dataExtraction(helper[dataForm['form']]?.descripcion.label, 'label');

  const info = dataExtraction(helper[dataForm['form']]?.descripcion.info, 'info')

  const inputText = dataExtraction(helper[dataForm['form']]?.descripcion.inputText, 'inputText')

  const inputSelect = dataExtraction(helper[dataForm['form']]?.descripcion.inputSelect, 'inputSelect')

  const inputFile = dataExtraction(helper[dataForm['form']]?.descripcion.inputFile, 'inputFile')



  return { label, inputText, inputSelect, inputFile, info }
}

