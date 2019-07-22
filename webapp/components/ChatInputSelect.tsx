import React from 'react'
import { connect } from 'react-redux'

class ChatInputSelect extends React.Component {

  render() {
    
    return (<div>
      <select>
        {this.props['optionValues'].map(option => (
          <option value={option.id}>{option.value}</option>
        ))}
      </select>
    </div>)
  }
}


const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChatInputSelect)