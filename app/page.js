"use client"
import Image from "next/image";
import Header from "@/app/components/Header"
import ContentWelcome from "@/app/components/contentWelcome";
import ContainerPicture from "@/app/components/ContainerPicture";
import { useContext } from "react";
import { FullAppContext } from "./context";
export default function Home() {
  const { dark } = useContext(FullAppContext)
  return (
    <div className="container" style={{ backgroundColor: dark ? "#212121" : "white" }}>
      <Header />
      <main className="main">
        <section className="main-section">
          <ContentWelcome />
          <ContainerPicture />
        </section>
      </main>
    </div>
  );
}
