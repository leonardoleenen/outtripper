import React from 'react'
import {view} from './view'

interface Props {
  callBack: any,

}

class SearchByText extends React.Component <Props> {
  constructor(props) {
    super(props)
  }  

  render = () => view(this.props.callBack)
}

export default SearchByText