import { Alert, AlertTitle, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom'
import { UserInformation } from './UserInformation';
import { useLocation } from 'react-router-dom'
import { ArrowBack, EditOutlined, SaveOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { url } from '../../../../config';

export const UsuarioPage = () => {
  const location = useLocation()
  const { userData } = location.state

  const [openEdit, setOpenEdit] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [success, setSuccess] = useState(false)

  const { id } = useParams();
  const navigate = useNavigate();

  const onNavigateBack = () => navigate(-1);

  const { getValues, watch, register, unregister } = useForm();

  watch();

  //? Data extraida del form
  const tipoUsuario = getValues();

  const sendData = () => {
    // unregister('');
    axios.post(`${url}/api/updateUserType`, {
      email: userData.email,
      tipo: tipoUsuario.tipoUsuario_id
    })
      .then(response => {
        setSuccess(true)
        setHasError(false);
      })
      .catch(error => {
        setHasError(true);
        console.error('There was an error!', error);
      });
  }

  return (
    <>
      <UserInformation userData={userData} id={id} openEdit={openEdit} register={register} />
      <Button
        variant="contained"
        size='large'
        startIcon={<ArrowBack />}
        onClick={() => onNavigateBack()}
        sx={{ mt: 1, mr: 1 }}
      >
        Regresar
      </Button>
      <Button
        variant="contained"
        size='large'
        startIcon={<EditOutlined />}
        onClick={() => setOpenEdit(true)}
        sx={{ mt: 1, mr: 1 }}
      >
        Editar
      </Button>
      {
        (openEdit) && (
          <Button
            variant="outlined"
            size='large'
            color='success'
            startIcon={<SaveOutlined />}
            onClick={sendData}
            sx={{ mt: 1, mr: 1 }}
          >
            Guardar
          </Button>
        )
      }
      {
        (hasError) && (<Alert severity='error' className='mt-2'><AlertTitle>Error</AlertTitle>Ocurrió un <strong>error</strong>, intente mas tarde!!</Alert>)
      }
      {
        (success) && (<Alert severity='success' className='mt-2'><AlertTitle>Cambios Guardados</AlertTitle>La operación se realizo con <strong>éxito</strong>, regrese a la <strong>sección principal</strong> para visualizar los cambios</Alert>)
      }
    </>
  )
}

