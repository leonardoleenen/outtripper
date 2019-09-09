
import React from 'react';
import {connect} from 'react-redux';
import '../styles/index.css';
import firebase from '../services/index'
import { dataService, OutTripperDatabase } from '../services/index';
import { withRouter } from 'next/router';
import { User } from '../services/type';
import Loading from '../components/Loading';
import { initSignUp } from '../redux/actions/users';
import {signUpProcess} from '../services/index';
import {RenderEngine, ProcessNode} from '../services/renderEngine';


class SignUpOld extends React.Component {

  state = {
    isLoading: true,
    currentStage: null,
    process: null, 
    isWriting: false 
  }

  ds: OutTripperDatabase = dataService
  sp = signUpProcess
  async componentDidMount() {
    let {chatTrace, engine} = this.props 

    const result = await firebase.auth().getRedirectResult()
    if (result.credential) {
      if  (!await this.ds.getUser()) {
        dataService.setUser(new User(result.user.uid,result.user.displayName,result.user.photoURL))
      }
      this.setState({isLoading:false})
      if (!engine) 
        engine = new RenderEngine(this.sp)
      
      chatTrace.push( engine.renderNode(this.sp[engine.currentStage] as ProcessNode,{userName: 'Travis'} as any))
      engine.move()
      chatTrace.push( engine.renderNode(this.sp[engine.currentStage] as ProcessNode,null))
      this.props['initSignUp'](
        result.user.uid,
        result.user.displayName,
        result.user.photoURL, 
        signUpProcess, 
        engine)
    }else {
      const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(googleAuthProvider);
    }
  }
  
  handleIsWriting() {
    this.setState({isWriting:true})
  }

  render() {
    const engine:RenderEngine = this.props['engine']
    const chatTrace:[]  = this.props['chatTrace']

    if (this.state.isLoading)
      return(<Loading></Loading>)
  
  
    if (engine){
      const currentComand = signUpProcess[engine.currentStage].inputCommand &&   engine.renderNode(signUpProcess[engine.currentStage].inputCommand as ProcessNode,null)
      const command  = currentComand || React.createElement('span',null,null)
      const rootDiv = React.createElement('div', {className:'p-2'},[[...chatTrace],command])
      return rootDiv
    }

    return <div></div>
  }
}

const mapStateToProps = state => {
  return {
    contact: state.signupProcess.userData,
    engine: state.signupProcess.engine,
    chatTrace: state.signupProcess.chatTrace
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initSignUp: (id,cn,photoCover,process,engine) => dispatch(initSignUp(id,cn,photoCover,process,engine))
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SignUpOld))
