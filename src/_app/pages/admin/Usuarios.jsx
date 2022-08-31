import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Alert, Button, Grid, Typography } from '@mui/material';
import { useFetch } from '../../../hook';
import { Link } from 'react-router-dom';
import { url } from '../../../config';
import { TableUser } from './components/TableUser';
import { LoadingSpinner2 } from '../student/components/LoadingSpinner2';

export const Usuarios = () => {

  const { data, isLoading, hasError } = useFetch(`${url}/api/getUsers`)

  const { message } = data;

  return (
    <>
      <Typography variant="h4" textAlign="center">Usuarios</Typography>
      {
        (isLoading)
          ? <LoadingSpinner2 />
          : (!hasError) ? <TableUser message={message} /> : <Alert variant="filled" severity="error">Ocurrió un error, inténtelo mas tarde!!</Alert>
      }
    </>
  )
}
