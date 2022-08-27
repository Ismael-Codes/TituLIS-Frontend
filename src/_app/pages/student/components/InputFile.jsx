import { Tooltip } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/system/Unstable_Grid';
import { useState } from 'react';

export const InputFile = ({ name = '', code = '', setValue, dataForm, register }) => {

  //? Base 64
  const convertirBase64 = (archivos) => {
    Array.from(archivos).forEach((archivo) => {
      let reader = new FileReader();
      reader.readAsDataURL(archivo);
      reader.onload = () => {
        let arrayAuxiliar = [];
        let base64 = reader.result;
        arrayAuxiliar = base64.split(',')
        register(code)
        setValue(code, { name: archivo.name, base64: arrayAuxiliar[1] })
      }
    })
  }

  return (
    <Grid className='mx-2 my-2'>
      <Tooltip title="Clic para agregar o remplazar archivo" placement="bottom">
        <Button variant="outlined" color="inherit" component="label" className="animate__animated animate__headShake">
          {name}
          <input hidden type="file" accept=".pdf, .doc,.docx" onChange={(e) => convertirBase64(e.target.files, code)} />
          {(dataForm == '' || dataForm == undefined) ? <span className="ms-1 badge text-bg-danger text-lowercase">Sin Archivo</span> : <span className="ms-1 badge text-bg-success text-lowercase">{dataForm?.name}</span>}
        </Button>
      </Tooltip>
    </Grid>
  )
}
