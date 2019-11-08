import React from 'react'
import {view} from './view'

interface Props {
  chips: string 
}

class CardReservationOwner extends React.Component<Props> {
  constructor(props) {
    super(props)
    
  }
  render = () => view(this.props)
}

export default CardReservationOwner