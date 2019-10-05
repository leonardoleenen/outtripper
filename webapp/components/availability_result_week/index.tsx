import React from 'react';
import '../../styles/index.scss';
import moment from 'moment'
import {  useSelector, useDispatch  } from 'react-redux'
import {setAvailableDate} from '../../redux/actions/reservation';
import { IDateAvailable } from 'services/type';
import { withRouter } from 'next/router';

interface Props {
  startDay: Date
  endDay: Date 
  price: number
  description: string 
  status: string 
  isOnSale: boolean
  occupationLevel: number
  date: IDateAvailable
}

const AvailabilityResultWeek = (props: Props) => {
  let levelColor = 'Green'
  const dispatch = useDispatch()
  
  
  if (props.occupationLevel>=2 && props.occupationLevel!=Number.POSITIVE_INFINITY )
    levelColor = 'Yellow'

  if (props.occupationLevel<2 && props.occupationLevel!=Number.POSITIVE_INFINITY )
    levelColor = 'Orange'

  return <div className="calendarDay" onClick={ () => {
    dispatch(setAvailableDate(props.date))
    props['router'].push('/reservation')

  }}>
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

export default withRouter(AvailabilityResultWeek)