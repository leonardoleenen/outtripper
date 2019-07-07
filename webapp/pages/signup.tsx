
import React from 'react';
import {connect} from 'react-redux';
import '../styles/index.css';
import firebase from '../services/index'
import { dataService, OutTripperDatabase } from '../services/index';
import { withRouter } from 'next/router';
import { User } from '../services/type';
import Loading from '../components/Loading';
import SystemProfile from '../components/SystemProfile';
import { initSignUp } from '../redux/actions/users';
import {signUpProcess} from '../services/index';
import {RenderEngine} from '../services/renderEngine';


class SignUp extends React.Component {

  state = {
    isLoading: true,
    currentStage: null,
    process: null, 
    chatTrace: []
  }

  ds: OutTripperDatabase = dataService
  engine:RenderEngine = new RenderEngine(signUpProcess)

  async componentDidMount() {

    const result = await firebase.auth().getRedirectResult()
    if (result.credential) {
      if  (!await this.ds.getUser()) {
        dataService.setUser(new User(result.user.uid,result.user.displayName,result.user.photoURL))
      }
      this.setState({isLoading:false})
      this.props.initSignUp(result.user.uid,result.user.displayName,result.user.photoURL, signUpProcess, signUpProcess.inputOperationName)
      let ct = this.state.chatTrace
      ct.push( this.engine.renderNode())
      this.setState({
        process: signUpProcess, 
        currentStage: signUpProcess.inputOperationName,
        chatTrace: ct
      })
     
          
    }else {
      const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(googleAuthProvider);
    }

  }

  render() {
    if (this.state.isLoading)
      return(<Loading></Loading>)

    const rootDiv = React.createElement('div', {className:'p-2'},this.state.chatTrace)
    return rootDiv 

  }
}

const mapStateToProps = state => {
  return {
    contact: state.signupProcess.userData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initSignUp: (id,cn,photoCover,process,currentState) => dispatch(initSignUp(id,cn,photoCover,process,currentState))
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SignUp))


/* <div className='p-2 ' id='chatPanel'>
       
        <SystemProfile userName='Leonardo Leenen'></SystemProfile>
        <ChatSystem urlAvatar="https://i.vimeocdn.com/portrait/11968448_640x640" message={`Welcome! My Name is Daniel and I will assist you in your signup process. Let's go!. What is your operation Name?  `}></ChatSystem>
      </div>*/