import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import ModuleItem from '../ModuleItem/ModuleItem';
import style from './ModulesList.module.css';

const ModulesList = ({ title1, title2, items1, items2 }) => (
  <>
    <section id="business" className={style.list1}>
      <h3 className={style.title}>{title1}</h3>
      {items1.map(module => (
        <ModuleItem key={uuid()} module={module} />
      ))}
    </section>
    <section id="english" className={style.list2}>
      <h3 className={style.title}>{title2}</h3>
      {items2.map(module => (
        <ModuleItem key={uuid()} module={module} />
      ))}
    </section>
  </>
);

ModulesList.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  items1: PropTypes.arrayOf(
    PropTypes.shape({
      num: PropTypes.string.isRequired,
      step: PropTypes.array.isRequired,
    }).isRequired,
  ).isRequired,
  items2: PropTypes.arrayOf(
    PropTypes.shape({
      num: PropTypes.string.isRequired,
      step: PropTypes.array.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ModulesList;
