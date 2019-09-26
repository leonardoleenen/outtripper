import React from 'react'
import {view} from './view'

class ExtrasDialog extends React.Component {
  constructor(props) {
    super(props)
  }
  render = () => view(this.props)
}

export default ExtrasDialog