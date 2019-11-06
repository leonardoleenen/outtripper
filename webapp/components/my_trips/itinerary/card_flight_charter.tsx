import React from 'react';
import '../../../styles/index.scss'

export interface CharterData {
    code: string
    type: string
    title: string
    date: string
    items?: Array<string>
  }
  
  
  interface Props {
    charter_data: CharterData
  }

export default (props: Props) => {
  return <div className="flight_charter_main_container m-2 rounded-b-lg">
          <header className="flight_charter_head bg-gray-300 rounded-t-lg pl-3">
              <FlightLand></FlightLand>
              <p>Flight Charter </p>
          </header>
          <article className="bg-gray-100 rounded-b-lg">
            <ul className="p-5">
            { props.charter_data.items.map( (item:any) => {
            return <li key={item.id}>{item.text}</li>
            })}
            </ul>
          </article>
          <style>
              {
                  `
                  header.flight_charter_head {
                    display: grid;
                    grid-template-columns: 10% 90%;
                  }
                  .flight_charter_main_container {
                    display: grid;
                    grid-template-rows: 27px 90%;
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                  }
                  .flight_charter_main_container li {
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 25px;
                    letter-spacing: 0.15px;
                  }
                  `
              }
          </style>
      </div>
}

const FlightLand = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="icon/action/flight_land_24px">
<path id="icon/action/flight_land_24px_2" fill-rule="evenodd" clip-rule="evenodd" d="M21.18 15.29C20.96 16.09 20.14 16.56 19.34 16.35L2.77 11.91V6.74L4.22 7.13L5.15 9.45L10.12 10.78V2.5L12.05 3.01L14.81 12.03L20.12 13.45C20.92 13.67 21.39 14.49 21.18 15.29ZM21.5 19.5H2.5V21.5H21.5V19.5Z" fill="#718096"/>
</g>
</svg>
)