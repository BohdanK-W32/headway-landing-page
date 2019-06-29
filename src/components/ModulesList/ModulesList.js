import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import ModuleItem from '../ModuleItem/ModuleItem';
import style from './ModulesList.module.css';

const ModulesList = ({ title, items }) => (
  <section id="courses" className={style.list}>
    <h3 className={style.title}>{title}</h3>
    {items.map(module => (
      <ModuleItem key={uuid()} module={module} />
    ))}
  </section>
);

ModulesList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      num: PropTypes.string.isRequired,
      step: PropTypes.array.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ModulesList;
