import React from 'react';
import "../styles/index.scss"
import Navigation from '../components/navigation';
import CardReservationOwner from '../components/card_reservation_owner';
import ReservationGuestList from '../components/reservation_guest_list';
import ExtraList from '../components/extra_list';

export const view = () => {
  return (<div>
    <div className="headerGradient">
      <Navigation title="Jurassic Lake Weekly Program, Oct 13 2019" />
      <h1>$6,900</h1>
    </div>

    <div className="body">
      <CardReservationOwner chip="Guest" />
      <ReservationGuestList />
      <ExtraList title="Extras" />

    </div>

  </div>)
}


class Reservation extends React.Component {
  constructor(props) {
    super(props)
  }
  render = () => view()

}
export default Reservation