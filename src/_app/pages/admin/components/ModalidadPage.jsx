import { ArrowBack, CancelOutlined, EditOutlined, SaveOutlined } from "@mui/icons-material";
import { Button, Chip, Divider, Grid, Typography, TextField, Alert } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { url } from "../../../../config";
import { CajasDeTexto, InputFile, Requisitos } from "./revision";
import { Selectores } from "./revision/Selectores";

export const ModalidadPage = () => {

  const { id } = useParams()

  const location = useLocation();

  const [data, setData] = useState(location.state.data);

  const [openEdit, setOpenEdit] = useState(location.state.edit);
  const [variante, setVariante] = useState(location.state.variante);
  const [selector, setSelector] = useState(data.descripcion.inputSelect);
  const [cajaTexto, setCajaTexto] = useState(data.descripcion.inputText);
  const [archivos, setInputFile] = useState(data.descripcion.inputFile);
  const [hasError, setHasError] = useState(false);

  const [firstStep, setFirstStep] = useState({
    generales: data.descripcion.info.requisitos_generales,
    especificos: data.descripcion.info.requisitos_especificos,
    documentacion: data.descripcion.info.documentacion
  });

  const { register, watch, getValues, unregister } = useForm();
  watch();
  const dataForm = getValues();
  console.log(dataForm, 'dataForm');

  const navigate = useNavigate();
  const onNavigateBack = () => navigate(-1);

  const addSelector = () => {
    selector == undefined
      ? setSelector([{ url: '', code: '', name: '', required: true }])
      : setSelector(selector.concat({ url: '', code: '', name: '', required: true }));
  }

  const addCajaDeTexto = () => {
    cajaTexto == undefined
      ? setCajaTexto([{ code: '', name: '', required: true }])
      : setCajaTexto(cajaTexto.concat({ code: '', name: '', required: true }));
  }

  const addInputFile = () => {
    archivos == undefined
      ? setInputFile([{ name: '', code: '', required: true }])
      : setInputFile(archivos.concat({ name: '', required: true, code: '' }));
  }

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
          color="success"
          size='large'
          startIcon={<SaveOutlined />}
          onClick={() => {

            if (dataForm.nombre != undefined || dataForm.nombre != '') {
              if (dataForm.nombre.match(/[a-zA-Z]{5,}/)) {
                console.log('valido')
              } else { console.log('nombre no valido, necesitas letras') }
            } else { console.log('vacio') }

            if (dataForm.descripcion.label != undefined || dataForm.descripcion.label != '') {
              if (dataForm.descripcion.label.match(/[a-zA-Z]{5,}/)) {
                console.log('valido')
              } else { console.log('label no valido, necesitas letras') }
            } else { console.log('vacio') }

            /* const requisitos_generales = dataForm.descripcion.info.requisitos_generales.split('-');
            const requisitos_especificos = dataForm.descripcion.info.requisitos_especificos.split('-');
            const documentacion = dataForm.descripcion.info.documentacion.split('-');

            const inputFile = dataForm.descripcion.inputFile.filter(option => option.name != '' && option.code != '');
            const inputText = dataForm.descripcion.inputText.filter(option => option.name != '' && option.code != '');
            const inputSelect = dataForm.descripcion.inputSelect.filter(option => option.name != '' && option.code != '' && option.url != ''); */

          }}
          sx={{ mt: 1, mr: 1 }}
        >
          {(id == 'add') ? 'Agregar' : 'Actualizar'}
        </Button>)
      }
      {
        !openEdit && (<Button
          className="animate__animated animate__headShake"
          variant="outlined"
          color="error"
          size='large'
          startIcon={<CancelOutlined />}
          onClick={() => {
            if (id == 'add') {
              onNavigateBack()
            } else {
              setOpenEdit(true);
              setVariante('outlined');
              setSelector(data.descripcion.inputSelect);
              setCajaTexto(data.descripcion.inputText);
              setInputFile(data.descripcion.inputFile);
              unregister('')
            }
          }
          }
          sx={{ mt: 1, mr: 1 }}
        >
          Cancelar
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
              {...register('nombre')}
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
              {...register('descripcion.label')}
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
            (firstStep.generales != undefined)
              ? <Requisitos info={firstStep.generales.join('-')} label={'Requisitos Generales'} variante={variante} openEdit={openEdit} register={register} name={'requisitos_generales'} />
              : <Typography>Esta Modalidad no contiene requisitos generales.</Typography>
          }
        </Grid>

        <Grid item xs={12} >
          {
            (firstStep.especificos != undefined)
              ? <Requisitos info={firstStep.especificos.join('-')} label={'Requisitos específicos de la modalidad'} variante={variante} openEdit={openEdit} register={register} name={'requisitos_especificos'} />
              : <Typography>Esta Modalidad no contiene requisitos generales.</Typography>
          }
        </Grid>

        <Grid item xs={12} >
          {
            (firstStep.documentacion != undefined)
              ? <Requisitos info={firstStep.documentacion.join('-')} label={'Documentación solicitada para integrar expediente'} variante={variante} openEdit={openEdit} register={register} name={'documentacion'} />
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
          (selector != undefined)
            ? selector.map((option, i) => <Selectores key={i} index={i} data={option} variante={variante} openEdit={openEdit} register={register} unregister={unregister} setSelector={setSelector} selector={selector} />)
            : <Typography variant="body1">Está modalidad no contiene <strong>selectores</strong></Typography>
        }
        {
          !openEdit && (<Grid item xs={12} >
            <Button fullWidth variant="contained" onClick={addSelector}>Agregar selector</Button></Grid>)
        }

        <Typography variant="h6" sx={{ marginBottom: 1.5, marginTop: 2.5 }}>Cajas de Texto:</Typography>
        {
          (cajaTexto != undefined)
            ? cajaTexto.map((option, i) => <CajasDeTexto key={i} index={i} data={option} variante={variante} openEdit={openEdit} unregister={unregister} register={register} cajaTexto={cajaTexto} />)
            : <Typography variant="body1">Está modalidad no contiene <strong>cajas de texto</strong></Typography>
        }
        {
          !openEdit && (<Grid item xs={12} md={8.5}>
            <Button fullWidth variant="contained" onClick={addCajaDeTexto}>Agregar caja de texto</Button></Grid>)
        }
      </Grid>

      <Grid item xs={12}>
        <Divider textAlign="right" sx={{ marginTop: 2, marginBottom: 1 }}>
          <Chip label="Tercer Paso" />
        </Divider>

        <Typography variant="h6" sx={{ marginBottom: 1.5 }}>Selectores de Archivos:</Typography>
        {
          (archivos != undefined)
            ? archivos.map((option, i) => <InputFile key={i} index={i} data={option} variante={variante} openEdit={openEdit} unregister={unregister} register={register} archivos={archivos} />)
            : <Typography variant="body1">Está modalidad no contiene <strong>selectores de archivos</strong></Typography>
        }
        {
          !openEdit && (<Grid item xs={12} md={8.5}>
            <Button fullWidth variant="contained" onClick={addInputFile}>Agregar selector de archivos</Button></Grid>)
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
