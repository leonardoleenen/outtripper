import React from 'react';
import '../../styles/index.scss';
import InputText from '../input_text'

export const view = (props) => {
  return <div className="reservationNotesDialog">
    <div className="modal">
      <div className="content">
        <h1>{props.title}</h1>
        <h6>{props.description}</h6>
        <InputText label="Description" />
       
        <div className="buttons">
          <button >Cancel</button>
          <button >Done</button>
        </div>
      </div>
    </div>
  </div>
}