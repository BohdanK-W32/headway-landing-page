import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalButton.module.css';

const ModalButton = ({ type, content, onClick }) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} className={styles.btn} onClick={onClick}>
    {content}
  </button>
);

ModalButton.defaultProps = {
  type: 'button',
  onClick: null,
};

ModalButton.propTypes = {
  type: PropTypes.string,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ModalButton;
