import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';

export const Solicitud = () => {

  const [age, setAge] = React.useState('');
/* 
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
    console.log(age)
  } */

  return (
    <>
{/*<h1>Solicitud</h1>
      <hr />
      <div className="row">
        <div className="col-md-4">
          <label htmlFor="modalidadSelect" className="form-label">Seleccioné modalidad de titulación</label>
          <select className="form-select" id="modalidadSelect">
            <option value="0">Modalidades</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="asesorSelect" className="form-label">Seleccioné un Asesor</label>
          <select className="form-select" id="asesorSelect">
            <option value="0">Asesores</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div> */}
      {/* <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          // onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box> */}
    </>
  )
}
