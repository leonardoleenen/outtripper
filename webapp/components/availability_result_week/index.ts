import React from 'react'
import {view} from './view'

interface Props {
  startDay: Date
  endDay: Date 
  price: number
  description: string 
  status: string 
  isOnSale: boolean
  occupationLevel: number
}

class AvailabilityResultWeek extends React.Component<Props> {
  constructor(props) {
    super(props)
    
  }

  render = () => view(this.props)
}

export default AvailabilityResultWeek