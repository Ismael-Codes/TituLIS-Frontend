import { Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom'
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

