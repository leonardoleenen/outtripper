import React from 'react';
import "../../styles/index.scss"
import BottomBar from '../../components/bottomBar';
import CardNote from '../../components/card_note';
import CardEvent from '../../components/card_event'

export const view = () => {
  return (<div className="mb-6">
   <CardNote/>
   <h2>Today</h2>
   <CardEvent/>
   <CardEvent/>
 
  
    <BottomBar />

  </div>)
}


class Events extends React.Component {
  constructor(props) {
    super(props)
  }
  render = () => view()

}
export default Events