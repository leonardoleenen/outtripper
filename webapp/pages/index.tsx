import React from 'react'
import { connect } from 'react-redux'
import '../styles/index.scss';
import { login } from '../redux/actions/users';
import Link from 'next/link';
import Google from '../static/svg/Icon/Outline/google_white.svg';
import Twitter from '../static/svg/Icon/Outline/twitter_white.svg';
import Facebook from '../static/svg/Icon/Outline/facebook_white.svg';
import LinkedIn from '../static/svg/Icon/Outline/linkedin_white.svg';

import {  BusinessService, businessService } from '../services/index';


import { withRouter } from 'next/router';
import { IUser } from 'services/type';

class IndexPage extends React.Component {
  state = {
    isRegistered: false
  }

  // ds: OutTripperDatabase = dataService
  user: IUser
  bs: BusinessService = businessService

  constructor(props) {
    super(props)
    
  }

  async componentWillMount() {
    // this.user = await this.ds.getUser()
    const validToken = await this.bs.getValidToken()

    if (validToken)
      this.props['router'].push('/dashboard/no_events')
  }

  
  componentDidMount() {
    window['connector'] = this.bs
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
      <div className="m-auto bg-gradient"> 
        <div className="login h-screen  max-w-md min-w-sm">
          <label className="m-auto">
            OutTripper
        </label>
        <span className="text-white font-light w-10/12 m-auto text-center text-sm tracking-wider" >Please,  choose your favorite social network to signin</span>
        <div className="loginIcons w-11/12 m-auto ">
            <img className="h-40px w-40px m-auto" src={Google}/>
            <img className="h-40px w-40px m-auto" src={Facebook}/>
            <img className="h-40px w-40px m-auto" src={Twitter}/>
            <img className="h-40px w-40px m-auto" src={LinkedIn}/>
            </div>
            <footer className='w-11/12 flex m-auto'>
              <input type="checkbox" className="mx-2"/>
              <div className="text-white font-light w-10/12text-center text-xs tracking-wider" >I have read the terms and conditions. I agree and give my consent</div>
          </footer>
        </div>
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

