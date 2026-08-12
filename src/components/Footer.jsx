import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaArrowUp,
} from "react-icons/fa6";

import logo from "../assets/logo.png";
import "../styles/footer.css";

const whatsappNumber = "5493446602742";

function Footer() {
  const volverArriba = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-luz footer-luz-uno"></div>
      <div className="footer-luz footer-luz-dos"></div>

      <div className="footer-container">
        <motion.div
          className="footer-principal"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="footer-marca">
            <a href="#inicio" className="footer-logo">
              <img src={logo} alt="DroneCrop" />
            </a>

            <p>
              Tecnología agrícola con drones para trabajar con mayor precisión,
              eficiencia y seguridad en cada hectárea.
            </p>

            <div className="footer-redes">
              <a
                href="https://www.instagram.com/dronecroparg"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href={`https://wa.me/5493446602742`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div className="footer-columna">
            <h3>Empresa</h3>

            <nav className="footer-links">
              <a href="#inicio">Inicio</a>
              <a href="#servicios">Servicios</a>
              <a href="#nosotros">Nosotros</a>
              <a href="#sobre-nosotros">Nuestro trabajo</a>
              <a href="#contacto">Contacto</a>
            </nav>
          </div>

          <div className="footer-columna">
            <h3>Servicios</h3>

            <nav className="footer-links">
              <a href="#servicios">Pulverización aérea</a>
              <a href="#servicios">Mapeo y relevamiento</a>
              <a href="#servicios">Monitoreo de cultivos</a>
              <a href="#servicios">Agricultura de precisión</a>
            </nav>
          </div>

          <div className="footer-columna footer-contacto">
            <h3>Contacto</h3>

            <a
              href={`https://wa.me/5493446602742`}
              target="_blank"
              rel="noreferrer"
              className="footer-contacto-item"
            >
              <FaWhatsapp />

              
              <div>
                <span>WhatsApp</span>
                <strong>+54 9 3446602742</strong>
              </div>
            </a>

            <a href="tel:+542210000000" className="footer-contacto-item">
              <FaPhone />

              <div>
                <span>Teléfono</span>
                <strong>221 000-0000</strong>
              </div>
            </a>

            <a
              href="mailto:contacto@dronecrop.com.ar"
              className="footer-contacto-item"
            >
              <FaEnvelope />

              <div>
                <span>Correo</span>
                <strong>contacto@dronecrop.com.ar</strong>
              </div>
            </a>

            <div className="footer-contacto-item">
              <FaLocationDot />

              <div>
                <span>Zona de trabajo</span>
                <strong>Buenos Aires, Argentina</strong>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="footer-separador"></div>

        <div className="footer-inferior">
          <p>
            © {new Date().getFullYear()} MathiasDeb. Todos los derechos
            reservados.
          </p>

          <div className="footer-legales">
            <a href="#inicio">Política de privacidad</a>
            <a href="#inicio">Términos y condiciones</a>
          </div>

          <button
            className="footer-arriba"
            type="button"
            onClick={volverArriba}
            aria-label="Volver arriba"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;