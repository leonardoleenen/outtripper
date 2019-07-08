import React from 'react'

class ChatUser extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <div className="flex items-center mb-4 ">
      <div className="text-sm bg-red-500 w-full p-4 mr-4 rounded-lg" >
        <p className="text-white leading-none">{this.props['message']}</p>
        <p className="text-white">Aug 18</p>
      </div>
      <img className="w-10 h-10 rounded-full " src={this.props['urlAvatar']} />
    </div>;
  }
}

export default ChatUser