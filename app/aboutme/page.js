'use client'; // Solo si usas app router
import Image from 'next/image';
import img from "@/public/img/about.jpeg"

const AboutMe = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-16 px-8 bg-white">
      <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
        <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Soy un desarrollador que disfruta crear soluciones simples, útiles y elegantes.
          Me apasiona aprender y seguir creciendo cada día. Mi objetivo es aportar valor real a cada proyecto en el que participo.
        </p>
      </div>

      <div className="md:w-1/2 flex flex-col items-center">
        <div className="w-100 h-100 relative overflow-hidden ">
          <Image
            src={img}
            alt="Mi foto"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <p className="mt-4 text-gray-500 italic text-center">
          "Construyendo proyectos con pasión y propósito."
        </p>
      </div>
    </section>
  );
};

export default AboutMe;