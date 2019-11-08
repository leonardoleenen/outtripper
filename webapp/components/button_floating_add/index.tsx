import React from 'react';
import '../../styles/index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  goTo: string
}

const ButtonFloatingAdd = (props: Props) => {
  return <button className="buttonFloatingAdd" onClick={() => props['router'].push(props.goTo)}>
    <FontAwesomeIcon icon="plus" />
  </button>
}

export default ButtonFloatingAdd