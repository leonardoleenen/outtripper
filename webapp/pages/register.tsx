import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'next/router';
import '../styles/index.scss';
import { getDialogFlowRegisterUrl, DIALOGFLOW_REGISTER_AGENT_API_KEY } from '../config'
import uuidv4 from 'uuid/v4'
import axios, { AxiosRequestConfig } from 'axios'


class RegisterPage extends React.Component {

  componentWillMount() {
    axios.defaults.headers.common['Authorization'] =  `Bearer ${DIALOGFLOW_REGISTER_AGENT_API_KEY}`
    axios.defaults.headers.post['Content-Type'] = 'application/json';

    axios.post(
      'https://dialogflow.googleapis.com/v2/projects/outtripper-register-evwgya/agent/sessions/12345:detectIntent',
      {
        "query_input": {
          "text": {
            "text": "hi",
            "language_code": "en-US"
          }
        }
      })
      .then(result => console.log(result))
      .catch(err => console.log(err))

  }


  render() {
    return (<div>This is signup</div>)
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterPage))

