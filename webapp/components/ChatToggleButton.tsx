import React from 'react'

import '../styles/index.scss'


const styles = {
  toggled: 'bg-red-700 mb-2 mr-2  py-2 px-2 self-auto  w-1/4 border border-red-500  text-white border tracking-wide uppercase   rounded cursor-not-allowed',
  unToggled: 'bg-red-700 mb-2  mr-2  py-2 px-2 self-auto  w-1/4 border border-red-500  text-white border tracking-wide uppercase   rounded opacity-50 cursor-not-allowed',
}
class ChatToggleButton extends React.Component {

  state ={
    isToggled: false 
  }


  handle() {
    this.setState({isToggled: !this.state.isToggled})
  }

  getState() {
    return this.state
  }


  constructor(props){
    super(props)
  }

  render() {
    return <button 
      onClick = {() => this.handle()}
      className={this.state.isToggled ? styles.toggled : styles.unToggled}>
      {this.props['value']}
            </button>
  }
}


/*
const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatToggleButton) */ 

export default ChatToggleButton