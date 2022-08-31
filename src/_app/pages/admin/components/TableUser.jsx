import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const TableUser = ({ message }) => {

  const renderDetailsButton = (params) => {
    return (
      // <strong className="text-center">
      <Link className='btn btn-primary text-center' to={`/usuario/${params.row.id}`}>Revisar</Link>
      // </strong>
    )
  }

  const columns = [
    {
      field: 'nombre',
      headerName: 'Nombre',
      width: 150,
      // editable: true,
    },
    {
      field: 'a_paterno',
      headerName: 'Apellido Paterno',
      width: 150,
      // editable: true,
    },
    {
      field: 'a_materno',
      headerName: 'Apellido Materno',
      width: 150,
      // editable: true,
    },
    {
      field: 'matricula',
      headerName: 'Matricula',
      width: 150,
      // editable: true,
    },
    {
      field: 'email',
      headerName: 'Correo',
      width: 150,
      // editable: true,
    },
    /* {
      field: 'fullName',
      headerName: 'Nombre Completo',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    }, */
    {
      field: 'tipoUsuario_id',
      headerName: 'Tipo de Usuario',
      width: 150,
      // editable: true,
    },
    {
      field: 'id',
      headerName: '',
      width: 150,
      renderCell: renderDetailsButton,
      disableClickEventBubbling: true,
      sortable: false,
      align: 'center',
    },
  ];

  return (
    <Box sx={{ height: 600, width: '100%', backgroundColor: '#FFFFFF', borderRadius: '10px' }}>
      <DataGrid
        rows={message}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        // checkboxSelection
        disableSelectionOnClick
        disableColumnMenu
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  )
}
