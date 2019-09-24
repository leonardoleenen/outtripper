import React from 'react'
import {view} from './view'

class ReservationGuestRow extends React.Component {
  constructor(props) {
    super(props)
  }
  render = () => view(this.props)
}

export default ReservationGuestRow