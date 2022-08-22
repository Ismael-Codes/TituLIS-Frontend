import { Tooltip } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/system/Unstable_Grid';

export const InputFile = ({ name = '', code = '', setValue, dataForm = '' }) => {

  //? Base 64
  const convertirBase64 = (archivos, name) => {
    Array.from(archivos).forEach((archivo) => {
      let reader = new FileReader();
      reader.readAsDataURL(archivo);
      reader.onload = () => {
        let arrayAuxiliar = [];
        let base64 = reader.result;
        arrayAuxiliar = base64.split(',')
        const file = { name: archivo.name, base64: arrayAuxiliar[1] }
        setValue(name, { file })
      }
    })
  }
  

  return (
    <Grid item='true'>
      <Tooltip title="Clic izquierdo para agregar un archivo" placement="top">
        <Button variant="outlined" color="inherit" component="label" className="animate__animated animate__headShake">
          {name}
          <input hidden type="file" accept=".pdf, .doc,.docx" onChange={(e) => convertirBase64(e.target.files, code)} />
          {(dataForm == "") ? <span className="ms-1 badge text-bg-danger text-lowercase">Sin Archivo</span> : <span className="ms-1 badge text-bg-success text-lowercase">{dataForm?.file.name}</span>}
        </Button>
      </Tooltip>
    </Grid>
  )
}
