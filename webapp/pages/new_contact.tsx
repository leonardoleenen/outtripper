import React, { useState  } from 'react';
import "../styles/index.scss"
import Head from 'next/head'
import {withRouter} from 'next/router';
import Navigation from '../components/navigation';
import InputText from '../components/input_text';
import ContactAvatar from '../components/contact_avatar';
import {  useDispatch  } from 'react-redux'
import {newContact} from '../redux/actions/agenda';
import { IContact } from 'services/type';

export const NewContact = (props) => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [country, setCountry] = useState('')

  const dispatch = useDispatch()
  
  return (<div>
    <Head>
      <meta name="viewport" content="width=device-width, user-scalable=no" />
    </Head>
    <div className="headerGradient">
      <Navigation title="New Contact" />
      <ContactAvatar className="path" />
    </div>

    <div className="body mt-12">
      <InputText label="First Name" value={firstName}  handler={setFirstName} />
      <InputText label="Last Name" value={lastName}  handler={setLastName}/>
      <InputText label="Email" value={email}  handler={setEmail}/>
      <InputText label="Address Line 1" value={address1}  handler={setAddress1} />
      <InputText label="Address Line 2" value={address2}  handler={setAddress2} />
      <InputText label="Zip Code"  value={zipCode}  handler={setZipCode}/>
      <InputText label="Country" value={country}  handler={setCountry}/>
      <button className=" buttonPrimary" onClick={ () => {
          dispatch(newContact({
            first_name: firstName, 
            last_name: lastName,
            email: email,
            country: country, 
            address1,
            address2
          } as IContact))
         
            props.router.push('/contacts')
        }}>
        Save
      </button>

     
    </div>


  </div>)
}



export default withRouter(NewContact)