import { useFetch } from '../../../hook/useFetch';
import { url } from '../../../../src/config';
import { FormSolicitud } from '../../components/FormSolicitud';
import { LoadingSpinner2 } from '../../components/LoadingSpinner2';
import { Alert } from '@mui/material';

export const Solicitud = () => {

  const { data, isLoading, hasError } = useFetch(`${url}/api/getModalidades`)

  const { message } = data;

  return (
    <>
      {
        (isLoading)
          ? <LoadingSpinner2 />
          : (!hasError) ? <FormSolicitud message={message} /> : <Alert variant="filled" severity="error">Ocurrió un error, inténtelo mas tarde!!</Alert>
      }
    </>
  )
}
