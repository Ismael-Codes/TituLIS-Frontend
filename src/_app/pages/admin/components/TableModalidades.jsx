import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import { Grid } from '@mui/material';

export const TableModalidades = ({ message }) => {

  const renderState = (params) => {
    return (
      <>
        {
          (params.row.configuracion.estado)
            ? <Chip label='Activa' color='success' />
            : <Chip label='Inactiva' color='error' />
        }
      </>
    )
  }

  const renderDetailsButton = (params) => {
    return (
      <>
        <Link className='btn btn-primary text-center' to={`/modalidad/${params.row.id}`} state={{ data: params.row, edit: true, variante: 'outlined' }}>Revisar</Link>
      </>
    )
  }

  const columns = [
    {
      field: 'nombre',
      headerName: 'Nombre', minWidth: 140, flex: 1,
    },
    {
      field: 'configuracion.estado',
      headerName: 'Estado', minWidth: 90, maxWith: 100,
      renderCell: renderState,
      valueGetter: (params) =>
        (params.row.configuracion.estado)
          ? 'Activa'
          : 'Inactiva'
    },
    {
      field: 'id',
      headerName: '', minWidth: 110,
      renderCell: renderDetailsButton,
      disableClickEventBubbling: true,
      sortable: false,
      align: 'center',
    },
  ];

  return (
    <Grid item xs={12} sx={{ height: 500, width: '100%', backgroundColor: '#FFFFFF', borderRadius: '10px', padding: '10px' }}>
      <DataGrid
        rows={message}
        columns={columns}
        pageSize={6}
        sx={{ fontSize: '1em' }}
        rowsPerPageOptions={[6]}
        disableSelectionOnClick
        disableColumnMenu
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Grid>
  )
}
