import React from 'react';
import "../styles/index.scss"
import SearchByText from '../components/search_by_text';
import CardDestination from '../components/card_destination';
import ReservationNotesDialog from '../components/reservation_notes_dialog';

export const view = () => {
  return (<div>
  <div className="body mt-2">
  
    <SearchByText />
    <CardDestination destination="tsimane" description="Bolivia"/>
    
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