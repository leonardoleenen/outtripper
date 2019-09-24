import React from 'react';
import '../../../styles/index.scss';
import GiftCard from '../../../static/svg/Icon/Outline/giftCard.svg';
import Delete from '../../../static/svg/Icon/Outline/trash.svg';



export const view = (props) => {
  return <div className="reservationGuestRow">
    <div>
      <h3>{props.title}</h3>
      <p>{props.extra}</p>
    </div>
    <button>
      <img src={GiftCard} />
    </button>
    <button>
      <img src={Delete} />
    </button>
  </div>
}