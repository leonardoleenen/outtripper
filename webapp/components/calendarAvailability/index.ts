import React from 'react'
import { view } from './view';

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

interface State {

}

class CalendarAvailability extends React.Component<Props,State> {
  constructor(props) {
    super(props)
  }

  render = () => view(this.props)
}

export default CalendarAvailability