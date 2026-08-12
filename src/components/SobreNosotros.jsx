import { motion } from "framer-motion";
import {
  FaMicrochip,
  FaHandshake,
  FaLightbulb,
  FaShieldHeart,
  FaPhone,
  FaMapLocationDot,
  FaPlane,
  FaFileLines,
} from "react-icons/fa6";

import duenos from "../assets/duenos.png";
import "../styles/sobrenosotros.css";

const valores = [
  {
    icon: FaMicrochip,
    title: "Tecnología aplicada",
    text: "Utilizamos herramientas modernas para trabajar con mayor precisión.",
  },
  {
    icon: FaHandshake,
    title: "Atención personalizada",
    text: "Acompañamos cada consulta y adaptamos el servicio a cada necesidad.",
  },
  {
    icon: FaLightbulb,
    title: "Innovación",
    text: "Buscamos nuevas formas de mejorar la eficiencia en el campo.",
  },
  {
    icon: FaShieldHeart,
    title: "Compromiso",
    text: "Trabajamos con responsabilidad, claridad y dedicación.",
  },
];

const pasos = [
  {
    number: "01",
    icon: FaPhone,
    title: "Nos contactás",
    text: "Nos contás qué necesitás, dónde está el lote y qué servicio buscás.",
  },
  {
    number: "02",
    icon: FaMapLocationDot,
    title: "Analizamos el lote",
    text: "Revisamos la superficie, accesos, condiciones y objetivos del trabajo.",
  },
  {
    number: "03",
    icon: FaPlane,
    title: "Realizamos el vuelo",
    text: "Planificamos y ejecutamos el servicio con precisión y seguimiento.",
  },
  {
    number: "04",
    icon: FaFileLines,
    title: "Entregamos resultados",
    text: "Compartimos la información, el informe y las recomendaciones.",
  },
];

function SobreNosotros() {
  return (
    <section className="sobre-nosotros" id="sobre-nosotros">
      <div className="sobre-nosotros-container">
        <motion.header
          className="sobre-nosotros-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="sobre-nosotros-eyebrow">
            <span></span>
            Nuestra historia
          </span>

          <h2>
            Sobre
            <strong>nosotros</strong>
          </h2>
        </motion.header>

        <div className="sobre-nosotros-story">
          <motion.div
            className="sobre-nosotros-photo"
            initial={{ opacity: 0, x: -55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <img src={duenos} alt="Dueños de DroneCrop" />

            <div className="sobre-nosotros-photo-label">
              <strong>DroneCrop</strong>
              <span>Tecnología agrícola con drones</span>
            </div>
          </motion.div>

          <motion.div
            className="sobre-nosotros-content"
            initial={{ opacity: 0, x: 55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <span className="sobre-nosotros-small-title">
              Quiénes somos
            </span>

            <h3>
              Una empresa argentina dedicada a la agricultura de precisión
            </h3>

            <p>
              DroneCrop nació con el objetivo de acercar tecnología moderna al
              campo y ayudar a productores y empresas a trabajar con mayor
              precisión, eficiencia y seguridad.
            </p>

            <p>
              Somos un equipo comprometido con brindar una atención cercana,
              analizar cada trabajo de forma personalizada y ofrecer
              soluciones adaptadas a las necesidades reales de cada lote.
            </p>

            <div className="sobre-nosotros-values">
              {valores.map((valor) => {
                const Icon = valor.icon;

                return (
                  <article
                    className="sobre-nosotros-value"
                    key={valor.title}
                  >
                    <div className="sobre-nosotros-value-icon">
                      <Icon />
                    </div>

                    <div>
                      <h4>{valor.title}</h4>
                      <p>{valor.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="como-trabajamos">
          <motion.div
            className="como-trabajamos-heading"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <span className="sobre-nosotros-small-title">
                Un proceso claro y simple
              </span>

              <h3>¿Cómo trabajamos?</h3>
            </div>

            <p>
              Te acompañamos desde la primera consulta hasta la finalización
              del servicio.
            </p>
          </motion.div>

          <motion.div
            className="como-trabajamos-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.14,
                },
              },
            }}
          >
            {pasos.map((paso) => {
              const Icon = paso.icon;

              return (
                <motion.article
                  className="como-trabajamos-card"
                  key={paso.number}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 35,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                >
                  <span className="como-trabajamos-number">
                    {paso.number}
                  </span>

                  <div className="como-trabajamos-icon">
                    <Icon />
                  </div>

                  <h4>{paso.title}</h4>
                  <p>{paso.text}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default SobreNosotros;