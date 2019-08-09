import React from 'react'
import '../styles/index.css';
import Star from '../static/svg/star.svg'
import StarFill from '../static/svg/star_fill.svg'


class SystemProfile extends React.Component {

  userName:string 
  
  render() {
    return <div className="max-w-sm rounded overflow-hidden mt-24  m-auto mb-24">
      <img className="w-32 h-32 rounded-full mb-2  shadow-xl m-auto" src="/src/static/wimo.jpg" alt="" />
      <div className="px-6 py-4 text-center">
        <div className=" text-xl mb-2">{this.props.userName}</div>
        <div className="flex text-center mb-2 content-center items-center justify-center" >
          <img src={Star} className="w-4 h-4 text-red-500 mr-2 fill-current " />
          <img src={Star} className="w-4 h-4 text-red-500 mr-2" />
          <img src={Star} className="w-4 h-4 text-red-500 mr-2" />

          <img src={StarFill} className="w-4 h-4 text-red-500 mr-2" />
          <img src={StarFill} className="w-4 h-4 text-red-500 mr-2 " />
        </div>
        <p className="text-gray-700 text-base">Your personal assistant</p>
      </div>
    </div>;
  }
}

export default SystemProfile