import React from 'react';
import PropTypes from 'prop-types';
import ModuleItem from '../ModuleItem/ModuleItem';

const ModulesList = ({ title, items }) => (
  <section>
    <h3>{title}</h3>
    {items.map(module => (
      <ModuleItem key={module.num} module={module} />
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
