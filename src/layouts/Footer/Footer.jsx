import React from "react";
import "./Footer.scss";
import logoFooter from "../../assets/img/Layouts/Footer/FooterLogo.png";

function Footer() {
  return (
    <footer>
      <div id="footer-container">
        <img src={logoFooter} alt="Logo" />
        <p>&copy; 2023 Kasa. Tous droits réservés</p>
      </div>
    </footer>
  );
}

export default Footer;
