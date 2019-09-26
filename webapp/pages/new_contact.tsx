import React from 'react';
import "../styles/index.scss"
import Head from 'next/head'
import Navigation from '../components/navigation';
import InputText from '../components/input_text';
import ContactAvatar from '../components/contact_avatar';
import ButtonPrimary from '../components/button_primary';
export const view = () => {
  return (<div>
     <Head>
    <meta name="viewport" content="width=device-width, user-scalable=no"/>
      </Head>
    <div className="headerGradient">
      <Navigation title="New Contact" />
      <ContactAvatar/>
    </div>

    <div className="body mt-12">
      <InputText label="First Name" />
      <InputText label="Last Name" />
      <InputText label="Email" />
      <InputText label="Address Line 1" />
      <InputText label="Address Line 2" />
      <InputText label="Zip Code" />
      <InputText label="Country" />
      
      <ButtonPrimary text="save"/>

    
    </div>
  

  </div>)
}


class NewContact extends React.Component {
  constructor(props) {
    super(props)
  }
  render = () => view()

}
export default NewContact