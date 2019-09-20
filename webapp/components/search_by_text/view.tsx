import React from 'react';
import '../../styles/index.scss';

import Search from '../../static/svg/Icon/Outline/search.svg';

export const view = () => {
  return  <div className="searchByText">
      <button>
        <img src={Search}/>
      </button>
      <input  type="text" placeholder="Search"/>
</div>
}