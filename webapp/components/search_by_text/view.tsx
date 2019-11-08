import React from 'react';
import '../../styles/index.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const view = (callBack) => {
  return <div className="searchByText">
    <button>
      <FontAwesomeIcon icon="search" className="icon" />
    </button>
    <input type="text" placeholder="Search" onKeyUp={e => callBack(e.target['value'])} />
  </div>
}