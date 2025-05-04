"use client"
import * as motion from "motion/react-client"

export default function ScrollProjects() {
  return (
    <div style={container}>
      {projects.map(({id, hueA, hueB}, i) => (
        <Card key={id} hueA={hueA} hueB={hueB} i={i} />
      ))}
    </div>
  )
}

function Card({ emoji, hueA, hueB, i, link }) {
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
        {emoji}
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
  width: 300,
  height: 430,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  background: "#f5f5f5",
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
  transformOrigin: "10% 60%",
}

// const food = [
//   ["🍅", 266, 0],
//   ["🍊", 266, 0],
//   ["🍋", 266, 0],
//   ["🍐", 266, 0],
//   ["🍏", 266, 0],
//   ["🫐", 266, 0],
//   ["🍆", 266, 0],
//   ["🍇", 266, 0],
// ]

const projects = [
    {
      id:1,
      image: "/images/project1.png", // Ruta de la imagen
      title: "Proyecto 1", // Título del proyecto
      hueA: 266,  // Color 1 (violeta)
      hueB: 0,    // Color 2 (gris)
      link: "https://project1.com", // Link al proyecto
    },
    {
      id:2,
      image: "/images/project2.png",
      title: "Proyecto 2",
      hueA: 40,   // Color 1 (amarillo)
      hueB: 80,   // Color 2 (rojo)
      link: "https://project2.com",
    },
    {
      id:3,
      image: "/images/project2.png",
      title: "Proyecto 2",
      hueA: 40,   // Color 1 (amarillo)
      hueB: 80,   // Color 2 (rojo)
      link: "https://project2.com",
    },
    // más proyectos...
  ]
  