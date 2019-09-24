import React from 'react';
import "../styles/index.scss"
import SearchByText from '../components/search_by_text';

export const view = () => {
  return (<div className="body">
    <SearchByText />

    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src="http://res.cloudinary.com/dv26e3u8y/image/upload/v1502724543/Tsimane/img-2-Tsimane.jpg" alt="Sunset in the mountains" />
    </div>


  </div>)
}


class Destinations extends React.Component {
  constructor(props) {
    super(props)
  }
  render = () => view()

}
export default Destinations