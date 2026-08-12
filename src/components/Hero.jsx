import { motion } from "framer-motion";
import "../styles/hero.css";

const features = [
  {
    icon: "✦",
    text: (
      <>
        Drones de última
        <br />
        generación
      </>
    ),
  },
  {
    icon: "⌁",
    text: (
      <>
        Mayor eficiencia
        <br />
        en cada aplicación
      </>
    ),
  },
  {
    icon: "▦",
    text: (
      <>
        Datos precisos
        <br />
        para decidir mejor
      </>
    ),
  },
  {
    icon: "◇",
    text: (
      <>
        Seguridad y
        <br />
        confiabilidad
      </>
    ),
  },
];

const featureContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.13,
    },
  },
};

const featureItem = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-overlay"></div>

      <motion.div
        className="hero-glow"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      ></motion.div>

      <div className="hero-content">
        <motion.span
          className="hero-tag"
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.65,
            delay: 0.15,
            ease: "easeOut",
          }}
        >
          <span className="hero-tag-line"></span>
          Tecnología que transforma el agro
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.85,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Tecnología agrícola
          <span>de precisión</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.55,
            ease: "easeOut",
          }}
        >
          Pulverización aérea, mapeo y monitoreo inteligente para maximizar el
          rendimiento de cada hectárea con precisión, eficiencia y menor
          impacto ambiental.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            delay: 0.75,
            ease: "easeOut",
          }}
        >
          <motion.a
            className="btn-primary"
            href="https://wa.me/5493446602742"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Solicitar presupuesto
          </motion.a>

          <motion.a
            className="btn-secondary"
            href="#servicios"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="play-icon">▶</span>
            Ver servicios
          </motion.a>
        </motion.div>

        <motion.div
          className="hero-features"
          variants={featureContainer}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <motion.div
              className="hero-feature"
              variants={featureItem}
              key={index}
            >
              <span>{feature.icon}</span>
              <p>{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="hero-bottom"></div>
    </section>
  );
}

export default Hero;