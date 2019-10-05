import React from 'react';
import '../../styles/index.scss';
import User from '../../static/svg/Icon/Outline/user.svg';


 const ContactAvatar = (props) => {
  return <div className="contactAvatar">
    <div className="avatar"  >
      <img src={User} />
      <a>Change</a>
    </div>
    
  </div>
}

export default ContactAvatar