import React from 'react';
import PropTypes from 'prop-types';
import SkillsItem from '../SkillsItem/SkillsItem';
import style from './SkillsList.module.css';

const SkillsList = ({ title, business, english }) => (
  <section className={style.list}>
    <h3 className={style.title}>{title}</h3>
    <SkillsItem title="бизнес старт" skills={business} />
    <SkillsItem title="english" skills={english} />
  </section>
);

SkillsList.propTypes = {
  title: PropTypes.string.isRequired,
  business: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      bold: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  english: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      bold: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
};

export default SkillsList;
