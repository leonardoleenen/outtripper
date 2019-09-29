import React from 'react'
import {view} from './view'

interface Props {
  first_name: string
  last_name: string
  email: string
  kindOf: string
}

class ContactRowAgenda extends React.Component<Props> {
  constructor(props) {
    super(props)
  }
  render = () => view(this.props)
}

export default ContactRowAgenda