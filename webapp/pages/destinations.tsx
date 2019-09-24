import React from 'react';
import "../styles/index.scss"
import SearchByText from '../components/search_by_text';
import Destination from '../static/svg/Icon/Outline/destination.svg';
import Heart from '../static/svg/Icon/Outline/heartLine.svg';
import CardDestination from '../components/card_destination';

export const view = () => {
  return (<div className="body mt-2">
    <SearchByText />
    <CardDestination destination="tsimane" description="Bolivia"/>
    

 
   


  </div>)
}


class Destinations extends React.Component {
  constructor(props) {
    super(props)
  }
  render = () => view()

}
export default Destinations