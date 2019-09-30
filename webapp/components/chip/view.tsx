import React from 'react';
import '../../styles/index.scss';

export const view = (color,text) => {
  return <span className={`chip_${color}`} >
    {text}
  </span>

}