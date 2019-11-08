import React from 'react'
import Send from '../static/svg/send.svg'
import { connect } from 'react-redux'
import '../styles/index.scss'
import {signUpProcess} from '../services/index';
import { ProcessNode, RenderEngine} from '../services/renderEngine';


class ChatInput extends React.Component {


  state = {
    value: ''
  }

  constructor(props){
    super(props)
  }

  handleOnChange( event) {
    this.setState({value: event.target.value })
  }

  handleSubmit() {
    const toDispatch={}
    let {chatTrace, user} = this.props 
    
    const engine: RenderEngine = this.props.engine

    toDispatch['type']=  engine.process[engine.currentStage].inputCommand.action
    toDispatch[engine.process[engine.currentStage].inputCommand.attribute] = this.state.value 

    chatTrace.push(engine.renderUserResponse(this.state.value, user.photoCover))
    engine.move() 
    chatTrace.push(engine.renderNode(signUpProcess[engine.currentStage] as ProcessNode,null))

    toDispatch['chatTrace'] = Object.assign([],chatTrace)
    toDispatch['engine'] =  engine
    this.props.submit(toDispatch)
  }

  render() {
    return <div className="flex flex-col mb-4">
      <div className="flex flex-row">
        <input 
          value={this.state.value}
          onChange={e => this.handleOnChange(e)} 
          name="price" 
          className="bg-grey-lighter text-grey-darker py-2 font-normal w-3/4 text-grey-darkest border-b border-grey-lighter rounded-l-none font-bold" />
        <span className="flex items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold text-gray-700">
          <img src={Send} className="w-8 h-8" onClick={() => this.handleSubmit()} />
        </span>
      </div>
    </div>
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
    submit: (toDispatch ) => dispatch(toDispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatInput)

