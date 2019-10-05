import React from 'react';
import '../../styles/index.scss';
import Add from '../../static/svg/Icon/Outline/plus.svg';
import  {withRouter} from 'next/router';

interface Props {
  goTo: string
}

const ButtonFloatingAdd = (props: Props) => {
  return <button className="buttonFloatingAdd" onClick={() => props['router'].push(props.goTo)}>
    <img src={Add} />
  </button>
}

export default withRouter(ButtonFloatingAdd)