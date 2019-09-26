import React from 'react'
import {view} from './view'

class ContactAvatar extends React.Component {
  constructor(props) {
    super(props)
  }
  render = () => view(this.props)
}

export default ContactAvatar