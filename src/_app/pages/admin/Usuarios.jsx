import { Alert } from '@mui/material';
import { useFetch } from '../../../hook';
import { url } from '../../../config';
import { LoadingSpinner2 } from '../student/components/LoadingSpinner2';
import { MesaDeTrabajo } from './components';

export const Usuarios = () => {

  const { data, isLoading, hasError } = useFetch(`${url}/api/getUsers`)

  const { message } = data;

  return (
    <>
      {
        (isLoading)
          ? <LoadingSpinner2 />
          : (!hasError) ? <MesaDeTrabajo message={message} /> : <Alert variant="filled" severity="error">Ocurrió un error, inténtelo mas tarde!!</Alert>
      }
    </>
  )
}
