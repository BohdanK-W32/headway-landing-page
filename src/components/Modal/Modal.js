import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Modal.module.css';
// import ModalButton from '../ModalButton/ModalButton';
import Form from '../Form/Form';

const Modal = () => (
  <div className={styles.modal}>
    <h2>Оформить заявку</h2>
    <Form />
  </div>
);

// Modal.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default Modal;
