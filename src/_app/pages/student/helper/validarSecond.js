export const validarSecond = (data = '', dataForm = '') => {

  let helper = false
  let helperArray = [];

  data.forEach((input, index) => {
    (input.required == true)
      && ((dataForm[input.code] == '' || dataForm[input.code] == undefined)
        ? helperArray[index] = input.name + ', '
        : delete helperArray[dataForm[input.name]])
  })

  helperArray == '' && (helper = true)

  return { helper, helperArray };
}