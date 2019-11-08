import React from 'react';
import '../../../styles/index.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const view = (props) => {
  return <div className="reservationGuestRow">
    <div>
      <h3>{props.title}</h3>
      <p>{props.extra}</p>
    </div>
    <button>
    <FontAwesomeIcon icon="trash" />
    </button>
    <button>
    <FontAwesomeIcon icon="trash" />
    </button>
  </div>
}