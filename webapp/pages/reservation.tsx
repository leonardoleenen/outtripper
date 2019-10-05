import React from 'react';
import "../styles/index.scss"
import Head from 'next/head'
import Navigation from '../components/navigation';
import CardReservationOwner from '../components/card_reservation_owner';
import ReservationGuestList from '../components/reservation_guest_list';
import ExtraList from '../components/extra_list';
import InputText from '../components/input_text';
import {  useSelector, useDispatch  } from 'react-redux'
import { IDateAvailable, IProgram } from 'services/type';
import _ from 'underscore'
import moment from 'moment'
//import ExtrasDialog from '../components/extras_dialog';

/*
export const view = () => {
  return (<div>
    <Head>
      <meta name="viewport" content="width=device-width, user-scalable=no" />
    </Head>
    <ExtrasDialog title="Extras"  />
    <div className="headerGradient">
      <Navigation title="Jurassic Lake Weekly Program, Oct 13 2019" />
      <h1>$6,900</h1>
      <div className="notes"> Confirmed</div>
    </div>

    <div className="body">
      <CardReservationOwner chip="Guest" />
      <InputText label="Booking label" />
      <ReservationGuestList />
      <ExtraList title="Extras" />
      <InputText label="terms" required />
    </div>

  </div>)
}


class Reservation extends React.Component {
  constructor(props) {
    super(props)
  }
  render = () => view()

}*/

const Reservation = () => {

  const dateSelected: IDateAvailable = useSelector(state => state.reservation.availableDateSelected)
  const programs: IDateAvailable = useSelector(state => state.reservation.programs)
  
  const program : IProgram = _.filter( programs, (p:IProgram) => p.id === dateSelected.program_id)[0] 
  

  return (<div>
    <Head>
      <meta name="viewport" content="width=device-width, user-scalable=no" />
    </Head>
    
    <div className="headerGradient">
      <Navigation title={`${program.name} from ${moment(dateSelected.start_date).format('MMM Do')}`} />
      <h1>{dateSelected.price}</h1>
      <div className="notes"> Confirmed</div>
    </div>

    <div className="body">
      <CardReservationOwner chip="Guest" />
      <InputText label="Booking label" />
      <ReservationGuestList />
      <ExtraList title="Extras" />
      <InputText label="terms" required />
    </div>

  </div>)
}
export default Reservation