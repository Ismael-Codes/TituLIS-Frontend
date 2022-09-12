import axios from "axios";
import { url } from "../../../../config";

export const updateModality = (dataForm, id, setOpenEdit, setVariante, setSuccess, setIsLoading, helperSet, config) => {

  const { setFirstStep, setCajaTexto, setInputFile, setSelector, setHasError } = helperSet;

  if (dataForm.nombre != '') {
    if (dataForm.nombre.match(/[a-zA-Z]{5,}/)) {
      setHasError({ state: false, error: 'Sin Error' })

      if (dataForm.descripcion.label != '') {
        if (dataForm.descripcion.label.match(/[a-zA-Z]{5,}/)) {
          setHasError({ state: false, error: 'Sin Error' })
          setIsLoading(true)
          let requisitos_generales
          (dataForm.descripcion.info.requisitos_generales != undefined)
            ? requisitos_generales = dataForm.descripcion.info.requisitos_generales.split('-')
            : requisitos_generales = '';

          let requisitos_especificos
          (dataForm.descripcion.info.requisitos_especificos != undefined)
            ? requisitos_especificos = dataForm.descripcion.info.requisitos_especificos.split('-')
            : requisitos_especificos = '';

          let documentacion
          (dataForm.descripcion.info.documentacion != undefined)
            ? documentacion = dataForm.descripcion.info.documentacion.split('-')
            : documentacion = '';

          let inputFile
          (dataForm.descripcion.inputFile != undefined)
            ? inputFile = dataForm.descripcion.inputFile.filter(option => option.name != '' && option.code != '')
            : inputFile = '';

          let inputText
          (dataForm.descripcion.inputText != undefined)
            ? inputText = dataForm.descripcion.inputText.filter(option => option.name != '' && option.code != '')
            : inputText = '';

          let inputSelect
          (dataForm.descripcion.inputSelect != undefined)
            ? inputSelect = dataForm.descripcion.inputSelect.filter(option => option.name != '' && option.code != '' && option.url != '')
            : inputSelect = '';


          const codification = {
            info: {
              documentacion: documentacion,
              requisitos_generales: requisitos_generales,
              requisitos_especificos: requisitos_especificos
            },
            label: dataForm.descripcion.label,
            inputFile: inputFile,
            inputSelect: inputSelect,
            inputText: inputText,
          }
          if (id == 'add') {
            axios.post(`${url}/api/saveModality`, {
              nombre: dataForm.nombre,
              codification
            }).then(() => {
              setCajaTexto(inputText);
              setSelector(inputSelect);
              setInputFile(inputFile);
              setFirstStep({
                generales: requisitos_generales,
                especificos: requisitos_especificos,
                documentacion: documentacion
              });
              setSuccess(true);
              setOpenEdit(true);
              setVariante('outlined');
              setIsLoading(false)
            })
              .catch(() => {
                setIsLoading(false)
                setHasError({ state: true, error: 'Ocurrió un error' })
              })

          } else {
            axios.post(`${url}/api/updateModality`, {
              id,
              nombre: dataForm.nombre,
              codification,
              config
            }).then(() => {
              setCajaTexto(inputText);
              setSelector(inputSelect);
              setInputFile(inputFile);
              setFirstStep({
                generales: requisitos_generales,
                especificos: requisitos_especificos,
                documentacion: documentacion
              });
              setSuccess(true);
              setOpenEdit(true);
              setVariante('outlined');
              setIsLoading(false)
            })
              .catch(() => {
                setIsLoading(false)
                setHasError({ state: true, error: 'Ocurrio un error' })
              })
          }

        } else { setHasError({ state: true, error: 'El label necesita por lo menos 5 letras' }) }
      } else { setHasError({ state: true, error: 'El label está vació' }) }

    } else {
      setHasError({ state: true, error: 'El nombre necesita por lo menos 5 letras.' })
    }
  } else { setHasError({ state: true, error: 'El nombre esta vació.' }) }

}