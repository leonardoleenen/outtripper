import React from 'react';
import '../../styles/index.scss';

export const view = (props) => {
  return <button class=" buttonPrimary">
  {props.text}
</button>
}