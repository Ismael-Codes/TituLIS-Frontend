import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import { AdminPanelSettingsIcon, SchoolIcon, CoPresentIcon } from '@mui/icons-material';

export const TableUser = ({ message }) => {

  const renderDetailsButton = (params) => {
    return (
      <Link className='btn btn-primary text-center' to={`/usuario/${params.row.id}`} state={{ userData: params.row }}>Revisar</Link>
    )
  }

  const iconChip = (params) => {
    return (
      <>
        {
          (params.row.tipoUsuario_id == 3)
            ? <Chip icon={<AdminPanelSettingsIcon />} label='Administrador' />
            : (params.row.tipoUsuario_id == 2)
              ? <Chip icon={<CoPresentIcon />} label='Docente' />
              : <Chip icon={<SchoolIcon />} label='Estudiante' />
        }
      </>
    )
  }

  const columns = [
    {
      field: 'nombre',
      headerName: 'Nombre', minWidth: 140, flex: 1,
    },
    {
      field: 'a_paterno',
      headerName: 'Apellido Paterno', minWidth: 170, flex: 1,
    },
    {
      field: 'a_materno',
      headerName: 'Apellido Materno', minWidth: 170, flex: 1,
    },
    {
      field: 'email',
      headerName: 'Correo', minWidth: 210, flex: 1,
      renderCell: (params) => (
        <a href={`mailto:${params.row.email}`} > {params.row.email}</a>
      )
    },
    {
      field: 'tipoUsuario_id',
      headerName: 'Tipo de Usuario', minWidth: 100, flex: 1,
      renderCell: iconChip,
      valueGetter: (params) =>
        (params.row.tipoUsuario_id == 3)
          ? 'Administrador'
          : (params.row.tipoUsuario_id == 2)
            ? 'Docente' : 'Estudiante'
    },
    {
      field: 'id',
      headerName: '', minWidth: 100, flex: 1,
      renderCell: renderDetailsButton,
      disableClickEventBubbling: true,
      sortable: false,
      align: 'center',
    },
  ];

  return (
    <Box sx={{ height: 600, width: '100%', backgroundColor: '#FFFFFF', borderRadius: '10px', marginTop: '30px', padding: '10px' }}>
      <DataGrid
        rows={message}
        columns={columns}
        pageSize={10}
        sx={{ fontSize: '1em' }}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        disableColumnMenu
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  )
}
