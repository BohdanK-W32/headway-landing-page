import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import style from './TeachersSlider.module.css';

export default class TeachersSlider extends Component {
  state = {};

  static propTypes = {
    teachers: PropTypes.arrayOf(
      PropTypes.shape({
        imgSrc: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

  sliderRef = React.createRef();

  onClickNext = () => {
    const width = document.documentElement.clientWidth - 20;
    this.sliderRef.current.scrollLeft += width;
  };

  onClickPrev = () => {
    const width = document.documentElement.clientWidth - 20;
    this.sliderRef.current.scrollLeft -= width;
  };

  render() {
    const { teachers } = this.props;

    return (
      <section className={style.wrapper}>
        <div ref={this.sliderRef} className={style.teachersWrapper}>
          {teachers.map(teacher => (
            <div className={style.teacher} key={uuid()}>
              <img
                className={style.photo}
                src={teacher.imgSrc}
                alt={teacher.name}
              />
              <p className={style.name}>{teacher.name}</p>
              <span className={style.subtitle}>{teacher.subtitle}</span>
            </div>
          ))}
        </div>
        <button
          className={style.leftBtn}
          type="button"
          onClick={this.onClickPrev}
        >
          <img
            className={style.icon}
            src="./img/leftArrow.svg"
            alt="left button"
          />
        </button>
        <button
          className={style.rightBtn}
          type="button"
          onClick={this.onClickNext}
        >
          <img
            className={style.icon}
            src="./img/rightArrow.svg"
            alt="right button"
          />
        </button>
      </section>
    );
  }
}
