import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/system/Unstable_Grid';
import TextField from '@mui/material/TextField';
import { Alert, AlertTitle, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';;
import CustomizedAccordions from './CustomizedAccordions';
import { useState } from 'react';

export const FirstStep = ({ register, message, dataForm, label, info }) => {

  const [open, setOpen] = useState(true);

  return (
    <>
      {/* //? Select */}
      <Grid item='true' xs={12} className='my-2'>
        <TextField
          select
          fullWidth
          label="Modalidad de Titulación"
          defaultValue={''}
          {...register("form")}
        >
          {message.map((option, index) => (
            <MenuItem key={index} value={option.descripcion.value}>
              {option.nombre}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      {/* //? Acordions */}
      <Grid item='true' xs={12} className='mb-3'>
        {
          !dataForm.form == "" && <CustomizedAccordions info={info} label={label} />
        }
      </Grid>
    </>
  )
}