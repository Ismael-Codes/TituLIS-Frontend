import { Alert, AlertTitle, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom'
import { UserInformation } from './UserInformation';
import { useLocation } from 'react-router-dom'
import { ArrowBack, CancelOutlined, EditOutlined, SaveOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { url } from '../../../../config';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';

export const UsuarioPage = () => {
  const location = useLocation()
  const { userData } = location.state

  const [openEdit, setOpenEdit] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [warning, setWarning] = useState(false)
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const onNavigateBack = () => navigate(-1);

  const { getValues, watch, register } = useForm();

  watch();

  //? Data extraida del form
  const tipoUsuario = getValues();

  const sendData = () => {
    if (tipoUsuario.tipoUsuario_id != undefined) {
      if (userData.tipoUsuario_id != tipoUsuario.tipoUsuario_id) {
        setLoading(true);
        axios.post(`${url}/api/updateUserType`, {
          email: userData.email,
          tipo: tipoUsuario.tipoUsuario_id
        })
          .then(() => {
            setLoading(false);
            setSuccess(true);
            setOpenEdit(false);
          })
          .catch(error => {
            setHasError(true);
            console.error('There was an error!', error);
          });
      } else { setWarning(true) }
    } else {
      setWarning(true);
    }
  }

  return (
    <>
      <UserInformation userData={userData} id={id} openEdit={openEdit} register={register} success={success} />
      <Button
        className="animate__animated animate__headShake"
        variant="contained"
        size='large'
        startIcon={<ArrowBack />}
        onClick={() => onNavigateBack()}
        sx={{ mt: 1, mr: 1 }}
      >
        Regresar
      </Button>
      <Button
        className="animate__animated animate__headShake"
        variant="contained"
        size='large'
        startIcon={<EditOutlined />}
        onClick={() => setOpenEdit(true)}
        sx={{ mt: 1, mr: 1 }}
      >
        Editar
      </Button>
      {loading && (
        <CircularProgress
          size={24}
          sx={{
            color: green[500],
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: '-12px',
            marginLeft: '-12px',
          }}
        />
      )}
      {
        (openEdit) && (
          <Button
            className="animate__animated animate__headShake"
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
        (openEdit) && (
          <Button
            className="animate__animated animate__headShake"
            variant="outlined"
            size='large'
            color='error'
            startIcon={<CancelOutlined />}
            onClick={() => { setOpenEdit(false); setWarning(false); setHasError(false) }}
            sx={{ mt: 1, mr: 1 }}
          >
            Cancelar
          </Button>
        )
      }
      {
        (hasError) && (<Alert severity='error' className='mt-2'><AlertTitle>Error</AlertTitle>Ocurrió un <strong>error</strong>, intente mas tarde!!</Alert>)
      }
      {
        (warning) && (<Alert severity='warning' className='mt-2'><AlertTitle>Advertencia</AlertTitle>No ha seleccionado un tipo de usuario o selecciono el mismo tipo de usuario.</Alert>)
      }
      {
        (success) && (<Alert severity='success' className='mt-2'><AlertTitle>Cambios Guardados</AlertTitle>La operación se realizo con <strong>éxito</strong>, regrese a la <strong>sección principal</strong> para visualizar los cambios</Alert>)
      }
    </>
  )
}

