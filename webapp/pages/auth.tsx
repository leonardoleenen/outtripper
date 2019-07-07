import React from 'react'
import {connect} from 'react-redux'

class Auth extends React.Component {

    render() {
        return(<div>Autenticando</div>)
    }
}

export default connect()(Auth)