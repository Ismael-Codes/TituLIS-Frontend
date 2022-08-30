import { Tooltip } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/system/Unstable_Grid';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from "../../../../auth/context/AuthContext";

export const InputFile = ({ name = '', code = '', setValue, dataForm, register }) => {


  const { user } = useContext(AuthContext)


  let nameFolder = user.matricula;


  function guardarArchivo(e) {
    var file = e.target.files[0] //the file
    var reader = new FileReader() //this for convert to Base64 
    reader.readAsDataURL(e.target.files[0]) //start conversion...
    reader.onload = function (e) { //.. once finished..
      var rawLog = reader.result.split(',')[1]; //extract only thee file data part
      var dataSend = { dataReq: { data: rawLog, name: file.name, type: file.type, nameFolder, email: user.email }, fname: "uploadFilesToGoogleDrive" }; //preapre info to send to API
      fetch('https://script.google.com/macros/s/AKfycbyw6n3gkbvvjddDGFQHyGDX8kk27AHCpjs960DDYrN0Ts3Xpihxx0bjotEcGhxAUMZuEg/exec', //your AppsScript URL
        { method: "POST", body: JSON.stringify(dataSend) }) //send to Api
        .then(res => res.json()).then((a) => {
          console.log(a) //See response
          register(code)
          setValue(code, { name: file.name, url: a.url, id: a.id });
        }).catch(e => console.log(e)) // Or Error in console
    }
  }

  return (
    <Grid className='mx-2 my-2'>
      <Tooltip title="Clic para agregar o remplazar archivo" placement="bottom">
        <Button variant="outlined" color="inherit" component="label" className="animate__animated animate__headShake">
          {name}
          {/* <input hidden type="file" accept=".pdf, .doc,.docx" onChange={(e) => convertirBase64(e.target.files, code)} /> */}
          <input hidden type="file" accept=".pdf, .doc,.docx" onChange={(e) => guardarArchivo(e)} />
          {(dataForm == '' || dataForm == undefined) ? <span className="ms-1 badge text-bg-danger text-lowercase">Sin Archivo</span> : <span className="ms-1 badge text-bg-success text-lowercase">{dataForm?.name}</span>}
        </Button>
      </Tooltip>
    </Grid>
  )
}
