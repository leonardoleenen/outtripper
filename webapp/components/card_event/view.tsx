import React from 'react';
import '../../styles/index.scss';

export const view = () => {
  return <div className="cardEvent">
    <div className="content">
      <h2>New Booking</h2>
      <label>Full Week Program 6.5 Fishing Days</label>
      <div className="author">By Sergio Villar At June 29th, 2019</div>
    </div>
    <div className="price">
   <h3>$ 19,200</h3> 
    <label>4 guest</label>
    </div>
  </div>
}