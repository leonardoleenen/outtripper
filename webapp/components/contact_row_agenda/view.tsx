import React from 'react';
import '../../styles/index.scss';
import User from '../../static/svg/Icon/Outline/user.svg';
import Chip from '../chip'

export const view = (props) => {
  let color = 'unset'

  return <div className="contactRowAgenda">
    <div className="avatar"  >
      <img src={User}/>
    </div>
    <div >
      <p>{` ${props.last_name }, ${props.first_name }`} </p>
      <label>{props.email}</label>
    </div>
    <Chip color='unset' text='Guest'></Chip>

  </div>
}