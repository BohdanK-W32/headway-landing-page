import React from 'react';
import PropTypes from 'prop-types';
import style from './Modal.module.css';
// import ModalButton from '../ModalButton/ModalButton';
import Form from '../Form/Form';

const Modal = ({ onClick }) => (
  <div className={style.wrapper}>
    <div className={style.modal}>
      <h2 className={style.title}>Оформить заявку</h2>
      <button className={style.btn} type="button" onClick={onClick}>
        <span className={style.span} />
        <span className={style.span} />
      </button>
      <Form />
    </div>
  </div>
);

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Modal;
