import React from 'react';
import "../styles/index.scss"
import SuccessImg from '../static/backgrounds/success.png';


export const view = () => {
  return (<div className="success body">
    <h3> Well Done!! Your program has been created </h3>
    <img src={SuccessImg}/>
    <p>If you want you can set up your cover photos, a lil 
      description and restrictions dates. Also you can set up diferents range price</p>
      <div className="buttons">
       <button className="buttonLeft"> I do this later</button>
       <button className="buttonRight"> Yes, Let's go! </button>
      </div>

  </div>)
}


class Success extends React.Component {
  constructor(props) {
    super(props)
  }
  render = () => view()

}
export default Success