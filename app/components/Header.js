"use client"
import React, { useState, useContext } from 'react'
import CustomizedButtonsPortfolio from './ButtonPortfolio';
import Link from 'next/link';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { FullAppContext } from '@/app/context';

const Header = () => {
  const { setIsDark, dark } = useContext(FullAppContext)
  return (
    <header className='header' style={{ backgroundColor: dark ? "#212121" : null }}>
      <div className='maxwidthContainer'>
        <nav className='header-nav'>
          <div className='header-name'>
            <span className='nombreColor1'>Jul</span>
            <span className='nombreColor2' style={{ color: dark ? "white" : null }}>ián O.</span>
          </div>
          <nav className='header-nav-list' style={{ color: dark ? "white" : null }}>
            <p><Link href="/">Inicio</Link></p>
            <p><Link href="#">Acerca</Link></p>
            <p><Link href='/projects'>Portfolio</Link></p>
            <p><Link href='#'>Contacto</Link></p>
            {!dark ? <DarkModeIcon onClick={() => { setIsDark(!dark) }} /> :
              <LightModeIcon style={{ color: "white" }} onClick={() => { setIsDark(!dark) }} />}
          </nav>
          <div>
            <CustomizedButtonsPortfolio />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;
