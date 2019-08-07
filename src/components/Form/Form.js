import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import style from './Form.module.css';
import ModalButton from '../ModalButton/ModalButton';

const INITIAL_STATE = {
  name: '',
  phone: '',
  email: '',
  date: 'unknown',
};

export default class Form extends Component {
  state = { ...INITIAL_STATE };

  static propTypes = {
    changeError: PropTypes.func.isRequired,
    changeOk: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    history: PropTypes.object.isRequired,
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const date = new Date();
    const email = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    const phone = /^([+]?\d{1,4}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;

    this.setState({ date: date.toLocaleString('uk-UA') }, () => {
      if (email.test(this.state.email)) {
        if (phone.test(this.state.phone)) {
          this.post(this.state);
          this.reset();
        } else {
          // eslint-disable-next-line no-alert
          alert('Неверный телефон. \nПопробуйте ещё раз!');
        }
      } else {
        // eslint-disable-next-line no-alert
        alert('Неверный email. \nПопробуйте ещё раз!');
      }
    });
  };

  // eslint-disable-next-line class-methods-use-this
  post(dataObj) {
    const { changeError, changeOk, history } = this.props;

    axios
      .post(
        'https://headway-json.herokuapp.com/api/registeredUsers_308b1b02d690',
        dataObj,
      )
      .then(response => {
        if (response.status === 200 || response.status === 201) {
          changeOk();
          history.push('/thanks');
        } else {
          changeError();
        }
      });
  }

  reset() {
    this.setState({ ...INITIAL_STATE });
  }

  render() {
    const { name, phone, email } = this.state;

    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <input
          className={style.input}
          type="text"
          name="name"
          placeholder="Имя и Фамилия"
          value={name}
          onChange={this.handleChange}
        />
        <input
          className={style.input}
          type="tel"
          name="phone"
          placeholder="Телефон"
          value={phone}
          onChange={this.handleChange}
        />
        <input
          className={style.input}
          type="email"
          name="email"
          placeholder="Почта"
          value={email}
          onChange={this.handleChange}
        />
        <ModalButton type="submit" content="Записаться на пробное занятие" />
      </form>
    );
  }
}
