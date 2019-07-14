import React from 'react';
import PropTypes from 'prop-types';
import style from './Modal.module.css';
import Form from '../Form/Form';

const Modal = ({ ok, error, changeError, changeOk, onClick }) => (
  <div className={style.wrapper}>
    <div className={style.modal}>
      {!error && !ok && <h2 className={style.title}>Оформить заявку</h2>}
      {ok && (
        <h2 className={style.title}>
          <p>Спасибо за регистрацию!</p>
          <p>Наш менеджер свяжется с вами в ближайшее время!</p>
        </h2>
      )}
      {error && (
        <h2 className={style.title}>Что-то пошло не так, попробуйте позже!</h2>
      )}
      <button className={style.btn} type="button" onClick={onClick}>
        <span className={style.span} />
        <span className={style.span} />
      </button>
      {!error && !ok && (
        <Form changeError={changeError} changeOk={changeOk} close={onClick} />
      )}
    </div>
  </div>
);

Modal.propTypes = {
  ok: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  changeError: PropTypes.func.isRequired,
  changeOk: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Modal;
