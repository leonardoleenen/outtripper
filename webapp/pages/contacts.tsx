import React from 'react';
import "../styles/index.scss"
import Head from 'next/head'
import ContactRowAgenda from '../components/contact_row_agenda';
import SearchByText from '../components/search_by_text';
import ButtonFloatingAdd from '../components/button_floating_add';
import Navigation from '../components/navigation';
import { IContact } from '../services/type';
import { businessService, BusinessService } from '../services/index';


export const view = (props,state) => {

  return (<div className="body">
    <Head>
      <meta name="viewport" content="width=device-width, user-scalable=no" />
    </Head>
    <Navigation />
    <SearchByText />
    {
      state.contacts.map((contact: IContact) => (
        <ContactRowAgenda 
          first_name={contact.first_name}  
          email={contact.email} 
          kindOf={contact.kindOf}/>
    )) 
    }
    
    <ButtonFloatingAdd />

  </div>)
}


interface Props {
  contacts: IContact[]
}

interface State {
  contacts: IContact[]
}

class Contacts extends React.Component<Props, State> {

  ds: BusinessService =  businessService
  
  state : State  = {
    contacts : []
  }

  constructor(props) {
    super(props)
  }
  
  componentWillMount() {
    this.ds.getContacts().then(result => {
      this.setState({contacts:result})
    })
  }

  render = () => {
    return view(this.props,this.state )
  }

}
export default Contacts