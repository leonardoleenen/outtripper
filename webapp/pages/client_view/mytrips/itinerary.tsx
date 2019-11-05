import React,{useState, useEffect} from 'react';
import {businessService} from '../../../services/index' 
import InternationalFlightCard from '../../../components/my_trips/itinerary/card_international_flight'
import ProgramHeader from '../../../components/my_trips/program_header'
import NavBar from '../../../components/my_trips/nav_bar'
import BottomBar from '../../../components/my_trips/bottom_bar'
import PreTripInfo from '../../../components/my_trips/pre_trip_info'
import Loading from '../../../components/Loading'
import {FlightData} from '../../../components/my_trips/itinerary/card_international_flight'

export interface Itinerary {
    date: string
    items: Array<string | number>
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
  
  return <div>
      <ProgramHeader program={program}></ProgramHeader>
      <NavBar></NavBar>
      <PreTripInfo></PreTripInfo>
      {itinerary.items.map((flight: FlightData) => (<InternationalFlightCard key={flight.code} label="Flight to Buenos Aires" flight_data={flight}></InternationalFlightCard>))}
      <BottomBar></BottomBar>
  </div>
}