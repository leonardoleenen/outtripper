import React from 'react'
import '../../styles/index.scss';
import {Props} from './index';

const getBackground = (reserved:number, limit: number) => {

  if (reserved === 0)
    return "backgroundGreen";

  if ((reserved >= limit) && (limit != 0))
    return "backgroundRed"

  if ((reserved / 2 >=  limit) && (limit != 0))
    return "backgroundOrange"

  if ((reserved / 2<=  limit) && (limit != 0))
    return "backgroundYellow"

  if (limit===0)
    return "backgroundGrey"

} 

export const view = (props:Props) => {
  return (
    <div style={{height: "140px", width:"164px" }} >
      <label>January</label>
      <div className="calendarAvailabilityResume" >
      {props.occupation.map(d => <div
              className={`${getBackground(d.reserved,d.limit)} rounded h-5 w-5`}
              key={d.day}
              style={d.day===1 ? {gridColumnStart:new Date(props.year, props.month, 1).getDay()} : {} }
              ></div>)}
    </div>
    </div>
    
  )
}