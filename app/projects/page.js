'use client'
import ScrollProjects from "@/app/components/ShowProyects";
import { useContext } from "react";
import { FullAppContext } from '@/app/context'
import styles from "@/app/projects/projects.module.css";  // Asegúrate de usar .module.css

export default function ProjectsPage() {
  const { dark } = useContext(FullAppContext);

  return (
    <div
      style={{
        backgroundColor: dark ? "#212121"
          : "white",
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 70
      }}
    >
      <div
        className={styles.containerTitle}
      >
        <h1 style={{ color: dark ? "white" : null }} className={styles['container-title']}>💻 Proyectos destacados.</h1>
      </div>
      <ScrollProjects />
    </div>
  );
}
