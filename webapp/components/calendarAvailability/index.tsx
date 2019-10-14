import React from 'react'
import '../../styles/index.scss';
import moment from 'moment'

interface occuptaionDetail { 
  day: number
  reserved: number
  limit: number
}

export interface Props {
  month: number
  year: number
  limit: number
  occupation: occuptaionDetail[]
}

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

const CalendarAvailability = (props:Props) => {
  return (
    <div style={{height: "140px", width:"164px" }} >
      <label>{moment(props.month,'MM').format('MMMM')} </label>
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

export default CalendarAvailability