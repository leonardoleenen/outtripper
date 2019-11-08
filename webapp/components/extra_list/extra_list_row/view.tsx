import React from 'react';
import '../../../styles/index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export const view = (props) => {
  return <div className="extraListRow">
    <h3> {props.title}</h3>
    
    <button>
      <FontAwesomeIcon icon="trash" />
    </button>
  </div>
}