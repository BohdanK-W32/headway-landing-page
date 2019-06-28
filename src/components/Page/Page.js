import React, { Component } from 'react';
import persons from '../../mock/persons.json';
import businessModules from '../../mock/businessModules.json';
import englishModules from '../../mock/englishModules.json';
import businessSkills from '../../mock/businessSkills.json';
import englishSkills from '../../mock/englishSkills.json';

import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import ModalButton from '../ModalButton/ModalButton';
import PersonList from '../PersonList/PersonList';
import ModulesList from '../ModulesList/ModulesList';
import SkillsList from '../SkillsList/SkillsList';
import EducationFormatList from '../EducationFormatList/EducationFormatList';
import Footer from '../Footer/Footer';

const h2Style = {
  textTransform: 'uppercase',
  padding: '12px 6px',
  boxShadow: '0px 4px 15px 1px rgba(0,0,0,0.2)',
  fontSize: 11,
  fontWeight: 400,
};

const h1Style = {
  color: '#EEE',
  textTransform: 'uppercase',
  margin: '8px 0 32px 8px',
  lineHeight: '1.1',
  fontSize: 13,
};

const wayStyle = {
  textTransform: 'uppercase',
  padding: '12px 6px',
  fontSize: 13,
  textAlign: 'center',
  margin: '0 auto',
  marginBottom: 60,
  fontWeight: 400,
};

const flexColumn = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: 80,
};

const marginBottom70px = { marginBottom: 70 };

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
        {isModalOpen && <Modal onClick={this.closeModal} />}
        <main>
          <section style={flexColumn}>
            <h1 style={h1Style}>
              мы вдохновляем подростков раскрывать свой потенциал
            </h1>
            <img style={students} alt="students" src="./img/students@1X.png" />
            <ModalButton
              style={marginBottom70px}
              content="Записаться на пробное занятие"
              onClick={this.openModal}
            />
          </section>
          <section style={flexColumn}>
            <h2 style={h2Style}>присоединяйся к успешным подросткам 21 века</h2>
            <img style={students} src="./img/students2.png" alt="students" />
          </section>
          <PersonList items={persons} />
          <h2 style={wayStyle}>путь успеха для вашего подростка</h2>
          <ModulesList title="бизнес старт" items={businessModules} />
          <ModulesList title="english" items={englishModules} />
          <ModalButton
            style={marginBottom70px}
            content="Записаться на пробное занятие"
            onClick={this.openModal}
          />
          <SkillsList
            title="приобретенные навыки"
            business={businessSkills}
            english={englishSkills}
          />
          <EducationFormatList
            title="формат обучения"
            onClick={this.openModal}
          />
        </main>
        <Footer />
      </>
    );
  }
}
