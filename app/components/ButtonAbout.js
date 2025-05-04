"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function CustomizedButtonAbout() {

    const BootstrapButton = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '13px 12px',
        width: '200px',
        lineHeight: 1.5,
        backgroundColor: '#7D2AE8',
        fontFamily: 'poppins',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'white',
            border: '2px solid',
            borderColor: '#7D2AE8',
            boxShadow: 'none',
            color: '#7D2AE8',
            fontFamily: 'poppins',
            cursor: 'pointer'
        },
        
    });

    const BootstrapButtonProjects = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '13px 12px',
        width: '200px',
        lineHeight: 1.5,
        backgroundColor: 'transparent',
        border: '2px solid #7D2AE8',
        fontFamily: 'poppins',
        color: '#7D2AE8',
        cursor: "pointer",
        '&:hover': {
            backgroundColor: '#7D2AE8',
            border: '2px solid',
            borderColor: '#7D2AE8',
            boxShadow: 'none',
            color: '#FFFFFF',
            fontFamily: 'poppins',
            cursor: "pointer"
        },
        
    });

    return (
        <Stack spacing={2} direction="row" className='column-mobile'>
            <BootstrapButton variant="contained" disableRipple className='btn-about'>
                Acerca de mi
            </BootstrapButton>
            <BootstrapButtonProjects style={{marginLeft: 0}} variant="outlined" className='btn-projects'>Ver proyectos</BootstrapButtonProjects>
        </Stack>
    );
}