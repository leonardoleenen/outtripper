import React from 'react';
import '../../styles/index.scss';


export const view = (props) => {
  return <div className="calendarDay">
    <div className="day">
    <div className="chip">{props.status}</div>
      <div className="circleWhite">
        <s></s><s></s>
      </div>
     
      <h4>{props.dayStar}</h4>
      <p>{props.dayEnd }</p>
    </div>

    <div className="price">
      <h4>{props.price}</h4>
      <h6>{props.description}</h6>
    </div>
  </div>
}