import React from 'react';
import "../styles/index.scss"
import ContactRowAgenda from '../components/contact_row_agenda';
import SearchByText from '../components/search_by_text';
import ButtonFloatingAdd from '../components/button_floating_add';
import Navigation from '../components/navigation';


export const view = () => {
  return (<div className="body">
    <Navigation/>
    <SearchByText/>
    <ContactRowAgenda/>
    <ContactRowAgenda/>
    <ContactRowAgenda/>
    <ButtonFloatingAdd/>
     
    </div>)
}


class Contacts extends React.Component {
      constructor(props) {
    super(props)
  }
 render = () => view()

}
export default Contacts