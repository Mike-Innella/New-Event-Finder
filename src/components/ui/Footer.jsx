// src/components/ui/Footer.jsx
import React from 'react';
import FooterLink from '../props jsx/FooterLink';
import { footerLinks } from '../props js/FooterProps';  // Import props

const Footer = () => {
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
