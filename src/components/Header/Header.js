import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = ({ typeOfDevice, children }) => (
  <header className={styles.header} id="header">
    <a href="#root">
      <img
        className={styles.logoImg}
        alt="HeadWay logo"
        src="/img/logo@1X.png"
      />
    </a>
    {typeOfDevice < 768 && (
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a href="#root">
              <li>Про нас</li>
            </a>
            <a href="#root">
              <li>Курсы</li>
            </a>
            <a href="#root">
              <li>Контакты</li>
            </a>
            {children}
          </ul>
        </div>
      </nav>
    )}
  </header>
);

Header.propTypes = {
  typeOfDevice: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.object.isRequired,
};

export default Header;
