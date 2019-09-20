import React from 'react';
import '../../styles/index.scss';
import User from '../../static/svg/Icon/Outline/user.svg';
import Chip from '../chip'

export const view = () => {
  return <div className="contactRowAgenda">
    <div className="avatar"  >
      <img src={User}/>
    </div>
    <div >
      <p>Alan William </p>
      <label>alan@comtel.com</label>
    </div>
    <Chip></Chip>

  </div>
}