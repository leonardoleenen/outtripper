import React from 'react';
import '../../styles/index.scss';

import Destination from '../../static/svg/Icon/Outline/destination.svg';
import Heart from '../../static/svg/Icon/Outline/heartLine.svg';

export const view = (props) => {
  return <div className="destinations">
  <img className="w-full" src="https://res.cloudinary.com/dv26e3u8y/image/upload/v1502296865/Tsimane/photo3-fishing.jpg" />
  <div className="destinationsInfo">
    <img src={Destination} className="icon" />
    <div>
      <h3 >{props.destination}</h3>
      <p>{props.description}</p>
    </div>
    <img src={Heart} className="icon" />

  </div>
</div>
}