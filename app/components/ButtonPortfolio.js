import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '10px 12px',
  width: '200px',
  lineHeight: 1.5,
  backgroundColor: '#7D2AE8',
  fontFamily: 'poppins',
  '&:hover': {
    backgroundColor: 'white',
    border: '1px solid',
    borderColor: '#7D2AE8',
    boxShadow: 'none',
    color: '#7D2AE8',
    fontFamily: 'poppins'
  },

});


export default function CustomizedButtonsPortfolio() {
  return (
    <Stack spacing={2} direction="row">
      <BootstrapButton size='large' className='hide-button-portfolio' variant="contained" style={{ width: 200, fontFamily: "poppins" }}>Proyectos</BootstrapButton>
    </Stack>
  );
}
