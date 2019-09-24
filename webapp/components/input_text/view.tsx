import React from 'react';
import '../../styles/index.scss';

export const view = (props) => {
  return <div className="inputTextField">
    <input type="text"  required/>
    <span className="highlight"></span>
    <span className="bar"></span>
    <label>{props.label}</label>
    <p >Please choose a password.</p>
   
   
  </div>
}