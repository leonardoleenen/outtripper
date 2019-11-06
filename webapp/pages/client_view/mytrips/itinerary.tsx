import React,{useState, useEffect} from 'react';
import {businessService} from '../../../services/index' 
import InternationalFlightCard from '../../../components/my_trips/itinerary/card_international_flight'
import ProgramHeader from '../../../components/my_trips/program_header'
import NavBar from '../../../components/my_trips/nav_bar'
import BottomBar from '../../../components/my_trips/bottom_bar'
import PreTripInfo from '../../../components/my_trips/pre_trip_info'
import Loading from '../../../components/Loading'
import {FlightData} from '../../../components/my_trips/itinerary/card_international_flight'
import moment from 'moment';

export interface Itinerary {
    date: string
    items: Array<string | number>
  }

const renderCard = (item: any) => {

  // TODO: Complete with all pobilitities
  
  switch (item.type){
    case 'flight':
      return <InternationalFlightCard key={item.code} label="Flight to Buenos Aires" flight_data={item}></InternationalFlightCard>
    default: 
      return <p> Definilo puto! {item.type}</p>
  }
  
}

export default () => {
  const bs = businessService
  const [ itinerary, setItinerary] = useState([])
  const [ flightList, setFlightList] = useState([])
  const [ program, setProgram] = useState([])
  useEffect( () => {
      const fetchData = async () => {
          const resolve = await  bs.getClientTrip(null)
          setItinerary(resolve[0]['itinerary'])
          setProgram(resolve[0]['program'])
      }
      
      fetchData()
      
  }, []) //usar el use effect para trabajar el momento del load de la pagina

  if (itinerary.length == 0) return <Loading></Loading>
  
  //<InternationalFlightCard key={flight.code} label="Flight to Buenos Aires" flight_data={flight}></InternationalFlightCard>
  debugger
  return <div>
      <ProgramHeader program={program}></ProgramHeader>
      <NavBar></NavBar>
      <PreTripInfo></PreTripInfo>
      { itinerary.map((e: any) => ( // First map group by date 
        <div>
          <p>{moment(e.date).format('Do MMM YYYY')}</p> 
          { e.items.map( (e:any) => { // Second map iterate all elements 
            return renderCard(e) // Call a function for render
          })}
      </div>))}
      <BottomBar></BottomBar>
  </div>
}