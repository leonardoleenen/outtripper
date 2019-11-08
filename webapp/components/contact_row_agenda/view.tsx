import React from 'react';
import '../../styles/index.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Chip from '../chip'

export const view = (props) => {
 
  return <div className="contactRowAgenda">
    <div className="avatar"  >
    <FontAwesomeIcon icon="user" />
    </div>
    <div >
      <p>{` ${props.last_name }, ${props.first_name }`} </p>
      <label>{props.email}</label>
    </div>
    <Chip color='unset' text='Guest'></Chip>

  </div>
}