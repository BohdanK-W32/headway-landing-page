import React, { Component } from 'react';
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
    console.log(this.state);
    this.reset();
  };

  reset() {
    this.setState({ ...INITIAL_STATE });
  }

  render() {
    const { name, tel, email } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Имя и Фамилия"
          value={name}
          onChange={this.handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Телефон"
          value={tel}
          onChange={this.handleChange}
        />
        <input
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
