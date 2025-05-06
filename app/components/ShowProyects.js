"use client"
import * as motion from "motion/react-client"
import vivala21 from '@/public/img/project-viva.png';
import { useEffect } from "react";
import Image from "next/image";



export default function ScrollProjects() {
  return (
    <div style={container}>
      {projects.map(({ id, hueA, hueB, image, link }, i) => (
        <Card key={id} hueA={hueA} hueB={hueB} image={image} link={link} i={i} />
      ))}
    </div>
  )
}


function Card({ image, hueA, hueB, link, i }) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`
  return (
    <motion.div
      className={`card-container-${i}`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
      onClick={() => window.open(link, "_blank")}
    >
      <div style={{ ...splash, background }} />
      <motion.div style={card} variants={cardVariants} className="card">
        <Image
          src={image}
          alt="Mi foto"
          style={{ objectFit: 'cover' }}
          className='rounded-xl'
          width={400}
          height={400}
        />
      </motion.div>
    </motion.div>
  )
}

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

const hue = (h) => `hsl(${h}, 100%, 50%)`

const container = {
  margin: "0 auto",
  maxWidth: 500,
  paddingBottom: 100,
  width: "100%",
  minHeight: '100vh'
}

const cardContainer = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  marginBottom: -120,
}

const splash = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
}

const card = {
  fontSize: 164,
  height: 390,
  width: 300,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  background: "white",
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
  transformOrigin: "10% 60%",
}



const projects = [
  {
    id: 1,
    image: vivala21, // Ruta de la imagen
    title: "Proyecto viva la noticia", // Título del proyecto
    hueA: 480,
    hueB: 30,
    link: "https://vivala21-j4ml.vercel.app/", // Link al proyecto
  },
  // {
  //   id: 2,
  //   image: "/images/project2.png",
  //   title: "Proyecto 2",
  //   hueA: 40,   // Color 1 (amarillo)
  //   hueB: 80,   // Color 2 (rojo)
  //   link: "https://project2.com",
  // },
  // {
  //   id: 3,
  //   image: "/images/project2.png",
  //   title: "Proyecto 2",
  //   hueA: 40,   // Color 1 (amarillo)
  //   hueB: 80,   // Color 2 (rojo)
  //   link: "https://project2.com",
  // },
  // más proyectos...
]
