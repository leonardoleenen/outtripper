import React from 'react'
import {view} from './view'

interface Props {
  destination: string
  description: string 
}

class CardDestination extends React.Component<Props> {
  constructor(props) {
    super(props)
    
  }
  render = () => view(this.props)
}

export default CardDestination