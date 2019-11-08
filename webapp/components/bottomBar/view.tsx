import React from 'react'; 
import '../../styles/index.scss';

/*
import Home from '../../static/svg/Icon/Outline/home.svg';
import Timer from '../../static/svg/Icon/Outline/timer.svg';
import Clipboard from '../../static/svg/Icon/Outline/clipboard.svg';
import Bell from '../../static/svg/Icon/Outline/bell.svg';
import Calendar from '../../static/svg/Icon/Outline/calendar.svg';
import MoreHorizontal from '../../static/svg/Icon/Outline/more-horizontal.svg';*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export const view = () => {
    return <div className="bottomBar   ">
      <div className="buttonBottomBar">
      <FontAwesomeIcon icon="home" />
        <p> Home</p>
      </div>
      <div className="buttonBottomBar">
      <FontAwesomeIcon icon="clock" />
        <p> Availability</p>
      </div>
      <div className="buttonBottomBar">
      <FontAwesomeIcon icon="clipboard" />
        <p>Agenda</p>
      </div>
      <div className="buttonBottomBar">
      <FontAwesomeIcon icon="bell" />
        <p>Notifications</p>
      </div>
      <div className="buttonBottomBar">
      <FontAwesomeIcon icon="calendar" />
        <p>Chart</p>
      </div>
      <div className="buttonBottomBar">
      <FontAwesomeIcon icon="ellipsis-v" />
        <p>more</p>
      </div>
    </div>
}