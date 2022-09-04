import { ArrowBack, EditOutlined } from "@mui/icons-material";
import { Button, Chip, Divider, Grid, Typography, TextField, Alert } from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CajasDeTexto, InputFile, Requisitos } from "./revision";
import { Selectores } from "./revision/Selectores";

export const ModalidadPage = () => {

  const [openEdit, setOpenEdit] = useState(true);
  const [variante, setVariante] = useState('outlined')

  const location = useLocation()
  const { data } = location.state;

  const navigate = useNavigate();
  const onNavigateBack = () => navigate(-1);

  /*  let str = "Aprobar el examen general de egreso de licenciatura;,-Cumplir con los requisitos académicos establecidos en los programas educativos;,Contar con la validación de la modalidad por parte del titular de la coordinación del programa educativo;,Cumplir con los requisitos específicos de la modalidad;,-Contar con la validación de los requisitos académicos por parte de las dependencias responsables de cada proceso, a través de los sistemas de información de apoyo académico, y,Rendir la protesta de Ley correspondiente."
 
   let arr = str.split('-');
 
   console.log(arr) */


  return (
    <Grid container className="mb-3">
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
        onClick={() => { setOpenEdit(false); setVariante('standard'); }}
        sx={{ mt: 1, mr: 1 }}
      >
        Editar
      </Button>
      {
        !openEdit && (<Button
          className="animate__animated animate__headShake"
          variant="outlined"
          color="error"
          size='large'
          startIcon={<EditOutlined />}
          onClick={() => { setOpenEdit(true); setVariante('outlined'); }}
          sx={{ mt: 1, mr: 1 }}
        >
          Cancelar
        </Button>)
      }
      {
        !openEdit && (<Button
          className="animate__animated animate__headShake"
          variant="outlined"
          color="success"
          size='large'
          startIcon={<EditOutlined />}
          // onClick={() => { setOpenEdit(true); setVariante('outlined'); }}
          sx={{ mt: 1, mr: 1 }}
        >
          Enviar
        </Button>)
      }

      <Grid item xs={12}>
        <Divider textAlign="right" sx={{ marginTop: 2, marginBottom: 2 }}>
          <Chip label="Primer Paso" />
        </Divider>

        <Grid item container xs={12} sx={{ marginBottom: '30px' }} spacing={2}>
          <Grid item xs={12} md={3} sx={{ width: '100%' }} >
            <TextField
              sx={{ width: 1 }}
              label="Nombre"
              defaultValue={data.nombre}
              variant={variante}
              InputProps={{
                readOnly: openEdit
              }}
            />
          </Grid>

          <Grid item xs={12} md={4} sx={{ width: '100%' }} >
            <TextField
              sx={{ width: 1 }}
              label="Label"
              defaultValue={data.descripcion.label}
              variant={variante}
              InputProps={{
                readOnly: openEdit
              }}
            />
          </Grid>
        </Grid>



        <Grid item xs={12} >
          {
            (data.descripcion.info.requisitos_generales.length > 0)
              ? <Requisitos info={data.descripcion.info.requisitos_generales.toString()} label={'Requisitos Generales'} variante={variante} openEdit={openEdit} />
              : <Typography>Esta Modalidad no contiene requisitos generales.</Typography>
          }
        </Grid>

        <Grid item xs={12} >
          {
            (data.descripcion.info.requisitos_especificos.length > 0)
              ? <Requisitos info={data.descripcion.info.requisitos_especificos.toString()} label={'Requisitos específicos de la modalidad'} variante={variante} openEdit={openEdit} />
              : <Typography>Esta Modalidad no contiene requisitos generales.</Typography>
          }
        </Grid>

        <Grid item xs={12} >
          {
            (data.descripcion.info.documentacion.length > 0)
              ? <Requisitos info={data.descripcion.info.documentacion.toString()} label={'Documentación solicitada para integrar expediente'} variante={variante} openEdit={openEdit} />
              : <Typography>Esta Modalidad no contiene requisitos generales.</Typography>
          }
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Divider textAlign="left" sx={{ marginBottom: 1 }}>
          <Chip label="Segundo Paso" />
        </Divider>

        <Typography variant="h6" sx={{ marginBottom: 1.5 }}>Selectores:</Typography>
        {

          (data.descripcion.inputSelect != undefined)
            ? data.descripcion.inputSelect.map((option, i) => <Selectores key={i} data={option} variante={variante} openEdit={openEdit} />)
            : <Typography variant="body1">Está modalidad no contiene <strong>selectores</strong></Typography>
        }
        {
          !openEdit && (<Grid item xs={12} >
            <Button fullWidth variant="contained">Agregar selector</Button></Grid>)
        }

        <Typography variant="h6" sx={{ marginBottom: 1.5, marginTop: 2.5 }}>Cajas de Texto:</Typography>
        {
          (data.descripcion.inputText != undefined)
            ? data.descripcion.inputText.map((option, i) => <CajasDeTexto key={i} data={option} variante={variante} openEdit={openEdit} />)
            : <Typography variant="body1">Está modalidad no contiene <strong>cajas de texto</strong></Typography>
        }
        {
          !openEdit && (<Grid item xs={12} md={8.5}>
            <Button fullWidth variant="contained">Agregar selector</Button></Grid>)
        }

      </Grid>

      <Grid item xs={12}>
        <Divider textAlign="right" sx={{ marginTop: 2, marginBottom: 1 }}>
          <Chip label="Tercer Paso" />
        </Divider>

        <Typography variant="h6" sx={{ marginBottom: 1.5 }}>Selectores de Archivos:</Typography>
        {
          (data.descripcion.inputFile != undefined)
            ? data.descripcion.inputFile.map((option, i) => <InputFile key={i} data={option} variante={variante} openEdit={openEdit} />)
            : <Typography variant="body1">Está modalidad no contiene <strong>selectores de archivos</strong></Typography>
        }
        {
          !openEdit && (<Grid item xs={12} md={8.5}>
            <Button fullWidth variant="contained">Agregar selector de archivos</Button></Grid>)
        }
      </Grid>

      <Grid item xs={12} sx={{ marginBottom: 1 }}>
        <Divider textAlign="left" sx={{ marginTop: 2, marginBottom: 1 }}>
          <Chip label="Extras" />
        </Divider>
        {
          (!data.configuracion.estado)
            ? <Alert
              sx={{ marginTop: 2 }}
              color="success"
              variant="outlined"
              action={
                <Button color="inherit" size="small">
                  Activar
                </Button>
              }
            >
              <strong>Activar</strong> Modalidad
            </Alert>
            : <Alert
              sx={{ marginTop: 2 }}
              color="error"
              variant="outlined"
              action={
                <Button color="inherit" size="small">
                  Desactivar
                </Button>
              }
            >
              <strong>Desactivar</strong> Modalidad
            </Alert>
        }

        <Alert
          sx={{ marginTop: 1 }}
          color="error"
          variant="outlined"
          action={
            <Button color="inherit" size="small">
              Eliminar
            </Button>
          }
        >
          <strong>Eliminar</strong> Modalidad
        </Alert>


        <hr />
      </Grid>

    </Grid>
  )
}
