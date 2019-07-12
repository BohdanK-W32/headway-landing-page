import React from 'react';
import style from './Footer.module.css';

const Footer = () => (
  <footer id="footer" className={style.footer}>
    <section className={style.address}>
      <p>Адрес</p>
      <p>г. Киев,</p>
      <p>ул. Васильковская, 7</p>
      <p>4 этаж, 1 офис</p>
    </section>
    <section className={style.contacts}>
      <h5 className={style.contact}>contact</h5>
      <div className={style.contacts}>
        <a
          className={style.plainText}
          href="mailto:headway@gmail.com"
          target="_balnk"
          rel="noreferrer noopener"
        >
          headway@gmail.com
        </a>
        <a className={style.plainText} href="tel:+380445996123">
          +38(044)599-61-23
        </a>
        <a className={style.plainText} href="tel:+380937904417">
          +38(093)790-44-17
        </a>
      </div>
    </section>
    <div className={style.other}>
      <p className={style.text}>Согласие с рассылкой</p>
      <p className={style.text}>Политика конфиденциальности</p>
    </div>
    <div className={style.iconsWrapper}>
      <a
        href="https://instagram.com/headway_uaa"
        target="_balnk"
        rel="noreferrer noopener"
        className={style.iconLink}
      >
        <img
          className={style.icon}
          src="./img/instagram.svg"
          alt="instagram icon"
        />
      </a>
      <a
        href="https://facebook.com/HeadWayy/"
        target="_balnk"
        rel="noreferrer noopener"
        className={style.iconLink}
      >
        <img
          className={style.icon}
          src="./img/facebook.svg"
          alt="facebook icon"
        />
      </a>
    </div>
  </footer>
);

export default Footer;
