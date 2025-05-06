// RootLayout.js
'use client';

import { FullAppProvider } from './context';  // Asegúrate de que el Provider esté importado correctamente
import { Geist, Geist_Mono } from "next/font/google";  // Asegúrate de que las fuentes estén importadas
import './globals.css'; // Importa tu archivo CSS global
import Header from '@/app/components/Header';
// Definir las fuentes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <FullAppProvider>
          <Header />
          {children}
        </FullAppProvider>
      </body>
    </html>
  );
}
