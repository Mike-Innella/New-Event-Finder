// src/components/ui/Footer.jsx
import React from "react";
import Logo from "./Logo";
import FooterLink from "./FooterLink";
import footerLinks from "../props/FooterProps";

const Footer = () => {
  return (
    <footer className="footer__wrapper">
      <div className="footer__logo--wrapper">
        <Logo />
      </div>
      <ul className="footer__list">
        {footerLinks.map((text, index) => (
          <FooterLink key={index} text={text} />
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
