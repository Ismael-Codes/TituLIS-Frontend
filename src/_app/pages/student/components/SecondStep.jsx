import { InputText, InputSelect } from '../components';

export const SecondStep = ({ setValue, register, inputText, inputSelect }) => {

  return (
    <>
      {/* //? InputSelect */}
      {
        inputSelect !== undefined &&
        (inputSelect.map((option, index) => (
          <InputSelect key={index} url={option.url} name={option.name} code={option.code} setValue={setValue} register={register} />
        )))
      }

      {/* //? InputText */}
      {
        inputText !== undefined &&
        (inputText.map((option, index) => (
          <InputText key={index} name={option.name} code={option.code} setValue={setValue} register={register} />
        )))
      }
    </>
  )
}
