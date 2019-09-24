import React from 'react';
import "../styles/index.scss"
import Head from 'next/head'
import ContactRowAgenda from '../components/contact_row_agenda';
import SearchByText from '../components/search_by_text';
import ButtonFloatingAdd from '../components/button_floating_add';
import Navigation from '../components/navigation';


export const view = () => {
  return (<div className="body">
    <Head>
    <meta name="viewport" content="width=device-width, user-scalable=no"/>
      </Head>
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