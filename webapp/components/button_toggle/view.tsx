import React from 'react';
import '../../styles/index.scss';

export const view = (props) => {
  return <button className="buttonToggle buttonToggleActive">
  {props.text}
</button>
}