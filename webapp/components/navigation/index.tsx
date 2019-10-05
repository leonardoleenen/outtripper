import React from 'react';
import '../../styles/index.scss';
import ArrowLeft from '../../static/svg/Icon/Outline/arrow_left.svg';


interface Props {
  title: string 
}

const NavigationBar = (props: Props) => {
  return  <div className="navigation">
      <div><img src={ArrowLeft} className="path" /></div>
      <h2>{props.title}</h2>
      <div></div>
</div>
}

export default NavigationBar