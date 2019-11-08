import React from 'react';
import '../../styles/index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const view = (props) => {
  return <div className="destinations">
  <img className="w-full" src="https://res.cloudinary.com/dv26e3u8y/image/upload/v1502296865/Tsimane/photo3-fishing.jpg" />
  <div className="destinationsInfo">
    
    <FontAwesomeIcon icon="map-marker-alt" className="icon" />
    <div>
      <h3 >{props.destination}</h3>
      <p>{props.description}</p>
    </div>
    <FontAwesomeIcon icon="heart" className="icon" />

  </div>
</div>
}