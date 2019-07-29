import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import style from './WhoWeAre.module.css';

const WhoWeAre = ({ items }) => (
  <div id="whoWeAre" className={style.wrapper}>
    <div className={style.itemsWrapper}>
      <h2 className={style.bigHeadline}>HeadWay — ЭТО: </h2>
      <h4 className={style.smallHeadline}>
        Образовательная платформа для подростков, которая научит думать как
        лидер/стартапер/бизнесмен
      </h4>
      {items.map(item => {
        return (
          <div key={uuid()} className={style.item}>
            <img src="/img/play.svg" alt="play" className={style.icon} />
            <div className={style.textWrapper}>
              <p className={style.title}>{item.title}</p>
              <span className={style.subtitle}>{item.subtitle}</span>
            </div>
          </div>
        );
      })}
    </div>
    <img src="/img/twoGirls.png" alt="two girls" className={style.img} />
  </div>
);

WhoWeAre.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default WhoWeAre;
