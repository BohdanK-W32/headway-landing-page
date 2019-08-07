import React from 'react';
import PropTypes from 'prop-types';

import style from './AdditionalModal.module.css';

const Modal = ({ title, content, onClick }) => (
  <div className={style.wrapper}>
    <div className={style.modal}>
      <button className={style.btn} type="button" onClick={onClick}>
        <span className={style.span} />
        <span className={style.span} />
      </button>
      <h3 className={style.title}>{title}</h3>
      <div className={style.content}>
        <p className={style.text}>{content}</p>
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Modal;
