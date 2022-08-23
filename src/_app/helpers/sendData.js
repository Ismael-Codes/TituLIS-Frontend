
export const sendData = (inputFileData, inputTextData, inputSelectData, dataForm) => {

  let solicitud = [];
  let files = [];
  let inputText = [];
  let inputSelect = [];

  //* Arvhicos que se enviaran
  if (inputFileData != undefined) {
    for (let i = 0; i < inputFileData.length; i++) {
      const code = inputFileData[i].code;
      if (dataForm[code] != undefined) {
        const data = dataForm[code].file;
        files = [...files, { code, file: data }]
      }
    }
  }

  //* InputText que se enviaran
  if (inputTextData != undefined) {
    for (let i = 0; i < inputTextData.length; i++) {
      const code = inputTextData[i].code;
      if (dataForm[code] != undefined) {
        const data = dataForm[code];
        inputText = [...inputText, { code, data }]
      }
    }
  }

  //* InputSelect que se enviaran
  if (inputSelectData != undefined) {
    for (let i = 0; i < inputSelectData.length; i++) {
      const code = inputSelectData[i].code;
      if (dataForm[code] != undefined) {
        const data = dataForm[code];
        inputSelect = [...inputSelect, { code, data }]
      }
    }
  }

  solicitud = [inputSelect, inputText, files]
  console.log(solicitud, 'Solicitud')

}