import React from 'react';
import "../styles/index.scss"
import Head from 'next/head'
import Navigation from '../components/navigation';
import InputText from '../components/input_text';

export const view = () => {
  return (<div>
     <Head>
    <meta name="viewport" content="width=device-width, user-scalable=no"/>
      </Head>
    <div className="headerGradient">
      <Navigation title="New Contact" />
    </div>

    <div className="body">
      <InputText label="First Name" />
      <InputText label="Last Name" />
      <InputText label="Email" />
      <InputText label="Address Line 1" />
      <InputText label="Address Line 2" />
      <InputText label="Zip Code" />
      <InputText label="Country" />
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