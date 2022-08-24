export const validarSecond = (data = '', dataForm = '') => {

  let helperRequired = false
  let helperEmpty = false
  let helperArrayRequired = {};
  let helperArrayEmpty = {};

  data.forEach((input, index) => {
    (input.required == true)
      ? ((dataForm[input.code] == '' || dataForm[input.code] === undefined)
        ? (helperArrayRequired[index] = input.name)
        : delete helperArrayRequired[dataForm[input.name]])
      : ((dataForm[input.code] == '' || dataForm[input.code] === undefined)
        ? (helperArrayEmpty[index] = input.name)
        : delete helperArrayEmpty[dataForm[input.name]])
  })

  helperArrayRequired = Object.values(helperArrayRequired)
  helperArrayEmpty = Object.values(helperArrayEmpty)

  helperArrayRequired == '' && (helperRequired = true);

  helperArrayEmpty == '' && (helperEmpty = true)

  return { helperEmpty, helperRequired, helperArrayRequired, helperArrayEmpty };
}