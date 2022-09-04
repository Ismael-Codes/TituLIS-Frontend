import { ArrowBack } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom"

export const ModalidadPage = () => {

  const location = useLocation()
  const { data } = location.state;

  const navigate = useNavigate();
  const onNavigateBack = () => navigate(-1);

  return (
    <>
      <Typography variant="h4"><strong>{data.nombre}</strong></Typography>
      <Typography variant="h5">{data.descripcion.label}</Typography>
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
    </>
  )
}
