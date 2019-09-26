import React from 'react';
import '../../../styles/index.scss';
import Delete from '../../../static/svg/Icon/Outline/trash.svg';



export const view = (props) => {
  return <div className="extraListRow">
    <h3> {props.title}</h3>
    
    <button>
      <img src={Delete} />
    </button>
  </div>
}