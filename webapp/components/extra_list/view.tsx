import React from 'react';
import '../../styles/index.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ExtraListRow from './extra_list_row';

export const view = (props) => {
  return <div className="mb-10"> <div className="reservationGuestList mt-6">
    <h2>{props.title}</h2>
    <button>
    <FontAwesomeIcon icon="plus" />
    </button>
  </div>
    <ExtraListRow title="Extra Nigth" />

    <ExtraListRow title="Extra Nigth" />

    <ExtraListRow title="Extra Nigth" />
  </div>
}