import React from 'react';
import '../../styles/index.scss';

export const view = (props) => {
  return <div className="cardReservationOwner">
  <img src="https://i.vimeocdn.com/portrait/11968448_640x640"/>
  <div>
      <h2>John Smith</h2>
      <label>2 bookings</label>
  </div>
  <div className="chip">{props.chip}</div>
    
  </div>
}