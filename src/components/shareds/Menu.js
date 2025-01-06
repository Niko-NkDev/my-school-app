import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import logoMenu from "../../images/escudo-back-transparent.png";
import { Link } from "react-router-dom";
import "../../styles/Menu.css";

function Menu() {
  // Estado para controlar el despliegue del menú hamburguesa
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el menú hamburguesa
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="menu-container">
      <div className="logo-menu">
        <Link to="/">
          {" "}
          <img className="logo-my-school" src={logoMenu} alt="" />
        </Link>
      </div>

    
    
   

      <div className="botones-menu">
        <a href="https://github.com/Niko-NkDev"
          target="_blank"
          rel="noopener noreferrer"
          >
      <FaGithub size={30} color="black" />
      </a>
        <nav>
          <ul className="menu">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="nosotros">Nosotros</Link>
            </li>

            <li>
              <button className="hamburger-button" onClick={toggleMenu}>
                Más Opciones
              </button>

              {isMenuOpen && (
                <ul className="submenu">
                  <li>
                    <Link to="login">Login</Link>
                  </li>
                  <li>
                    <Link to="cursos">Cursos</Link>
                  </li>
                  <li>
                    <Link to="contacto">Contacto</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
