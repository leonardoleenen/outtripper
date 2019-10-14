import React from 'react';
import '../../styles/index.scss';

export const view = (color,text) => {
  console.log(color)
  return <span className={`chip_${color}`} >
    {text}
  </span>

}