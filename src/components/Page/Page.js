import React, { Component } from 'react';
import persons from '../../mock/persons.json';
import businessModules from '../../mock/businessModules.json';
import englishModules from '../../mock/englishModules.json';
import businessSkills from '../../mock/businessSkills.json';
import englishSkills from '../../mock/englishSkills.json';
import teachers from '../../mock/teachers.json';

import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import ModalButton from '../ModalButton/ModalButton';
import PersonList from '../PersonList/PersonList';
import ModulesList from '../ModulesList/ModulesList';
import SkillsList from '../SkillsList/SkillsList';
import TeachersSlider from '../TeachersSlider/TeachersSlider';
import EducationFormatList from '../EducationFormatList/EducationFormatList';
import Footer from '../Footer/Footer';

const h2Style = {
  textTransform: 'uppercase',
  padding: '12px 6px',
  boxShadow: '0px 4px 15px 1px rgba(0,0,0,0.2)',
  fontSize: 14,
  textAlign: 'center',
  fontWeight: 500,
  lineHeight: '1.2',
};

const h2Style768 = {
  textTransform: 'uppercase',
  padding: '12px 6px',
  margin: '0 auto',
  boxShadow: '0px 4px 15px 1px rgba(0,0,0,0.2)',
  textAlign: 'center',
  fontSize: 18,
  fontWeight: 500,
};

const h2Style1024 = {
  width: 'min-content',
  whiteSpace: 'nowrap',
  textTransform: 'uppercase',
  padding: '12px 6px',
  margin: '0 auto',
  boxShadow: '0px 4px 15px 1px rgba(0,0,0,0.2)',
  textAlign: 'center',
  fontSize: 34,
  fontWeight: 400,
};

const h1Style = {
  color: '#FAFAFA',
  textTransform: 'uppercase',
  margin: '8px 0 15vh 8px',
  lineHeight: '1.1',
  fontSize: 13,
};

const h1Style768 = {
  color: '#FFF',
  textTransform: 'uppercase',
  margin: '8px 0 32px 8px',
  lineHeight: '1.1',
  fontSize: 18,
};

const h1Style1024 = {
  color: '#FFF',
  textTransform: 'uppercase',
  margin: '8px 0 32px 8px',
  lineHeight: '1.1',
  fontSize: 40,
};

const flexColumn = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: 20,
};

const flexColumn2 = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: 40,
};

const marginBottom50px = { marginBottom: 50 };

const students = {
  width: '90%',
  height: 'auto',
  margin: '0 auto',
  marginBottom: '12vh',
};

const students768 = {
  width: '70%',
  height: 'auto',
  margin: 'auto',
  marginBottom: 35,
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
            <h1
              style={
                // eslint-disable-next-line no-nested-ternary
                width < 768 ? h1Style : width < 1024 ? h1Style768 : h1Style1024
              }
            >
              мы вдохновляем подростков раскрывать свой потенциал
            </h1>
            {width < 1024 ? (
              <img
                style={width < 768 ? students : students768}
                alt="students"
                src="./img/students@1X.png"
              />
            ) : (
              <img
                style={students768}
                alt="students"
                src="./img/studentsLaptop.png"
              />
            )}
            <ModalButton
              content="Записаться на пробное занятие"
              onClick={this.openModal}
            />
          </section>
          <section style={flexColumn2}>
            <h2
              style={
                // eslint-disable-next-line no-nested-ternary
                width < 768 ? h2Style : width < 1024 ? h2Style768 : h2Style1024
              }
            >
              присоединяйся к успешным подросткам 21 века
            </h2>
            {width >= 768 &&
              (width < 1024 ? (
                <img
                  style={students768}
                  src="./img/students2.png"
                  alt="students"
                />
              ) : (
                <img
                  style={students}
                  src="./img/students2Laptop.png"
                  alt="students"
                />
              ))}
          </section>
          <PersonList items={persons} />
          <h2
            style={
              // eslint-disable-next-line no-nested-ternary
              width < 768 ? h2Style : width < 1024 ? h2Style768 : h2Style1024
            }
          >
            путь успеха для вашего подростка
          </h2>
          <ModulesList
            title1="бизнес старт"
            title2="english"
            items1={businessModules}
            items2={englishModules}
          />
          <ModalButton
            style={marginBottom50px}
            content="Записаться на пробное занятие"
            onClick={this.openModal}
          />
          <SkillsList
            title="приобретенные навыки"
            business={businessSkills}
            english={englishSkills}
          />
          <TeachersSlider title="наши преподаватели" teachers={teachers} />
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
