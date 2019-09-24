import React from 'react';
import '../../styles/index.scss';
import Add from '../../static/svg/Icon/Outline/iconAdd.svg';


export const view = (props) => {
  return  <div className="reservationGuestList">
  <h2>Guest</h2>
  <button>
    <img src={Add}/>
  </button>
</div>
}