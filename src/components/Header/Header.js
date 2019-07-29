import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = ({ typeOfDevice, children }) => (
  <header className={styles.header} id="header">
    <a className={styles.logo} href="#root">
      <img
        className={styles.logoImg}
        alt="HeadWay logo"
        src="./img/logo@1X.png"
      />
    </a>
    {typeOfDevice < 768 ? (
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" id="burger" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a href="#whoWeAre">
              <li>О нас</li>
            </a>
            <a href="#teachers">
              <li>Преподаватели</li>
            </a>
            <a href="#educationFormat">
              <li>Курсы</li>
            </a>
            <a href="#footer">
              <li>Контакты</li>
            </a>
            {children}
          </ul>
        </div>
      </nav>
    ) : (
      <nav id="defaultNav">
        <ul id="defaultMenu">
          <li className={styles.menuItem}>
            <a href="#whoWeAre">О нас</a>
          </li>
          <li className={styles.menuItem}>
            <a href="#teachers">Преподаватели</a>
          </li>

          <li id="hoverable" className={styles.menuItem}>
            <a href="#educationFormat">Курсы</a>
            <ul className={styles.subMenu}>
              <li className={styles.submenuItem}>
                <a href="#business">Бизнес Старт</a>
              </li>

              <li className={styles.submenuItem}>
                <a href="#educationFormat">English</a>
              </li>
            </ul>
          </li>

          <li className={styles.menuItem}>
            <a href="#footer">Контакты</a>
          </li>

          {children}
        </ul>
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
