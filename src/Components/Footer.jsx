import React from "react";
import { ContextGlobal } from "./utils/global.context";
import { useContext } from "react";

const Footer = () => {
  const { state } = useContext(ContextGlobal);

  // Determinar el tema para la imagen de la firma
  const firmaImgSrc =
    state.theme === "dark" ? "/img/FirmaDark.png" : "/img/FirmaLight.png";

  // Verificar si la imagen de la firma está disponible
  const imgAltText = state.theme === "dark" ? "Firma Dark Mode" : "Firma Light Mode";

  return (
    <footer>
      <p>Todos los derechos reservados de tu empresa</p>

      {/* Asegurarse de que la imagen sea accesible y de que exista */}
      <img
        className="firma"
        src={firmaImgSrc}
        alt={imgAltText}
        onError={(e) => {
          e.target.src = "/img/defaultFirma.png"; // Imagen por defecto si la imagen no se encuentra
          e.target.alt = "Firma no disponible"; // Texto alternativo si hay un error
        }}
      />

      {/* Aquí podrías agregar más contenido como enlaces de contacto o redes sociales */}
      <div className="footer-links">
        <a href="/contacto">Contacto</a>
        <a href="/privacidad">Política de Privacidad</a>
      </div>
    </footer>
  );
};

export default Footer;
