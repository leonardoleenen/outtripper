import React from 'react'
import { connect } from 'react-redux'
import '../styles/index.css';
import { login } from '../redux/actions/users';
import Link from 'next/link';


import { dataService, OutTripperDatabase } from '../services/index';

import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd,
  IfFirebaseUnAuthed
} from "@react-firebase/auth";
import { withRouter } from 'next/router';
import { IUser } from 'services/type';


class IndexPage extends React.Component {
  state = {
    isRegistered: false
  }

  ds: OutTripperDatabase = dataService
  user: IUser

  constructor(props) {
    super(props)
  }

  async componentWillMount(){
    this.user = await this.ds.getUser()
  }

  renderBtnHome() {
    return (<Link href='/home'>
      <button className='btnStartNow'> Go! </button>
    </Link>)
  }

  renderBtnSignUp() {
    return (<Link href='/signup'>
      <button className='btnStartNow'> SignUp or Login </button>
    </Link>)
  }

  render() {
    return (
      <div className='bg-fixed h-screen' style={{ backgroundImage: 'url("/static/backgrounds/background-mobile.png")' }}>
        <content className='splashContainer '>
          <h2>Welcome to OutTripper</h2>
          <p>Improve your engagement, achive your goals and manage your booking chart  with yout team, all in one app</p>
            {this.state.isRegistered ? this.renderBtnHome() : this.renderBtnSignUp()  }
        </content>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (id, cn, photoCover) => dispatch({ ...login(id, cn, photoCover) })
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(IndexPage))


/*
 <div>
          <button
            onClick={() => {
              const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
              firebase.auth().signInWithRedirect(googleAuthProvider);
            }}
          >
            Sign In with Google
        </button>
          <button
            data-testid="signin-anon"
            onClick={() => {
              firebase.auth().signInAnonymously();
            }}
          >
            Sign In Anonymously
        </button>
          <button
            onClick={() => {
              firebase.auth().signOut();
            }}
          >
            Sign Out
        </button>*/

/*
return (
      <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
        <IfFirebaseAuthed>
          {({ user }) => {
            console.log(user)
            this.props.login(user.uid, user.displayName, user.photoURL)
            return <div>You are authenticated</div>;
          }}
        </IfFirebaseAuthed>
        <IfFirebaseUnAuthed>
          {({ isSignedIn, user, providerId }) => {
            return (
              <div className='bg-fixed h-screen' style={{ backgroundImage: 'url("/static/backgrounds/background-mobile.png")' }}>
                <content className='splashContainer '>
                  <h2>Welcome to OutTripper</h2>
                  <p>Improve your engagement, achive your goals and manage your booking chart  with yout team, all in one app</p>
              {this.state.isRegistered  }
                </content>
              </div>
            )
          }}
        </IfFirebaseUnAuthed>
      </FirebaseAuthProvider>
    )
*/