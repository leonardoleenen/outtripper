import React from 'react';
import '../../styles/index.scss';

export const view = (props) => {
  return <div className="reservationNotesDialog">
    <div className="modal">
      <div className="content">
        <h1>{props.title}</h1>
        
       
        <div className="buttons">
          <button >Cancel</button>
          <button >Done</button>
        </div>
      </div>
    </div>
  </div>
}