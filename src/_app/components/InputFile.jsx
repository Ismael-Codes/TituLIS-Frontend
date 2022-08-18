import Button from '@mui/material/Button';

export const InputFile = ({ name = '', code = '', condicion, fileName = '', convertirBase64 }) => {

  return (
    <Button variant="outlined" color="inherit" component="label">
      {name}
      <input hidden type="file" onChange={(e) => convertirBase64(e.target.files, code)} />
      {(condicion == undefined) ? <span className="ms-1 badge text-bg-danger text-lowercase">Sin Archivo</span> : <span className="ms-1 badge text-bg-success text-lowercase">{fileName}</span>}
    </Button>
  )
}
