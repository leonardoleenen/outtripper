import React from 'react';
import '../../styles/index.scss';
import Add from '../../static/svg/Icon/Outline/plus.svg';


export const view = () => {
  return  <button className="buttonFloatingAdd">
  <img src={Add} />
  </button>
}