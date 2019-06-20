import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import ModalButton from '../ModalButton/ModalButton';

export default class Page extends Component {
  state = {
    isModalOpen: false,
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <div>
        <ModalButton
          content="Записаться на пробное занятие"
          onClick={this.openModal}
        />
        {isModalOpen && <Modal onClick={this.closeModal} />}
      </div>
    );
  }
}
