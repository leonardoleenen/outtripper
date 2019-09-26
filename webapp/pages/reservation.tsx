import React from 'react';
import "../styles/index.scss"
import Head from 'next/head'
import Navigation from '../components/navigation';
import CardReservationOwner from '../components/card_reservation_owner';
import ReservationGuestList from '../components/reservation_guest_list';
import ExtraList from '../components/extra_list';
import InputText from '../components/input_text';

export const view = () => {
  return (<div>
    <Head>
      <meta name="viewport" content="width=device-width, user-scalable=no" />
    </Head>
    <div className="headerGradient">
      <Navigation title="Jurassic Lake Weekly Program, Oct 13 2019" />
      <h1>$6,900</h1>
    </div>

    <div className="body">
      <CardReservationOwner chip="Guest" />
      <InputText label="Booking label" />
      <ReservationGuestList />
      <ExtraList title="Extras" />
      <InputText label="terms" required/>

   
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