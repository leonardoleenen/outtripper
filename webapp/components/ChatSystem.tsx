import React from 'react'
import  '../styles/index.css';


class ChatSystem extends React.Component {

    render() {
        return <div className="flex items-center mb-4 ">
        <img className="w-10 h-10 rounded-full mr-4" src={this.props.urlAvatar}/>
        <div className="text-sm bg-gray-300 w-full p-4 rounded-lg" >
          <p className="text-gray-900 leading-none">{this.props.message}</p>
          <p className="text-gray-600">Aug 18</p>
        </div>
      </div>;
      }
}

export default ChatSystem