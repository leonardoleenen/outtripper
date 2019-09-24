import React from 'react';
import '../../styles/index.scss';
import Add from '../../static/svg/Icon/Outline/iconAdd.svg';
import ReservationGuestRow from './reservation_guest_row';

export const view = (props) => {
  return <div> <div className="reservationGuestList">
  <h2>Guest</h2>
  <button>
    <img src={Add}/>
  </button>
  
</div>
<ReservationGuestRow title="Guest" extra="Extra Night"/>
<ReservationGuestRow title="Guest 1" extra="Extra Night"/>
<ReservationGuestRow title="Frank Zappa" extra="Extra Night single room"/>
</div> 
}