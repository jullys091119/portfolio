'use client';

import React, { createContext, useEffect, useState } from 'react';

export const FullAppContext = createContext();

export const FullAppProvider = ({ children }) => {
  const [dark, setIsDark] = useState(false);

  // Guardar en localStorage
  const setLocalStorage = (value) => {
    try {
      localStorage.setItem("@msj", JSON.stringify(value)); // guardamos el valor actualizado
    } catch (error) {
      console.log(error);
    }
  };

  // Leer de localStorage al cargar
  useEffect(() => {
    try {
      const storedDark = localStorage.getItem("@msj");
      if (storedDark !== null) {
        setIsDark(JSON.parse(storedDark)); // convertir de string a boolean
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  // Cada vez que cambia `dark`, actualizamos en localStorage
  useEffect(() => {
    setLocalStorage(dark);
  }, [dark]);

  return (
    <FullAppContext.Provider value={{ setIsDark, dark }}>
      {children}
    </FullAppContext.Provider>
  );
};
