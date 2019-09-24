import React from 'react'
import {view} from './view'

class ExtraList extends React.Component {
  constructor(props) {
    super(props)
  }
  render = () => view(this.props)
}

export default ExtraList