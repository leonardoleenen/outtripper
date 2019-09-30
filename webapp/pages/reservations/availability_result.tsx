import React from 'react';
import "../../styles/index.scss";
import AvailabilityResultWeek from '../../components/availability_result_week';
import ButtonToggle from '../../components/button_toggle';

export const view = () => {
  return (<div className="availabilityResult ">
    <div class="inline-flex mb-5">
      <ButtonToggle text="Programs" />
      <ButtonToggle text="2 anglers"/>
    </div>
    
    <h2>Full Week</h2>
    <AvailabilityResultWeek 
      dayStar="Oct 03th" 
      dayEnd="to Oct 12th" 
      price="$ 6,900" 
      description="10 spots"
      status="Sale"
    />
    <AvailabilityResultWeek 
      dayStar="Oct 03th" 
      dayEnd="to Oct 12th" 
      price="$ 6,900" 
      description="10 spots"
    />
    <AvailabilityResultWeek 
      dayStar="Oct 03th" 
      dayEnd="to Oct 12th" 
      price="$ 6,900" 
      description="10 spots"
    />
   
   <h2>First Half Week</h2>
   
  </div>)
}


class Events extends React.Component {
  constructor(props) {
    super(props)
  }
  render = () => view()

}
export default Events