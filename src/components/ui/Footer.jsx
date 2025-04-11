// src/components/ui/Footer.jsx
import React from "react";
import FooterLink from "../props/FooterLink"; 

const Footer = () => {
  const footerLinks = [{ text: "Lorem" }, { text: "Lorem, ipsum" }];

  return (
    <footer className="footer__wrapper">
      <div className="footer__logo--wrapper">
        <img src="/assets/Logo Black.PNG" alt="Logo" className="logo__img" />
      </div>
      <ul className="footer__list">
        {footerLinks.map((link, index) => (
          <FooterLink key={index} {...link} />
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
