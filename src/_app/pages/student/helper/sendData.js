
export const sendData = (inputFileData, inputTextData, inputSelectData, dataForm) => {

  let solicitud = [];
  let inputFile = [];
  let inputText = [];
  let inputSelect = [];

  //* Arvhicos que se enviaran
  if (inputFileData != undefined) {
    for (let i = 0; i < inputFileData.length; i++) {
      const code = inputFileData[i].code;
      const inputName = inputFileData[i].name;
      if (dataForm[code] != undefined) {
        const { name, base64 } = dataForm[code];
        inputFile = [...inputFile, { inputName, code, fileName: name, base64 }]
      }
    }
  }


  //* InputText que se enviaran
  if (inputTextData != undefined) {
    for (let i = 0; i < inputTextData.length; i++) {
      const code = inputTextData[i].code;
      const inputName = inputTextData[i].name;
      if (dataForm[code] != undefined && dataForm[code] != '') {
        const data = dataForm[code];
        inputText = [...inputText, { inputName, code, data }]
      }
    }
  }

  //* InputSelect que se enviaran
  if (inputSelectData != undefined) {
    for (let i = 0; i < inputSelectData.length; i++) {
      const code = inputSelectData[i].code;
      const inputName = inputSelectData[i].name;
      if (dataForm[code] != undefined && dataForm[code] != '') {
        const data = dataForm[code];
        inputSelect = [...inputSelect, { inputName, code, data }]
      }
    }
  }

  solicitud = [inputSelect, inputText, inputFile]
  return solicitud;
}