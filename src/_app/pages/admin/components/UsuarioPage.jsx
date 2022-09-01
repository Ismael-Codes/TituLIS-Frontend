import { Alert, Avatar, Button, Grid, TextField } from '@mui/material';
import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { url } from '../../../../config';
import { useFetch } from '../../../../hook';
import { LoadingSpinner2 } from '../../student/components/LoadingSpinner2';
import { UserInformation } from './UserInformation';
import { useLocation } from 'react-router-dom'

export const UsuarioPage = () => {

  const location = useLocation()
  const { userData } = location.state

  const { id } = useParams();
  const navigate = useNavigate();

  const onNavigateBack = () => navigate(-1);

  return (
    <>
      <UserInformation userData={userData} id={id} />
      <Button
        variant="contained"
        onClick={() => onNavigateBack()}
        sx={{ mt: 1, mr: 1 }}
      >
        Regresar
      </Button>
    </>
  )
}

