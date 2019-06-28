import React from 'react';
import PropTypes from 'prop-types';
import style from './EducationFormatItem.module.css';
import ModalButton from '../ModalButton/ModalButton';

const EducationFormatItem = ({
  title,
  age,
  calendar,
  details,
  additional,
  onClick,
}) => (
  <div className={style.wrapper}>
    <h3 className={style.title}>{title}</h3>
    <div className={style.container}>
      <img className={style.icon} src="./img/age.svg" alt="age" />
      <div>
        <p>{age.age}</p>
        <p>{age.group}</p>
      </div>
    </div>
    <div className={style.calendarContainer}>
      <img className={style.icon} src="./img/calendar.svg" alt="calendar" />
      <div>
        <div className={style.calendarBlock}>
          <p>{calendar.date1.text}</p>
          <span className={style.subtext}>{calendar.date1.subtext}</span>
        </div>
        <div className={style.calendarBlock}>
          <p>{calendar.date2.text}</p>
          <span className={style.subtext}>{calendar.date2.subtext}</span>
        </div>
      </div>
    </div>
    <div className={style.container}>
      <img className={style.icon} src="./img/duration.svg" alt="modules" />
      <div>
        <p>{details.num}</p>
        <p>{details.modules}</p>
        <p>{details.price}</p>
      </div>
    </div>
    <p className={style.additionalText}>{additional}</p>
    <ModalButton content="Записаться на пробное занятие" onClick={onClick} />
  </div>
);

EducationFormatItem.propTypes = {
  title: PropTypes.string.isRequired,

  age: PropTypes.shape({
    age: PropTypes.string.isRequired,
    group: PropTypes.string.isRequired,
  }).isRequired,

  calendar: PropTypes.shape({
    date1: PropTypes.shape({
      text: PropTypes.string.isRequired,
      subtext: PropTypes.string.isRequired,
    }).isRequired,

    date2: PropTypes.shape({
      text: PropTypes.string.isRequired,
      subtext: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,

  details: PropTypes.shape({
    num: PropTypes.string.isRequired,
    modules: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,

  additional: PropTypes.string.isRequired,

  onClick: PropTypes.func.isRequired,
};

export default EducationFormatItem;
