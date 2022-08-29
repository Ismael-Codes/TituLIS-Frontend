import { CircularProgress, TextField } from "@mui/material"
import { useState } from "react"
import { Button, Grid } from "@mui/material"
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AuthContext } from "../../../auth/context/AuthContext";

export const Estado = () => {

  const { user } = useContext(AuthContext)

  let email;

  (user.email == 'cr413528@uaeh.edu.mx')
    ? email = 'briancruz336@gmail.com'
    : email = user.email;


  const [isLoading, setIsLoading] = useState(false)
  const { register, watch, formState: { errors }, getValues } = useForm();
  let nameFolder = 'Test Folder';

  watch();

  const dataForm = getValues();
  const [data, setData] = useState('');

  (dataForm.nameFolder == '' || dataForm.nameFolder == undefined)
    ? nameFolder = 'Folder Test'
    : nameFolder = dataForm.nameFolder

  const sendData = () => {

    let file = dataForm.file[0];


    if (file != undefined || file != '') {
      setIsLoading(true)
      var reader = new FileReader() //this for convert to Base64 
      reader.readAsDataURL(file) //start conversion...
      reader.onload = function () { //.. once finished..
        var rawLog = reader.result.split(',')[1]; //extract only thee file data part
        var dataSend = { dataReq: { data: rawLog, name: file.name, type: file.type, nameFolder, email }, fname: "uploadFilesToGoogleDrive" }; //preapre info to send to API
        fetch('https://script.google.com/macros/s/AKfycbx2pO7o55aSr2EQS36mdSsgnZSdjQaWYmr2ieTirjC55MSqFWsmXxZ61N1YDwOE4cK1/exec', //your AppsScript URL
          { method: "POST", body: JSON.stringify(dataSend) }) //send to Api
          .then(res => res.json()).then((a) => {
            setData(a)
            setIsLoading(false)
          }).catch(() => setIsLoading(false)) // Or Error in console

      }
    }

  }
  return (
    <>
      <h1>Subir Archivo A Google Drive</h1>
      <hr />

      <Grid container>

        <Grid item xs={12} >
          <TextField
            sx={{ width: 1 }}
            label="Nombre de Carpeta"
            defaultValue={''}
            {...register('nameFolder')}
          />
          <input type="file" accept=".pdf,.doc,.docx" id="customFile" {...register("file")} />
          <Button
            variant="contained"
            color="success"
            onClick={sendData}
            sx={{ mt: 1, mr: 1 }}
          >
            Enviar Solicitud
          </Button>
        </Grid>

        <Grid item xs={12} >
          {
            (isLoading)
              ? <CircularProgress />
              : (data == '')
                ? <></>
                : <><a className="btn btn-primary" href={data.url} target="_blank">Abrir Carpeta</a> <span>{data.message}</span></>
          }
        </Grid>

      </Grid>


    </>
  )
}


