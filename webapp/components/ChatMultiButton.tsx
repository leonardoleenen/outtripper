import React from 'react'
import { connect } from 'react-redux'
import '../styles/index.css'
import { RenderEngine } from '../services/renderEngine';
import {signUpProcess} from '../services/index';
class ChatMultiButton extends React.Component {

  
  constructor(props){
    super(props)
  }

  submit(value) {
    const toDispatch={}
    let {inputComandAttribute,chatTrace, user} = this.props 
    
    const engine: RenderEngine = this.props.engine
    debugger
    toDispatch['type']=  engine.process[engine.currentStage].inputCommand.action
    toDispatch[engine.process[engine.currentStage].inputCommand.attribute] = value 

    chatTrace.push(engine.renderUserResponse(value, user.photoCover))
    engine.move()
    chatTrace.push(engine.renderNode(signUpProcess[engine.currentStage] as ProcessNode,null))

    toDispatch['chatTrace'] = Object.assign([],chatTrace)
    toDispatch['engine'] =  engine
    this.props.submit(toDispatch)
  }

  render() {
    const optionValues:[] =  this.props['optionValues']
    return <div>
      {optionValues.map( button => (
        <button 
          key= {button}
          onClick = { () => this.submit(button)}
          className="bg-transparent self-auto mb-2 w-auto mr-2 hover:bg-red-500 text-red-700 tracking-wide  uppercase hover:text-white py-2 px-2 border border-red-500 hover:border-transparent rounded">
          {button}
       </button>
      ))}
    </div>;
  }
}


const mapStateToProps = state => {
  return {
    engine: state.signupProcess.engine,
    chatTrace: state.signupProcess.chatTrace,
    user: state.signupProcess.userData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submit:(toDispatch) => dispatch(toDispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatMultiButton)