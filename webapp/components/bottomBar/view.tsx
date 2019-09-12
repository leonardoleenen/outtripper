import React from 'react'; 
import '../../styles/index.scss';
import Home from '../../static/svg/Icon/Outline/home.svg';
import Timer from '../../static/svg/Icon/Outline/timer.svg';
import Clipboard from '../../static/svg/Icon/Outline/clipboard.svg';
import Bell from '../../static/svg/Icon/Outline/bell.svg';
import Calendar from '../../static/svg/Icon/Outline/calendar.svg';
import MoreHorizontal from '../../static/svg/Icon/Outline/more-horizontal.svg';

export const view = () => {
    return <div className="bottomBar  absolute bottom-0 left-0 mb-2 ">
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