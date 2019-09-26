import React from 'react';
import "../styles/index.scss"
import SearchByText from '../components/search_by_text';
import CardDestination from '../components/card_destination';
import ExtrasDialog from '../components/extras_dialog'
export const view = () => {
  return (<div className="destinationsContent">
    <div className="body pt-2">

      <SearchByText />
      <CardDestination destination="tsimane" description="Bolivia" />
      <CardDestination destination="tsimane" description="Bolivia" />
      <CardDestination destination="tsimane" description="Bolivia" />
      <CardDestination destination="tsimane" description="Bolivia" />
      <CardDestination destination="tsimane" description="Bolivia" />

    </div>
  </div>)
}


class Destinations extends React.Component {
  constructor(props) {
    super(props)
  }
  render = () => view()

}
export default Destinations