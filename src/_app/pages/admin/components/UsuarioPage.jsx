import { Alert, Avatar, Button, Grid, TextField } from '@mui/material';
import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { url } from '../../../../config';
import { useFetch } from '../../../../hook';
import { LoadingSpinner2 } from '../../student/components/LoadingSpinner2';
import { UserInformation } from './UserInformation';

export const UsuarioPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, hasError } = useFetch(`${url}/api/getUsers`);

  const { message } = data;

  /* const { message } = data;


  message.map((option, index) => {
    (option.id == id) && (user = option)
  }) */

  // console.log(user)
  console.log(data)

  const onNavigateBack = () => navigate(-1);

  /*   if (!hero) {
      return <Navigate to="/usuarios" />
    } */

  return (
    <>
      {
        (isLoading)
          ? <LoadingSpinner2 />
          : (!hasError) ? <UserInformation message={message} id={id} /> : <Alert variant="filled" severity="error">Ocurrió un error, inténtelo mas tarde!!</Alert>
      }
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

