import React from "react";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.iconsContainer}>
        <a href="https://www.facebook.com/Andresvelasquezgarcia" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaFacebook size={30} color= "black" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaTwitter size={30} color= "black" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaInstagram size={30} color= "black" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaLinkedin size={30} color= "black" />
        </a>
      </div>
      <p style={styles.text}>© 2025 My School App. Todos los derechos reservados.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#282c34',
    color: '#fff',
    textAlign: 'center',
    padding: '20px 0',
  },
  iconsContainer: {
    marginBottom: '10px',
  },
  icon: {
    margin: '0 10px',
    color: '#fff',
    textDecoration: 'none',
  },
  text: {
    fontSize: '14px',
    color: "black", 
  },
};

export default Footer;