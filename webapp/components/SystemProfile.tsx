import React from 'react'
import '../styles/index.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


interface Props {
  userName: string 
}

class SystemProfile extends React.Component<Props> {

  userName:string 
  
  render() {
    return <div className="max-w-sm rounded overflow-hidden mt-24  m-auto mb-24">
      <img className="w-32 h-32 rounded-full mb-2  shadow-xl m-auto" src="/src/static/wimo.jpg" alt="" />
      <div className="px-6 py-4 text-center">
        <div className=" text-xl mb-2">{this.props.userName}</div>
        <div className="flex text-center mb-2 content-center items-center justify-center" >
          <FontAwesomeIcon icon="star" className="icon" />
          <FontAwesomeIcon icon="star" className="icon" />
          <FontAwesomeIcon icon="star" className="icon" />
          <FontAwesomeIcon icon="star" className="icon" />
          <FontAwesomeIcon icon="star" className="icon" />
        </div>
        <p className="text-gray-700 text-base">Your personal assistant</p>
      </div>
    </div>;
  }
}

export default SystemProfile