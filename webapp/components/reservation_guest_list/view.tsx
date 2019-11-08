import React from 'react';
import '../../styles/index.scss';

import ReservationGuestRow from './reservation_guest_row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export const view = () => {
  return <div> <div className="reservationGuestList">
  <h2>Guest</h2>
  <button>
  <FontAwesomeIcon icon="plus" />
  </button>
  
</div>
<ReservationGuestRow title="Guest" extra="Extra Night"/>
<ReservationGuestRow title="Guest 1" extra="Extra Night"/>
<ReservationGuestRow title="Frank Zappa" extra="Extra Night single room"/>
</div> 
}