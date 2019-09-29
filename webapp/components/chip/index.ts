import React from 'react'
import {view} from './view'


interface Props {
  color : string, 
  text: string 
}

class Chip extends React.Component<Props> {
  constructor(props) {
    super(props)
  }
  render = () => view(this.props.color, this.props.text)
}

export default Chip