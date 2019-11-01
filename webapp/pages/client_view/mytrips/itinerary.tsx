import React,{useState, useEffect} from 'react';
import axios from 'axios';
import InternationalFlightCard from '../../../components/itinerary/card_international_flight'
import Loading from '../../../components/Loading'
import {FlightData} from '../../../components/itinerary/card_international_flight'

export default () => {
    const [ flightList, setFlightList] = useState([])
    useEffect( () => {
        const fetchFlights = async () => {
            const resolve = await axios.get('https://api.myjson.com/bins/q6kno') as any
            setFlightList(resolve.data)
        }
        fetchFlights()
    }, [])

    if (flightList.length == 0) return <Loading></Loading>
    
    return <div>
        {flightList.map((flight: FlightData) => (<InternationalFlightCard key={flight.flight_number} label="Flight to Buenos Aires" flight_data={flight}></InternationalFlightCard>))}
    </div>
}