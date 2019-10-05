import React from 'react';
import '../../styles/index.scss';
import {withRouter} from 'next/router'

export const ButtonPrimary = (props) => {
  return <button className=" buttonPrimary" onClick={ () => {
    props.execute()
    if (props.goTo)
      props.router.push(props.goTo)
  }}>
  {props.text}
</button>
}
export default withRouter(ButtonPrimary)