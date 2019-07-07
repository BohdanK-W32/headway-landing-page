import React from 'react';
import { GooSpinner } from 'react-spinners-kit';
import style from './Loader.module.css';

const Loader = () => (
  <div className={style.wrapper}>
    <GooSpinner color="#616FB9" size={100} />
  </div>
);

export default Loader;
