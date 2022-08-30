import { CircularProgress, TextField } from "@mui/material"
import { useState } from "react"
import { Button, Grid } from "@mui/material"
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AuthContext } from "../../../auth/context/AuthContext";

export const Estado = () => {

  const { user } = useContext(AuthContext);
  let nameFolder;

  const date = new Date();
  const [month, day, year] = [date.getMonth().toString(), date.getDate().toString(), date.getFullYear().toString()];

  (user.matricula != '')
    ? nameFolder = `${user.matricula} - ${month}/${day}/${year}`
    : nameFolder = `Default Name`;

  const sendData = () => {

    var dataSend = { dataReq: { nameFolder }, fname: "createFolderByMatricula" }; //preapre info to send to API
    fetch('https://script.google.com/macros/s/AKfycbyw6n3gkbvvjddDGFQHyGDX8kk27AHCpjs960DDYrN0Ts3Xpihxx0bjotEcGhxAUMZuEg/exec', //your AppsScript URL
      { method: "POST", body: JSON.stringify(dataSend) }) //send to Api
      .then(res => res.json()).then((a) => {
        console.log(a)
      }).catch(() => setIsLoading(false)) // Or Error in console

  }


  return (
    <>
      <h1>Subir Archivo A Google Drive</h1>
      <hr />

     {/*  <Button
        variant="contained"
        color="success"
        onClick={sendData}
        sx={{ mt: 1, mr: 1 }}
      >
        Enviar Solicitud
      </Button> */}

    </>
  )
}


