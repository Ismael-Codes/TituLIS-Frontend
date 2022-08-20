import { useState } from "react"

export const Estado = () => {

  const [data, setData] = useState('')

  function guardarArchivo(e) {
    var file = e.target.files[0] //the file
    var reader = new FileReader() //this for convert to Base64 
    reader.readAsDataURL(e.target.files[0]) //start conversion...
    reader.onload = function (e) { //.. once finished..
      var rawLog = reader.result.split(',')[1]; //extract only thee file data part
      var dataSend = { dataReq: { data: rawLog, name: file.name, type: file.type }, fname: "uploadFilesToGoogleDrive" }; //preapre info to send to API
      fetch('https://script.google.com/macros/s/AKfycbxKgctsO8FsgaW8L4QGQG8WPlIY2c3a4j426oQ9wquzRSA4pcZBC3-sdnY96k244qSJ/exec', //your AppsScript URL
        { method: "POST", body: JSON.stringify(dataSend) }) //send to Api
        .then(res => res.json()).then((a) => {
          setData(a);
          console.log(a, 'Exito') //See response
        }).catch(e => console.log(e, 'Error')) // Or Error in console
    }
  }


  return (
    <>
      <h1>Subir Archivo A Google Drive</h1>
      <hr />
      <input type="file" accept=".pdf,.doc,.docx" id="customFile" onChange={(e) => guardarArchivo(e)} />
      {
        (data == '')
          ? <></>
          : <a href={data.url} target="_blank">{data.url}</a>
      }

    </>
  )
}


