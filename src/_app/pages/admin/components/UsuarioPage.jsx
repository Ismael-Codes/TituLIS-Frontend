import { Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom'
import { UserInformation } from './UserInformation';
import { useLocation } from 'react-router-dom'
import { ArrowBack, EditOutlined, SaveOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { useForm } from "react-hook-form";

export const UsuarioPage = () => {

  const [openEdit, setOpenEdit] = useState(false);

  const location = useLocation()
  const { userData } = location.state

  const { id } = useParams();
  const navigate = useNavigate();

  const onNavigateBack = () => navigate(-1);


  const { getValues, watch, register, setValue, unregister } = useForm();

  watch();

  //? Data extraida del form
  const dataForm = getValues();

  console.log(dataForm);

  const sendData = () => {
    setOpenEdit(false);
    unregister('');
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
    </>
  )
}

