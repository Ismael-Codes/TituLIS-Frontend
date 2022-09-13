import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Alert, Grid } from '@mui/material';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderRadius: '8px',
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

export const Details = ({ tsDeleted, date, ts_create, ts_update }) => {

  const [expanded, setExpanded] = React.useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Detalles</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {tsDeleted != null && (tsDeleted != 'null' && (<Grid item xs={12}><Alert
            icon={false}
            color="info"
            variant="outlined"
          >
            <strong>Desactivado</strong> desde <strong>{JSON.stringify(date)}</strong>
          </Alert></Grid>))
          }
          <Grid item xs={12} sx={{ marginTop: 1 }}><Alert
            icon={false}
            color="info"
            variant="outlined"
          >
            <strong>Fecha</strong> de creación <strong>"{ts_create}"</strong>
          </Alert></Grid>
          <Grid item xs={12} sx={{ marginTop: 1 }}><Alert
            icon={false}
            color="info"
            variant="outlined"
          >
            <strong>Ultima</strong> actualización  <strong>"{ts_update}"</strong>
          </Alert></Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
