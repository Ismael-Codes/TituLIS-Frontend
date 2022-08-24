import { Grid } from '@mui/material';
import { InputText, InputSelect } from '../components';

export const SecondStep = ({ setValue, register, inputText, inputSelect }) => {

  return (
    <>
      <Grid container spacing={1} className="mt-2">
        {/* //? InputSelect */}

        {
          inputSelect !== undefined &&
          (inputSelect.map((option, index) => (
            <Grid item xs={12} md={6} key={index}> <InputSelect url={option.url} name={option.name} code={option.code} setValue={setValue} register={register} /></Grid>
          )))
        }
      </Grid>

      <Grid container spacing={1} className="mt-1">
        {/* //? InputText */}
        {
          inputText !== undefined &&
          (inputText.map((option, index) => (
            <Grid item xs={12} md={6} key={index}><InputText name={option.name} code={option.code} setValue={setValue} register={register} /></Grid>
          )))
        }
      </Grid>
    </>
  )
}
