'use client'; // Solo si usas app router
import Image from 'next/image';
import img from "@/public/img/about.jpg"
import { useContext } from 'react';
import { FullAppContext } from '../context';

const AboutMe = () => {
  const { dark } = useContext(FullAppContext)
  return (
    <>
      <div className="containerAbout" style={{ backgroundColor: dark ? "rgb(33, 33, 33)" : "white" }}>
        <div className="containerText">
          <h2 className="containerSectionTitle" style={{ color: dark ? "#7D2AE8" : null }}>
            <span style={{ color: !dark ? "#7D2AE8" : "white" }}>
              Sobre
            </span>
            <span style={{ color: !dark ? "#555" : null }}> mí</span>
          </h2>
          <p className="text-gray-700  my-5 text-lg leading-relaxed  max-w-[1700px]" style={{ color: dark ? "white" : null }}>
            Soy desarrollador frontend con pasión por crear soluciones simples, elegantes y funcionales. Disfruto aprender constantemente y enfrentar nuevos retos que me permitan crecer profesionalmente. Mi objetivo es aportar valor real y significativo a cada proyecto en el que colaboro.
          </p>
        </div>

        <div className="containerImage">
          <Image
            src={img}
            alt="Mi foto"
            style={{ objectFit: 'cover' }}
            className='rounded-xl'
            width={400}
            height={200}
          />
        </div>
      </div>
    </>
  );
};

export default AboutMe;


