import React,{useState, useEffect} from 'react';
import {businessService} from '../../../services/index'
import ProgramHeader from '../../../components/my_trips/program_header'
import NavBar from '../../../components/my_trips/nav_bar'
import PreTripInfo from '../../../components/my_trips/pre_trip_info'
import Loading from '../../../components/Loading'
import moment from 'moment';

export interface Payment {
  title: string,
  reservation: string
  invoice_date: string
  charges: Array<string | number>
  received_amount?: number
  received_date?: string
  received_card?: string
}

export default () => {
  const bs = businessService
  const [ payment, setPayment] = useState([])
  const [ program, setProgram] = useState([])
  useEffect( () => {
    const fetchData = async () => {
      const resolve = await  bs.getClientTrip(null)
      setPayment(resolve[0]['payment'])
      setProgram(resolve[0]['program'])
    }
    fetchData()
      
  }, []) //usar el use effect para trabajar el momento del load de la pagina

  if (payment.length == 0) return <Loading></Loading>

    return <div>
        <ProgramHeader program={program}></ProgramHeader>
        <NavBar></NavBar>
        <PreTripInfo></PreTripInfo>
        <div className="payment_info p-2 m-5 rounded-lg border-2">
          <header>{payment.title}</header>
          <article className="payment_items mt-5">
            { payment.charges.map( (charge:any) => {
              return <div className="payment_charge mt-1"><p>{charge.text}</p><p>${charge.amount}</p></div>
            })}
          </article>
          <article className="payment_total mt-5 pt-3 border-dashed border-t-2">
            <strong>Total</strong><strong>${payment.charges.reduce((total, charge) => total + parseInt(charge.amount, 10), 0)}</strong>
            <div className="mt-4"><CreditCard></CreditCard> Your Payment</div>
            <div className="mt-4">${payment.received_amount}</div>
            <div>{moment(payment.received_date).format('Do MMM')}/{payment.received_card}</div>
          </article>
          <article className="payment_balance mt-5 pt-3 border-dashed border-t-2">
            <div className="payment_balance_detail">
              <strong>Balance</strong><strong>${payment.charges.reduce((total, charge) => total + parseInt(charge.amount, 10), 0) - payment.received_amount}</strong>
            </div>
            <div className="mt-5 text-center">
              <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"><CreditCard></CreditCard> Pay Balance</button>
            </div>
          </article>
        </div>
        <style>
            {
                `
                .payment_info header {
                  font-weight: 600;
                  font-size: 18px;
                  line-height: 25px;
                  letter-spacing: 0.15px;
                }
                .payment_charge {
                  display: grid;
                  grid-template-columns: 75% 25%;
                }
                .payment_total {
                  display: grid;
                  grid-template-columns: 75% 25%;
                  font-size: 18px;
                  line-height: 25px;
                  letter-spacing: 0.15px;
                }
                .payment_total div {
                  font-size: 14px;
                  line-height: 19px;
                }
                .payment_total div svg {
                  display: inline-block;
                }
                .payment_balance .payment_balance_detail {
                  display: grid;
                  grid-template-columns: 75% 25%;
                }
                `
            }
          </style>
    </div>
}

const CreditCard = () => (<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 3.5H3.5C2.52875 3.5 1.75875 4.27875 1.75875 5.25L1.75 15.75C1.75 16.7212 2.52875 17.5 3.5 17.5H17.5C18.4713 17.5 19.25 16.7212 19.25 15.75V5.25C19.25 4.27875 18.4713 3.5 17.5 3.5ZM17.5 15.75H3.5V10.5H17.5V15.75ZM3.5 7H17.5V5.25H3.5V7Z" fill="black" fill-opacity="0.54"/>
</svg>
)