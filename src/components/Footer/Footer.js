import React from 'react';
import style from './Footer.module.css';

const Footer = () => (
  <footer className={style.footer}>
    <section className={style.address}>
      <p>Адрес</p>
      <p>г. Киев,</p>
      <p>ул. Васильковская, 7</p>
      <p>4 этаж, 1 офис</p>
    </section>
    <section className={style.contacts}>
      <h5>contact</h5>
      <div className={style.contacts}>
        <a
          href="mailto:headway@gmail.com"
          target="_balnk"
          rel="noreferrer noopener"
        >
          headway@gmail.com
        </a>
        <a href="tel:+380445996123">+38(044)599-61-23</a>
        <a href="tel:+380937904417">+38(093)790-44-17</a>
      </div>
    </section>
    <p className={style.plainText}>Согласие с рассылкой</p>
    <p className={style.plainText}>Политика конфиденциальности</p>
  </footer>
);

export default Footer;
