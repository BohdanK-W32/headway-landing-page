import React from 'react';
import PropTypes from 'prop-types';
import styles from './PersonList.module.css';
import PersonItem from '../PersonItem/PersonItem';

const PersonList = ({ items }) => (
  <section className={styles.personList}>
    {items.map(item => (
      <PersonItem
        key={item.name}
        name={item.name}
        about={item.about}
        photoSrc={item.photo}
      />
    ))}
    <PersonItem name="СЛЕДУЮЩИЙ ИМЕННО ТЫ!" photoSrc="./img/question@1X.jpeg" />
  </section>
);

PersonList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      about: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default PersonList;
