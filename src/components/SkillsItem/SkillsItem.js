import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

const SkillsItem = ({ title, skills }) => (
  <div>
    <h3>{title}</h3>
    <ul>
      {skills.map(skill => (
        <li key={uuid()}>{skill}</li>
      ))}
    </ul>
  </div>
);

SkillsItem.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillsItem;
