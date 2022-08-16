import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { ExamenTPEspecifico, TesisEspecifico, ArticuloEspecifico, DoctoradoEspecifico, MaestriaEspecifico, RendimientoEspecifico, ArticuloDocumentacion } from './mini';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions({ dataForm = "" }) {

  const { form } = dataForm;

  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      {(() => {
        switch (form) {
          case '1':
            return <span className="fw-bold fs-6">Titulación por elaboración de tesis<p className="fw-normal">Requisitos y Documentación</p></span>
          case '2':
            return <span className="fw-bold fs-6">Titulación por examen Teórico-Práctico<p className="fw-normal">Requisitos y Documentación</p></span>
          case '3':
            return <span className="fw-bold fs-6">Titulación por alto rendimiento académico<p className="fw-normal">Requisitos y Documentación</p></span>
          case '4':
            return <span className="fw-bold fs-6">Titulación por Examen General de Egreso (EGEL)<p className="fw-normal">Requisitos y Documentación</p></span>
          case '5':
            return <span className="fw-bold fs-6">Titulación por realización de estudios de Maestría<p className="fw-normal">Requisitos y Documentación</p></span>
          case '6':
            return <span className="fw-bold fs-6">Titulación por realización de estudios de Doctorado<p className="fw-normal">Requisitos y Documentación</p></span>
          case '7':
            return <span className="fw-bold fs-6">Titulación por participar como primer autor o de correspondencia en un Artículo Científico publicado en una Revista Indexada<p className="fw-normal">Requisitos y Documentación</p></span>
          default:
            return null
        }
      })()}
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography component={'span'}>Requisitos generales</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            <ol>
              {
                (form === '4')
                  ? <li>Aprobar el examen general de egreso de licenciatura, con testimonio sobresaliente o de excelencia;</li>
                  : <li>Aprobar el examen general de egreso de licenciatura;</li>
              }
              <li>Cumplir con los requisitos académicos establecidos en los programas educativos;</li>
              <li>Contar con la validación de la modalidad por parte del titular de la coordinación del programa educativo;</li>
              <li>Cumplir con los requisitos específicos de la modalidad;</li>
              <li>Contar con la validación de los requisitos académicos por parte de las dependencias responsables de cada proceso, a través de los sistemas de información de apoyo académico, y</li>
              <li>Rendir la protesta de Ley correspondiente.</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography component={'span'}>Requisitos específicos de la modalidad</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            <ol>
              <li>Aprobar la totalidad de las asignaturas establecidas en el programa educativo (contar con certificado total);</li>
              {(() => {
                switch (form) {
                  case '1':
                    return <TesisEspecifico />
                  case '2':
                    return <ExamenTPEspecifico />
                  case '3':
                    return <RendimientoEspecifico />
                  case '4':
                    return <li>Aprobar el examen general de egreso de licenciatura con testimonio sobresaliente o de excelencia.</li>
                  case '5':
                    return <MaestriaEspecifico />
                  case '6':
                    return <DoctoradoEspecifico />
                  case '7':
                    return <ArticuloEspecifico />
                  default:
                    return null
                }
              })()}
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography component={'span'}>Documentación solicitada para integrar expediente</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            <ol>
              <li>Original de Constancias de liberación de Servicio Social y de Prácticas Profesionales (en caso de haber realizado esta última) expedidas por la Dirección de Servicio Social y Prácticas Profesionales (documentos no indispensables en caso de que tu certificado los contemple como una asignatura del mapa curricular);</li>

              <li>Original de los requisitos específicos de egreso y titulación de tu programa educativo,  consúltalos directamente con tu Coordinador del programa educativo en tu Escuela o Instituto;</li>

              {
                (form == 2) ? <li>Resultado del examen práctico;</li> : <></>
              }

              <li>Puntaje y testimonio del Examen General de Egreso (Acreditado). En caso de haber realizado el examen fuera de la UAEH, o si lo presentaste antes del año 2018, deberás solicitar la validación de este requisito a la Dirección General de Evaluación en el siguiente correo: egel_dgeuaeh@uaeh.edu.mx</li>

              {
                (form == 5) ? <li>Original del certificado parcial de la maestría, el cual deberá contener el 25% del total de créditos del programa educativo;</li> : (form == 6) ? <li>Original del certificado parcial del doctorado, el cual deberá contar con el 15% del total de créditos del programa educativo;</li> : <></>
              }

              {
                (form == 7) ? <ArticuloDocumentacion /> : <></>
              }

              <li>Comprobante electrónico generado en el sistema del CEDAI de la validación de tus fotografías para el título y acta de examen, que puedes descargar una vez que han sido editadas y codificadas éstas, y</li>

              <li>CURP actualizada y certificada por el RENAPO (Registro Nacional de Población) la cual no debe ser mayor a 3 meses su impresión, cabe señalar que en caso de encontrar otra CURP a tu nombre y que no tenga la unificación, el trámite será rechazado y deberás regularizar tu situación.</li>

            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
