import { motion } from "framer-motion";
import {
  FaBullseye,
  FaDroplet,
  FaSeedling,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa6";

import piloto from "../assets/matias.png";
import "../styles/about.css";

const benefits = [
  {
    icon: FaBullseye,
    title: "Aplicaciones precisas",
    text: "Trabajamos con planificación y tecnología para lograr una cobertura uniforme en cada lote.",
  },
  {
    icon: FaDroplet,
    title: "Menor consumo de agua",
    text: "Optimizamos los recursos y reducimos desperdicios sin perder efectividad.",
  },
  {
    icon: FaSeedling,
    title: "Sin pisoteo del cultivo",
    text: "El trabajo aéreo evita daños físicos y permite ingresar en zonas de difícil acceso.",
  },
  {
    icon: FaHandshake,
    title: "Atención personalizada",
    text: "Analizamos cada necesidad para recomendar la solución más adecuada.",
  },
];

function About() {
  return (
    <section className="about" id="nosotros">
      <div className="about-container">
        <motion.div
          className="about-image-wrapper"
          initial={{ opacity: 0, x: -55 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-image-frame">
            <img
              src={piloto}
              alt="Operador de DroneCrop piloteando un dron agrícola"
            />

            <div className="about-image-badge">
              <strong>Tecnología aplicada</strong>
              <span>al servicio del campo</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 55 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <span className="about-eyebrow">
            <span></span>
            Por qué elegirnos
          </span>

          <h2>
            Precisión, confianza
            <strong>y compromiso</strong>
          </h2>

          <p className="about-intro">
            En DroneCrop combinamos tecnología agrícola, planificación y
            atención personalizada para brindar soluciones eficientes en cada
            trabajo.
          </p>

          <div className="about-benefits">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article className="about-benefit" key={benefit.title}>
                  <div className="about-benefit-icon">
                    <Icon />
                  </div>

                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.text}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <a
            className="about-button"
            href="https://wa.me/5493446602742?text=Hola%20DroneCrop,%20quiero%20más%20información."
            target="_blank"
            rel="noreferrer"
          >
            Conocé cómo podemos ayudarte
            <FaArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;