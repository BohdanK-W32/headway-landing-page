import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import style from './SkillsItem.module.css';

const SkillsItem = ({ title, skills }) => (
  <div className={style.skill}>
    <h4 className={style.title}>{title}</h4>
    <ul>
      {skills.map(skill =>
        skill.bold ? (
          <li className={style.item} key={uuid()}>
            <img className={style.checkImg} src="./img/check.svg" alt="check" />
            <p className={style.text}>
              <b>{skill.title}</b>
            </p>
          </li>
        ) : (
          <li className={style.item} key={uuid()}>
            <img className={style.checkImg} src="./img/check.svg" alt="check" />
            <p className={style.text}>{skill.title}</p>
          </li>
        ),
      )}
    </ul>
  </div>
);

SkillsItem.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      bold: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
};

export default SkillsItem;
