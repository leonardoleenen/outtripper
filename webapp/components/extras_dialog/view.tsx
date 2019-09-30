import React from 'react';
import '../../styles/index.scss';
import Minus from '../../static/svg/Icon/Outline/minus.svg';
import Plus from '../../static/svg/Icon/Outline/iconAdd.svg';

export const view = (props) => {
  return <div className="reservationNotesDialog">
    <div className="modal">
      <div className="content">
        <h1 className="pb-3">{props.title}</h1>

        <div className="extraDialogRow">
          <h3>Single Room</h3>
          <button>
            <img src={Minus} />
          </button>
          <p>3</p>
          <button>
            <img src={Plus} />
          </button>
        </div>
        <div className="extraDialogRow">
          <h3>Single Room</h3>
          <button>
            <img src={Minus} />
          </button>
          <p>3</p>
          <button>
            <img src={Plus} />
          </button>
        </div>

        <div className="buttons">
          <button >Cancel</button>
          <button >Done</button>
        </div>
      </div>
    </div>
  </div>
}