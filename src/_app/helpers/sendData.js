
export const sendData = (inputFileData, inputTextData, inputSelectData, dataForm) => {

  let solicitud = [];
  let files = [];
  let filesHelper = [];
  let inputText = [];
  let inputHelper = [];
  let inputSelect = [];
  let selectHelper = [];

  //* Arvhicos que se enviaran
  if (inputFileData != undefined) {
    for (let i = 0; i < inputFileData.length; i++) {
      const code = inputFileData[i].code;
      if (dataForm[code] != undefined) {
        const helper = inputFileData[i].name
        const data = dataForm[code].file;
        files = [...files, { code, data }]
        filesHelper = [...filesHelper, helper]
      }
    }
  }

  //* InputText que se enviaran
  if (inputTextData != undefined) {
    for (let i = 0; i < inputTextData.length; i++) {
      const code = inputTextData[i].code;
      if (dataForm[code] != undefined) {
        const helper = inputTextData[i].name
        const data = dataForm[code];
        inputText = [...inputText, { code, data }]
        inputHelper = [...inputHelper, { helper, data }]
      }
    }
  }

  //* InputSelect que se enviaran
  if (inputSelectData != undefined) {
    for (let i = 0; i < inputSelectData.length; i++) {
      const code = inputSelectData[i].code;
      if (dataForm[code] != undefined) {
        const helper = inputSelectData[i].name
        const data = dataForm[code];
        inputSelect = [...inputSelect, { code, data }]
        selectHelper = [...selectHelper, { helper, data }]
      }
    }
  }

  solicitud = [inputSelect, inputText, files, dataForm['form'], filesHelper, inputHelper, selectHelper]
  return solicitud;
}