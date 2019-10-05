import React from 'react';
import '../../styles/index.scss';

interface Props {
  value : string
  handler: any
  label: string
}

const InputText = (props: Props ) => {
  return <div className="inputTextField">
    <input type="text" required onChange={(e) => { props.handler(e.target.value)}} value={props.value} />
    <span className="highlight"></span>
    <span className="bar"></span>
    <label>{props.label}</label>
    <p >Please choose a password.</p>
  </div>
}

export default InputText