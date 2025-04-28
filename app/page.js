"use client"
import Image from "next/image";
import Header from "../components/Header"
import ContentWelcome from "@/components/contentWelcome";
import ContainerPicture from "@/components/ContainerPicture";
import { useContext } from "react";
import { FullAppContext } from "./context";
export default function Home() {
  const {dark} = useContext(FullAppContext)
  
  return (
    <div className="container" style={{backgroundColor: dark?"#212121":null}}>
      <Header/>
      <main className="main">
        <section className="main-section">
          <ContentWelcome/>
          <ContainerPicture/>
        </section>
      </main>
    </div>
  );
}
