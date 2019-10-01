import React from 'react';
import '../../styles/index.scss';
import moment from 'moment'

export const view = (props) => {
  let levelColor = 'Green'

  
  if (props.occupationLevel>=2 && props.occupationLevel!=Number.POSITIVE_INFINITY )
    levelColor = 'Yellow'

  if (props.occupationLevel<2 && props.occupationLevel!=Number.POSITIVE_INFINITY )
    levelColor = 'Orange'

  return <div className="calendarDay">
    <div className={`day${levelColor}`}>
      {props.isOnSale ?  <div className="chip">Sale</div> : ''}
     
      <div className="circleWhite">
        <s></s><s></s>
      </div>
      <h4>{moment(props.startDay).format('MMM Do')}</h4>
      <p>{moment(props.endDay).format('MMM Do')}</p>
    </div>

    <div className="price">
      <h4>{props.price}</h4>
      <h6>{props.description}</h6>
    </div>
  </div>
}