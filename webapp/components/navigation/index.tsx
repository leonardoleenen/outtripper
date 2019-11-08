import React from 'react';
import '../../styles/index.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


interface Props {
  title: string 
}

const NavigationBar = (props: Props) => {
  return  <div className="navigation">
      <div><FontAwesomeIcon icon="user" /></div>
      <h2>{props.title}</h2>
      <div></div>
</div>
}

export default NavigationBar