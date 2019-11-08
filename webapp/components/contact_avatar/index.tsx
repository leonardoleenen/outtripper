import React from 'react';
import '../../styles/index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


 const ContactAvatar = () => {
  return <div className="contactAvatar">
    <div className="avatar"  >
    <FontAwesomeIcon icon="user" className="icon" />
      <a>Change</a>
    </div>
    
  </div>
}

export default ContactAvatar