import React,{useState, useEffect} from 'react';
import {businessService} from '../../../services/index' 
import InternationalFlightCard from '../../../components/my_trips/itinerary/card_international_flight'
import FlightCharterCard from '../../../components/my_trips/itinerary/card_flight_charter'
import LodgeActivitiesCard from '../../../components/my_trips/itinerary/card_lodge_activities'
import GroundTransferCard from '../../../components/my_trips/itinerary/card_ground_transfer'
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
  switch (item.type){
    case 'flight':
      return <InternationalFlightCard key={item.code} label="Flight to Buenos Aires" flight_data={item}></InternationalFlightCard>
    case 'ground_transfer':
        return <GroundTransferCard key={item.code} transfer_data={item}></GroundTransferCard>
    case 'flight_charter':
      return <FlightCharterCard key={item.code} charter_data={item}></FlightCharterCard>
    case 'lodge_activities':
      return <LodgeActivitiesCard key={item.code} lodge_activities_data={item}></LodgeActivitiesCard>
  }
}

export default () => {
  const bs = businessService
  const [ itinerary, setItinerary] = useState([])
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
      { itinerary.map((e: any) => ( // First map group by date 
        <div key={e.code}>
          <p key={e.code}>{moment(e.date).format('Do MMM YYYY')}</p> 
          { e.items.map( (e:any) => { // Second map iterate all elements 
            return renderCard(e) // Call a function for render
          })}
      </div>))}
      <BottomBar></BottomBar>
  </div>
}