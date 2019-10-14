import React from 'react';
import CalendarAvailability from '../components/calendarAvailability';
import '../styles/index.scss';
import { connect } from 'react-redux';
import BottomBar from '../components/bottomBar'
import Chip from '../components/chip';
import ArrowLeft from '../static/svg/Icon/Outline/arrow-ios-left.svg'
import ArrowRight from '../static/svg/Icon/Outline/arrow-ios-right.svg'


const occupation = [
  {
    day: 1,
    reserved: 4,
    limit: 0
  },
  {
    day: 2,
    reserved: 0,
    limit: 10
  },
  {
    day: 3,
    reserved: 4,
    limit: 10
  },
  {
    day: 4,
    reserved: 4,
    limit: 10
  },
  {
    day: 5,
    reserved: 4,
    limit: 10
  },
  {
    day: 6,
    reserved: 4,
    limit: 10
  },
  {
    day: 7,
    reserved: 4,
    limit: 10
  },
  {
    day: 8,
    reserved: 4,
    limit: 10
  },
  {
    day: 9,
    reserved: 4,
    limit: 10
  },
  {
    day: 10,
    reserved: 4,
    limit: 10
  },
  {
    day: 11,
    reserved: 4,
    limit: 10
  },
  {
    day: 12,
    reserved: 4,
    limit: 10
  },
  {
    day: 13,
    reserved: 4,
    limit: 10
  },
  {
    day: 14,
    reserved: 4,
    limit: 10
  },
  {
    day: 15,
    reserved: 4,
    limit: 10
  },
  {
    day: 16,
    reserved: 4,
    limit: 10
  },
  {
    day: 17,
    reserved: 4,
    limit: 10
  },
  {
    day: 18,
    reserved: 10,
    limit: 10
  },
  {
    day: 19,
    reserved: 10,
    limit: 10
  },
  {
    day: 20,
    reserved: 10,
    limit: 10
  },
  {
    day: 21,
    reserved: 4,
    limit: 10
  },
  {
    day: 22,
    reserved: 4,
    limit: 10
  },
  {
    day: 23,
    reserved: 7,
    limit: 10
  },
  {
    day: 24,
    reserved: 10,
    limit: 10
  },
  {
    day: 25,
    reserved: 10,
    limit: 10
  },
  {
    day: 26,
    reserved: 4,
    limit: 0
  },
  {
    day: 27,
    reserved: 4,
    limit: 0
  },
  {
    day: 28,
    reserved: 4,
    limit: 0
  }
]


class Availability extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<div className='body availabilty'>
      <header> 
        <div>
          <div><img src={ArrowLeft}/></div>
          <h2> 2019</h2>
          <div><img src={ArrowRight}/></div>
        </div>
        <div>
        <Chip  text='Empty' color='green'/>
        <Chip  text='5-9' color='yellow'/>
        <Chip  text='1-4' color='orange'/>
        <Chip  text='Full' color='red'/>
        

        </div>
      </header>
      <article > <CalendarAvailability
        month={1}
        limit={10}
        year={2019}
        occupation={occupation}
      />

        <CalendarAvailability
          month={2}
          limit={10}
          year={2019}
          occupation={occupation}
        />

        <CalendarAvailability
          month={3}
          limit={10}
          year={2019}
          occupation={occupation}
        />
        <CalendarAvailability
          month={4}
          limit={10}
          year={2019}
          occupation={occupation}
        />

      </article>
      <BottomBar />
    </div>)
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Availability)