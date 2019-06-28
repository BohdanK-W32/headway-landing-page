import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import style from './ModuleItem.module.css';

const ModuleItem = ({ module }) => (
  <div className={style.module}>
    {module.num !== '' && <h5 className={style.title}>{module.num}</h5>}
    <div className={style.steps}>
      {module.step.map(el => (
        <p key={uuid()} className={style.step}>
          {el}
        </p>
      ))}
    </div>
  </div>
);

ModuleItem.propTypes = {
  module: PropTypes.shape({
    num: PropTypes.string.isRequired,
    step: PropTypes.array.isRequired,
  }).isRequired,
};

export default ModuleItem;
