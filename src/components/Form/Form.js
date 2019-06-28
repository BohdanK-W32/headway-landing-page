import React, { Component } from 'react';
import style from './Form.module.css';
import ModalButton from '../ModalButton/ModalButton';

const INITIAL_STATE = {
  name: '',
  phone: '',
  email: '',
};

export default class Form extends Component {
  state = { ...INITIAL_STATE };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    // eslint-disable-next-line no-console
    console.log(this.state);
    this.reset();
  };

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
