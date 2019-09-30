import React from 'react';
import '../../styles/index.scss';

export const view = (props) => {
  return <button class="buttonToggle buttonToggleActive">
  {props.text}
</button>
}