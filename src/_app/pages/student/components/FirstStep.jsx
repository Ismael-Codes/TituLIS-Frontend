import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/system/Unstable_Grid';
import TextField from '@mui/material/TextField';
import CustomizedAccordions from './CustomizedAccordions';
import { useState } from 'react';

export const FirstStep = ({ register, message, dataForm, label, info }) => {

  const [open, setOpen] = useState(true);

  return (
    <>
      {/* //? Select */}
      <Grid xs={12} className='mt-3 mb-2'>
        <TextField
          className='animate__animated animate__headShake'
          select
          fullWidth
          label="Modalidad de Titulación"
          defaultValue={''}
          {...register("form")}
        >
          {message.map((option, index) => (
            (option.configuracion.estado) && (
              <MenuItem key={index} value={index}>
                {option.nombre}
              </MenuItem>
            )
          ))}
        </TextField>
      </Grid>

      {/* //? Acordions */}
      <Grid xs={12} className='mb-3'>
        {
          !dataForm.form == "" && <CustomizedAccordions info={info} label={label} />
        }
      </Grid>
    </>
  )
}