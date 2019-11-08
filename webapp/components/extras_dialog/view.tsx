import React from 'react';
import '../../styles/index.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const view = (props) => {
  return <div className="reservationNotesDialog">
    <div className="modal">
      <div className="content">
        <h1 className="pb-3">{props.title}</h1>

        <div className="extraDialogRow">
          <h3>Single Room</h3>
          <button>
          <FontAwesomeIcon icon="minus" />
          </button>
          <p>3</p>
          <button>
            <FontAwesomeIcon icon="plus" />
          </button>
        </div>
        <div className="extraDialogRow">
          <h3>Single Room</h3>
          <button>
          <FontAwesomeIcon icon="minus" />
          </button>
          <p>3</p>
          <button>
            <FontAwesomeIcon icon="plus" />
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