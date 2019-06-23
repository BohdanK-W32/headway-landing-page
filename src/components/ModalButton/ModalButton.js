import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalButton.module.css';

const ModalButton = ({ style, type, content, onClick }) => (
  // eslint-disable-next-line react/button-has-type
  <button style={style} type={type} className={styles.btn} onClick={onClick}>
    {content}
  </button>
);

ModalButton.defaultProps = {
  type: 'button',
  onClick: null,
  style: null,
};

ModalButton.propTypes = {
  style: PropTypes.objectOf(PropTypes.number),
  type: PropTypes.string,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ModalButton;
