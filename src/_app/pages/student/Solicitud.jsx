import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import Grid from '@mui/system/Unstable_Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Controller } from "react-hook-form";

//? Select
const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

export const Solicitud = () => {


  const { formState, getValues, watch, register, handleSubmit } = useForm();
  const { errors } = formState;

  watch();

  const onSubmit = (data) => alert(JSON.stringify(data, null, 4));



  // const { register, handleSubmit, control } = useForm();
  // const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} className="mb-3">
          <Grid item='true' xs={12} md={6}>
            <TextField
              sx={{ width: 1 }}
              label="Nombre"
              {...register("firstName")}
            />
          </Grid>
          <Grid item='true' xs={12} md={6}>
            <TextField
              sx={{ width: 1 }}
              label="Nombre 2"
              {...register("firstName")}
            />
          </Grid>
          <Grid item='true' xs={12} md={4}>
            <TextField
              select
              fullWidth
              defaultValue=""
              label="Select"
              inputProps={register('currency', {
                required: 'Please enter currency',
              })}
              error={errors.currency}
              helperText={errors.currency?.message}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item='true' xs={12} md={4}>
            <Button type="submit" variant="contained" color="success" fullWidth size="large">
              submit
            </Button>
          </Grid>

          <Grid item='true' xs={12}>
            <pre>{JSON.stringify(getValues(), null, 4)}</pre>
          </Grid>
        </Grid>
      </form>
    </>
  )
}
