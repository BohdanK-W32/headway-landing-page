import React, { Component } from 'react';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import ModalButton from '../ModalButton/ModalButton';
import PersonList from '../PersonList/PersonList';

import persons from '../../mock/persons.json';

const h2Style = {
  textTransform: 'uppercase',
  padding: '12px 6px',
  boxShadow: '0px 4px 15px 1px rgba(0,0,0,0.2)',
  fontSize: 18,
};

const h1Style = {
  color: '#EEE',
  textTransform: 'uppercase',
  margin: '8px 8px 32px 8px',
  fontSize: 14,
};

const flexColumn = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const marginBottom = { marginBottom: 10 };

const students = {
  width: '85%',
  height: 'auto',
  margin: 'auto',
  marginBottom: 5,
};

export default class Page extends Component {
  state = {
    isModalOpen: false,
    width: 0,
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

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

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { isModalOpen, width } = this.state;

    return (
      <>
        <Header typeOfDevice={width}>
          <ModalButton
            content="Записаться на пробное занятие"
            onClick={this.openModal}
          />
        </Header>
        <main>
          <section style={flexColumn}>
            <h1 style={h1Style}>
              мы вдохновляем подростков раскрывать свой потенциал
            </h1>
            <img style={students} alt="students" src="/img/students@1X.png" />
            <ModalButton
              style={marginBottom}
              content="Записаться на пробное занятие"
              onClick={this.openModal}
            />
          </section>
          {isModalOpen && <Modal onClick={this.closeModal} />}
          <PersonList items={persons} />
          <section style={flexColumn}>
            <h2 style={h2Style}>присоединяйся к успешным подросткам 21 века</h2>
            <img style={students} src="/img/students2.png" alt="students" />
          </section>
        </main>
      </>
    );
  }
}
