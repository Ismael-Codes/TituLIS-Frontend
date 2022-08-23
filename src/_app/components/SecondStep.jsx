import { InputText, InputSelect } from '../components';

export const SecondStep = ({ message, setValue, register, dataForm }) => {

  let inputText = undefined;
  let inputSelect = undefined;

  //* Extrae los inputText dependiendo de la modalidad
  (message[dataForm['form']]?.descripcion.inputText == undefined) ? inputText : inputText = message[dataForm['form']].descripcion.inputText;

  //* Extrae el inputSelect dependiendo de la modalidad
  (message[dataForm['form']]?.descripcion.inputSelect == undefined) ? inputSelect : inputSelect = message[dataForm['form']].descripcion.inputSelect;

  return (
    <>
      {/* //? InputSelect */}
      {
        (inputSelect == undefined)
          ? <></>
          : inputSelect.map((option, index) => (
            <InputSelect key={index} url={option.url} name={option.name} code={option.code} setValue={setValue} register={register} />
          ))
      }

      {/* //? InputText */}
      {
        (inputText == undefined)
          ? <></>
          : inputText.map((option, index) => (
            <InputText key={index} name={option.name} code={option.code} setValue={setValue} register={register} />
          ))
      }
    </>
  )
}
