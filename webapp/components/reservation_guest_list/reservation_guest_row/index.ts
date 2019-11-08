import React from 'react'
import {view} from './view'


interface Props {
  title: string 
  extra: string 
}
class ReservationGuestRow extends React.Component<Props> {
  constructor(props) {
    super(props)
  }
  render = () => view(this.props)
}

export default ReservationGuestRow