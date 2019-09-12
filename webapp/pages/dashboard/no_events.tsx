import React from 'react'
import Home from '../../static/svg/Icon/Outline/home.svg';
import Timer from '../../static/svg/Icon/Outline/timer.svg';
import Clipboard from '../../static/svg/Icon/Outline/clipboard.svg';
import Bell from '../../static/svg/Icon/Outline/bell.svg';
import Calendar from '../../static/svg/Icon/Outline/calendar.svg';
import MoreHorizontal from '../../static/svg/Icon/Outline/more-horizontal.svg';
import NoEventSVG from '../../static/svg/noEvents.svg';

import '../../styles/index.scss';

class NoEvent extends React.Component {

  constructor(props) {
    super(props)
  }

  bottomBar() {
    return <div className="bottomBar absolute bottom-0 left-0 ">
      <div className="buttonBottomBar">
        <img src={Home} />
        <p> Home</p>
      </div>
      <div className="buttonBottomBar">
        <img src={Timer} />
        <p> Availability</p>
      </div>
      <div className="buttonBottomBar">
        <img src={Clipboard} />
        <p>Agenda</p>
      </div>
      <div className="buttonBottomBar">
        <img src={Bell} />
        <p>Notifications</p>
      </div>
      <div className="buttonBottomBar">
        <img src={Calendar} />
        <p>Chart</p>
      </div>
      <div className="buttonBottomBar">
        <img src={MoreHorizontal} />
        <p>more</p>
      </div>
    </div>
  }
  render() {
    return <div className="noEvents bg-scroll h-screen">
      <label>No events for now</label>
      <img src={NoEventSVG}/>
      <article>
        <p>There are not event for the moment, but don't rush, stay hungry and keep moving. Allways betters things are coming soon :-) </p>
        <p>May be you want to make a reservation. In this case click here</p>
      </article>
      {this.bottomBar()}
    </div>
  }

}

export default NoEvent