import React from 'react'
import NoEventSVG from '../../static/svg/noEvents.svg';
import BottomBar from '../../components/bottomBar';

import '../../styles/index.scss';

class NoEvent extends React.Component {

  constructor(props) {
    super(props)
  }

  
  render() {
    return <div className="noEvents bg-scroll h-screen">
      <label>No events for now</label>
      <img src={NoEventSVG}/>
      <article>
        <p>There are not event for the moment, but don't rush, stay hungry and keep moving. Allways betters things are coming soon :-) </p>
        <p>May be you want to make a reservation. In this case click here</p>
      </article>
      <BottomBar/>
    </div>
  }

}

export default NoEvent