/*import React from 'react'

import ChatLoading from '../components/ChatLoading';

class Test extends React.Component {
    render() {
        return(
            <ChatLoading></ChatLoading>
        ) 
    }
}

export default Test*/

import {connect} from 'react-redux';
import { useRouter } from 'next/router'

const  Test = (props) =>  {
    
    const router = useRouter()
    const { month } = router.query
    console.log(month)
    
    return(<div>
        es test {props.isWritting }
    </div>) 
}

const mapStateToProps = state => {
    return {
        isWriting : state
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Test)