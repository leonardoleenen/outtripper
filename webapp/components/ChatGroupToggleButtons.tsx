import React from 'react'
import { connect } from 'react-redux'
import '../styles/index.scss';
import { RenderEngine, ProcessNode } from '../services/renderEngine';
import {signUpProcess} from '../services/index';
import { User } from '../services/type';

const styles = {
  toggled: 'bg-red-700 mb-2 mr-2  py-2 px-2 self-auto  w-auto border border-red-500  text-white border tracking-wide uppercase   rounded cursor-not-allowed',
  unToggled: 'bg-red-700 mb-2  mr-2  py-2 px-2 self-auto  w-auto border border-red-500  text-white border tracking-wide uppercase   rounded opacity-50 cursor-not-allowed',
}


interface Props {
  chatTrace: any,
  user: User,
  submit(value: any):void
}



class ChatGroupToggleButtons extends React.Component<Props> {
  state = {
    values: {}
  }

  componentWillMount() {
    const stateMap = this.state.values
    this.props['optionValues'].forEach(element => {
      stateMap[element] = {
        selected: false
      }
    });
    this.setState({ values: stateMap })
  }

  constructor(props) {
    super(props)
  }

  handleToggle(option) {
    let obj = this.state.values
    obj[option] = {
      selected: !obj[option].selected
    }
    this.setState({ value: obj })
  }

  
  submit() {
    const toDispatch={}
    let {chatTrace, user} = this.props 
    
    const engine: RenderEngine = this.props['engine']

    toDispatch['type']=  engine.process[engine.currentStage].inputCommand.action
    toDispatch[engine.process[engine.currentStage].inputCommand.attribute] = this.state['value'] 

    chatTrace.push(engine.renderUserResponse(Object.keys(this.state['value']).join(', '), user.photoCover))
    engine.move() 
    chatTrace.push(engine.renderNode(signUpProcess[engine.currentStage] as ProcessNode,null))

    toDispatch['chatTrace'] = Object.assign([],chatTrace)
    toDispatch['engine'] =  engine
    this.props.submit(toDispatch)
  }

  render() {

    const optionValues: [] = this.props['optionValues']

    return (<div>
      <div className='groupToggleButtons' style={{display: 'grid', gridTemplateColumns:'1fr 1fr 1fr'}}>
        {optionValues.map(o => (
          <button
            key={o}
            onClick={() => this.handleToggle(o)}
            className={this.state.values[o]['selected'] ? styles.toggled : styles.unToggled}>
            {o}
          </button>
        ))}</div>
      <div className='container'>
        <button onClick={() => this.submit()} className="bg-transparent text-center text-red-700 uppercase mb-2  mr-2  py-2 px-2  mt-4">
          Continue
                </button>
      </div>
    </div>)
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

export default connect(mapStateToProps, mapDispatchToProps)(ChatGroupToggleButtons)