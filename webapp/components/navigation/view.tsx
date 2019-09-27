import React from 'react';
import '../../styles/index.scss';
import ArrowLeft from '../../static/svg/Icon/Outline/arrow_left.svg';


export const view = (props) => {
  return  <div className="navigation">
      <div><img src={ArrowLeft} class="path" /></div>
      <h2>{props.title}</h2>
      <div></div>
</div>
}