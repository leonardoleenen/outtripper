import React from 'react';
import '../../styles/index.scss';
import ArrowLeft from '../../static/svg/Icon/Outline/arrow_left.svg';


export const view = () => {
  return  <div className="navigation">
      <div><img src={ArrowLeft}/></div>
      <h2>Agenda</h2>
      <div></div>
</div>
}