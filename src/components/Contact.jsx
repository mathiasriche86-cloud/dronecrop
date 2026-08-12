import { useState } from "react";
import { motion } from "framer-motion";

import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaClock,
  FaArrowRight,
  FaPaperPlane,
} from "react-icons/fa6";

import "../styles/contact.css";

/*
  CAMBIÁ ESTE NÚMERO POR EL WHATSAPP REAL.

  Formato:
  54 + 9 + código de área + número

  Sin:
  - signo +
  - espacios
  - guiones
  - paréntesis

  Ejemplo:
  5492211234567
*/

const whatsappNumber = "5493446602742";

function Contact() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    telefono: "",
    localidad: "",
    servicio: "",
    mensaje: "",
  });

  const actualizarCampo = (evento) => {
    const { name, value } = evento.target;

    setFormulario((datosAnteriores) => ({
      ...datosAnteriores,
      [name]: value,
    }));
  };

  const enviarPorWhatsapp = (evento) => {
    evento.preventDefault();

    const mensajeWhatsapp = `
Hola DroneCrop, quiero solicitar información.

Nombre: ${formulario.nombre}
Teléfono: ${formulario.telefono}
Localidad: ${formulario.localidad}
Servicio: ${formulario.servicio || "No especificado"}

Consulta:
${formulario.mensaje}
    `.trim();

    const enlaceWhatsapp = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      mensajeWhatsapp
    )}`;

    window.open(enlaceWhatsapp, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="contacto" id="contacto">
      <div className="contacto-luz contacto-luz-uno"></div>
      <div className="contacto-luz contacto-luz-dos"></div>

      <div className="contacto-container">
        <motion.header
          className="contacto-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="contacto-eyebrow">
            <span></span>
            Hablemos de tu campo
          </span>

          <h2>
            Solicitá tu
            <strong>presupuesto</strong>
          </h2>

          <p>
            Contanos qué necesitás y nos comunicaremos para analizar el trabajo
            y brindarte una propuesta personalizada.
          </p>
        </motion.header>

        <div className="contacto-grid">
          <motion.div
            className="contacto-informacion"
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
          >
            <div className="contacto-informacion-intro">
              <span>Contacto directo</span>

              <h3>Estamos para ayudarte</h3>

              <p>
                Podés escribirnos directamente por WhatsApp o completar el
                formulario. Analizamos cada consulta de manera personalizada.
              </p>
            </div>

            <div className="contacto-datos">
              <a
                className="contacto-dato"
                href={`https://wa.me/5493446602742`}
                target="_blank"
                rel="noreferrer"
              >
                <div className="contacto-dato-icono">
                  <FaWhatsapp />
                </div>

                <div>
                  <span>WhatsApp</span>
                  <strong>+54 9 3446602742</strong>
                </div>

                <FaArrowRight className="contacto-dato-flecha" />
              </a>

              <a
                className="contacto-dato"
                href="tel:+5493446602742"
              >
                <div className="contacto-dato-icono">
                  <FaPhone />
                </div>

                <div>
                  <span>Teléfono</span>
                  <strong>221 000-0000</strong>
                </div>

                <FaArrowRight className="contacto-dato-flecha" />
              </a>

              <a
                className="contacto-dato"
                href="mailto:contacto@dronecrop.com.ar"
              >
                <div className="contacto-dato-icono">
                  <FaEnvelope />
                </div>

                <div>
                  <span>Correo electrónico</span>
                  <strong>contacto@dronecrop.com.ar</strong>
                </div>

                <FaArrowRight className="contacto-dato-flecha" />
              </a>

              <div className="contacto-dato contacto-dato-sin-enlace">
                <div className="contacto-dato-icono">
                  <FaLocationDot />
                </div>

                <div>
                  <span>Zona de trabajo</span>
                  <strong>Buenos Aires, Argentina</strong>
                </div>
              </div>
            </div>

            <div className="contacto-horario">
              <FaClock />

              <div>
                <span>Horario de atención</span>
                <p>Lunes a sábado · 8:00 a 19:00</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contacto-formulario"
            onSubmit={enviarPorWhatsapp}
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
          >
            <div className="contacto-formulario-heading">
              <span>Solicitud rápida</span>

              <h3>Contanos sobre el trabajo</h3>

              <p>
                Al enviar el formulario se abrirá WhatsApp con todos los datos
                preparados.
              </p>
            </div>

            <div className="contacto-campos-dobles">
              <div className="contacto-campo">
                <label htmlFor="nombre">Nombre y apellido</label>

                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={formulario.nombre}
                  onChange={actualizarCampo}
                  placeholder="Ejemplo: Juan Pérez"
                  required
                />
              </div>

              <div className="contacto-campo">
                <label htmlFor="telefono">Teléfono</label>

                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  value={formulario.telefono}
                  onChange={actualizarCampo}
                  placeholder="Ejemplo: 221 555-0000"
                  required
                />
              </div>
            </div>

            <div className="contacto-campos-dobles">
              <div className="contacto-campo">
                <label htmlFor="localidad">Localidad</label>

                <input
                  id="localidad"
                  name="localidad"
                  type="text"
                  value={formulario.localidad}
                  onChange={actualizarCampo}
                  placeholder="¿Dónde está el lote?"
                  required
                />
              </div>

              <div className="contacto-campo">
                <label htmlFor="servicio">
                  Servicio de interés
                </label>

                <select
                  id="servicio"
                  name="servicio"
                  value={formulario.servicio}
                  onChange={actualizarCampo}
                  required
                >
                  <option value="">
                    Seleccioná una opción
                  </option>

                  <option value="Pulverización aérea">
                    Pulverización aérea
                  </option>

                  <option value="Mapeo y relevamiento">
                    Mapeo y relevamiento
                  </option>

                  <option value="Monitoreo de cultivos">
                    Monitoreo de cultivos
                  </option>

                  <option value="Agricultura de precisión">
                    Agricultura de precisión
                  </option>

                  <option value="Otra consulta">
                    Otra consulta
                  </option>
                </select>
              </div>
            </div>

            <div className="contacto-campo">
              <label htmlFor="mensaje">Mensaje</label>

              <textarea
                id="mensaje"
                name="mensaje"
                value={formulario.mensaje}
                onChange={actualizarCampo}
                placeholder="Contanos la superficie aproximada, el tipo de cultivo y qué trabajo necesitás."
                rows="6"
                required
              ></textarea>
            </div>

            <button
              className="contacto-boton"
              type="submit"
            >
              <FaWhatsapp />
              Enviar consulta por WhatsApp
              <FaPaperPlane />
            </button>

            <p className="contacto-aclaracion">
              No se enviará nada automáticamente. Primero se abrirá WhatsApp
              para que puedas revisar el mensaje.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;