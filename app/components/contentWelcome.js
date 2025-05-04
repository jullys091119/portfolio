"use client";
import { motion } from "framer-motion";
import SocialIcons from "@/components/SocialIcon";
import CustomizedButtonAbout from "@/components/ButtonAbout";
import { useContext } from "react";
import { FullAppContext } from "@/app/context";
const ContentWelcome = () => {
  const {dark} = useContext(FullAppContext)
  return (
    <div className="container-text">
      <div className="flex" style={{ alignItems: "center", gap: "8px" }}>
        <h1 style={{color: dark?"white": null}}>¡Hola!</h1>
        <motion.span
          animate={{ rotate: [0, 20, -10, 20, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
          style={{ display: "inline-block", transformOrigin: "bottom center", zIndex:-1 }}
          className="iconHeand"
        >
          👋
        </motion.span>
      </div>

      <h2 className="nombre" style={{color: dark?"white":null}}>Soy <span className="nombreColor">Julián Ontiveros</span></h2>

      <p className="container-text-welcome" style={{color: dark?"white":null}}>
        Gracias por visitar mi sitio personal. Aquí podrás conocer más sobre mí, mis proyectos, y lo que me apasiona crear.
      </p>

      <div className="container-button">
        <CustomizedButtonAbout />
      </div>

      <div className="container-icon-social">
        <SocialIcons />
      </div>
    </div>

  )
};

export default ContentWelcome;
