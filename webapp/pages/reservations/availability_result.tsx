import React, { useEffect, useState } from 'react';
import "../../styles/index.scss";
import AvailabilityResultWeek from '../../components/availability_result_week';
import ButtonToggle from '../../components/button_toggle';
import {  useSelector, useDispatch  } from 'react-redux'
import { useRouter } from 'next/router'
import { setMonthFilter } from '../../redux/actions/reservation';
import { IDateAvailable } from 'services/type';
import Loading from '../../components/Loading';


const AvailabilityResult = () => {
  
  const route = useRouter()
  const {month} = route.query
  const dispatch = useDispatch()
  const [isLoading, setLoading] = useState(true)

  
  useEffect ( () => {
    const  fetchAvailability = async() => {
      dispatch(setMonthFilter( parseInt(month.toString())))
    }

    fetchAvailability()
    setLoading(false)
    

  },[]) 

  const availability = useSelector(state => state.reservation.queryResult)
  

  if (isLoading)
    return <Loading></Loading>

  return (<div className="availabilityResult ">
      <div className="inline-flex mb-5">
        <ButtonToggle text="Programs" />
        <ButtonToggle text="2 anglers" />
      </div>

      <h2>Full Week</h2>
      {availability.map( (date:IDateAvailable) => (
        <AvailabilityResultWeek
          key={date['_id']}
          date= {date}
          startDay={date.start_date}
          endDay={date.end_date}
          price={date.price}
          description={`${ date.program_limit - date.reserved } free spots`}
          status="Sale"
          occupationLevel = {date.program_limit / date.reserved}
          isOnSale={date.is_on_sale}
      />
      ))}

      
      <h2>First Half Week</h2>

    </div>)
}


const mapStateToProps = state => {
  
  return {
   
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setMonth: (month: number): Promise<any> => dispatch(setMonthFilter(month))
  }
}



// export default connect(mapStateToProps, mapDispatchToProps)(AvailabilityResult)

export default AvailabilityResult