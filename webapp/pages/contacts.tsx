import React from 'react';
import "../styles/index.scss"
import Head from 'next/head'
import ContactRowAgenda from '../components/contact_row_agenda';
import SearchByText from '../components/search_by_text';
import ButtonFloatingAdd from '../components/button_floating_add';
import Navigation from '../components/navigation';
import { IContact } from '../services/type';
import {loadAgenda,filterAgenda} from '../redux/actions/agenda';


import {connect} from 'react-redux'

export const view = (props) => {
  return (<div className="body">
    <Head>
      <meta name="viewport" content="width=device-width, user-scalable=no" />
    </Head>
    <Navigation title="test"/>
    <SearchByText callBack = {props.filter} />
    {
      props.contacts.map((contact: IContact) => (
        <ContactRowAgenda 
          key={contact._id}
          first_name={contact.first_name}  
          last_name = {contact.last_name}
          email={contact.email} 
          kindOf={contact.kindOf}/>
    )) 
    }
    <ButtonFloatingAdd goTo='/new_contact' />
  </div>)
}


interface Props {
  load: any,
  filter: any
}




class Contacts extends React.Component<Props> {
  constructor (props){ super(props)} 
  componentDidMount = () =>  this.props.load()
  render = () => view(this.props )
}



const mapStateToProps = state  => {
  return {
    contacts : state.agenda.contacts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    load: () => dispatch(loadAgenda()),
    filter: (criteria: string) => dispatch(filterAgenda(criteria))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Contacts)