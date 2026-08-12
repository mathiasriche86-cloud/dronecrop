import { motion } from "framer-motion";
import {
  FaSprayCanSparkles,
  FaMapLocationDot,
  FaChartLine,
  FaLeaf,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa6";

import "../styles/services.css";

const services = [
  {
    number: "01",
    icon: FaSprayCanSparkles,
    title: "Pulverización aérea",
    description:
      "Aplicaciones precisas y uniformes con drones agrícolas, reduciendo el consumo de agua y evitando el pisoteo del cultivo.",
    benefits: [
      "Aplicación localizada",
      "Cobertura uniforme",
      "Menor impacto en el lote",
    ],
  },
  {
    number: "02",
    icon: FaMapLocationDot,
    title: "Mapeo y relevamiento",
    description:
      "Obtenemos información aérea de alta resolución para analizar superficies, planificar tareas y detectar sectores críticos.",
    benefits: [
      "Mapas de alta resolución",
      "Medición de superficies",
      "Detección de zonas críticas",
    ],
  },
  {
    number: "03",
    icon: FaChartLine,
    title: "Monitoreo de cultivos",
    description:
      "Realizamos un seguimiento detallado para identificar anomalías y diferencias de desarrollo antes de que generen pérdidas.",
    benefits: [
      "Seguimiento periódico",
      "Detección temprana",
      "Información para decidir",
    ],
  },
  {
    number: "04",
    icon: FaLeaf,
    title: "Agricultura de precisión",
    description:
      "Integramos tecnología y análisis de datos para optimizar recursos, mejorar resultados y administrar mejor cada hectárea.",
    benefits: [
      "Optimización de insumos",
      "Decisiones basadas en datos",
      "Mayor productividad",
    ],
  },
];

const containerAnimation = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Services() {
  return (
    <section className="services" id="servicios">
      <div className="services-light services-light-left"></div>
      <div className="services-light services-light-right"></div>

      <div className="services-container">
        <motion.header
          className="services-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <div className="services-heading-title">
            <span className="services-eyebrow">
              <span></span>
              Soluciones para el agro
            </span>

            <h2>
              Servicios
              <strong>premium</strong>
            </h2>
          </div>

          <p>
            Tecnología aérea aplicada a cada etapa del cultivo para trabajar
            con más precisión, eficiencia y seguridad.
          </p>
        </motion.header>

        <motion.div
          className="services-grid"
          variants={containerAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                className="service-card"
                variants={cardAnimation}
                key={service.number}
                whileHover={{ y: -10 }}
              >
                <div className="service-card-glow"></div>

                <div className="service-card-header">
                  <div className="service-icon">
                    <Icon />
                  </div>

                  <span className="service-number">{service.number}</span>
                </div>

                <h3>{service.title}</h3>

                <p className="service-description">
                  {service.description}
                </p>

                <ul className="service-benefits">
                  {service.benefits.map((benefit) => (
                    <li key={benefit}>
                      <span>
                        <FaCheck />
                      </span>

                      {benefit}
                    </li>
                  ))}
                </ul>

                <a className="service-link" href="#contacto">
                  Consultar servicio
                  <FaArrowRight />
                </a>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span>Soluciones personalizadas</span>

            <p>
              Analizamos las necesidades de cada campo para recomendar el
              servicio más adecuado.
            </p>
          </div>

          <a
            href="https://wa.me/5493446602742?text=Hola%20DroneCrop,%20quiero%20consultar%20por%20sus%20servicios."
            target="_blank"
            rel="noreferrer"
          >
            Hablar con un asesor
            <FaArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;