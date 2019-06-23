import React from 'react';
import PropTypes from 'prop-types';
import styles from './PersonItem.module.css';

const PersonItem = ({ name, about, photoSrc }) => (
  <div className={styles.person}>
    <img className={styles.img} src={photoSrc} alt={name} />
    <h3 className={styles.name}>{name}</h3>
    {about && <p className={styles.about}>{about}</p>}
  </div>
);

PersonItem.defaultProps = {
  about: null,
};

PersonItem.propTypes = {
  name: PropTypes.string.isRequired,
  about: PropTypes.string,
  photoSrc: PropTypes.string.isRequired,
};

export default PersonItem;
