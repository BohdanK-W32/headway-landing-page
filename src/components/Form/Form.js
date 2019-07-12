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

  propTypes = {
    changeError: PropTypes.func.isRequired,
    changeOk: PropTypes.func.isRequired,
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const date = new Date();

    this.setState({ date: date.toLocaleString('uk-UA') }, () => {
      this.post(this.state);
      this.reset();
    });
  };

  // eslint-disable-next-line class-methods-use-this
  post(dataObj) {
    const { changeError, changeOk } = this.props;

    axios
      .post(
        'https://headway-json.herokuapp.com/registeredUsers_308b1b02d690',
        dataObj,
      )
      .then(response => {
        if (response.status === 200 || response.status === 201) {
          changeOk();
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
