import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} MyPortfolio. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;