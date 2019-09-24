import React from 'react';
import '../../../styles/index.scss';
import Delete from '../../../static/svg/Icon/Outline/trash.svg';



export const view = (props) => {
  return <div className="extraListRow">
    
      <input type="text" placeholder={props.title} />
    
    
    <button>
      <img src={Delete} />
    </button>
  </div>
}