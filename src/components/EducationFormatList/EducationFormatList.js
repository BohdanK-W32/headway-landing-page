import React from 'react';
import PropTypes from 'prop-types';
import style from './EducationFormatList.module.css';
import EducationFormatItem from '../EducationFormatItem/EducationFormatItem';
import englishEducation from '../../mock/englishEducation.json';
import businessEducation from '../../mock/businessEducation.json';

const EducationFormatList = ({ title, onClick }) => (
  <section>
    <h3 className={style.title}>{title}</h3>
    <EducationFormatItem
      title={businessEducation.title}
      age={businessEducation.age}
      calendar={businessEducation.calendar}
      details={businessEducation.details}
      additional={businessEducation.additional}
      onClick={onClick}
    />
    <EducationFormatItem
      title={englishEducation.title}
      age={englishEducation.age}
      calendar={englishEducation.calendar}
      details={englishEducation.details}
      additional={englishEducation.additional}
      onClick={onClick}
    />
  </section>
);

EducationFormatList.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default EducationFormatList;
