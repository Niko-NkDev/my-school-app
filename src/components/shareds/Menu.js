import React from 'react';
import logoMenu from '../../images/escudo-back-transparent.png';
import { Link } from 'react-router-dom';
import '../../styles/Menu.css';

function Menu() {
  return (
    <div className='menu-container'>
      <div className='logo-menu'>
        <Link to='/'>
          {' '}
          <img className='logo-my-school' src={ logoMenu } alt='' />
        </Link>
      </div>

      {/* Botones del menú de navegación */}

      <div className='botones-menu'>
        <nav>
          <ul>
            <li>
              <Link to='/'>Inicio</Link>
            </li>
            <li>
              <Link to='login'>Login</Link>
            </li>
            <li>
              <Link to='cursos'>Cursos</Link>
            </li>
            <li>
              <Link to='nosotros'>Nosotros</Link>
            </li>
            <li>
              <Link to='contacto'>Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
