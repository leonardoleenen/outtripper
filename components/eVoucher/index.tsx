import React from 'react'
import { EVoucherSections, UIEVoucher } from '../../stores/evoucher.store'
import Contact from './Contact'
import Payments from './Payments'
import Questionarie from './Questionarie'
import TripInfo from './TripInfo'

export default (): JSX.Element => {
    const sectionSelected: EVoucherSections = UIEVoucher.useState(
        s => s.sectionSelected
    )

    return (
        <div>
            {sectionSelected === EVoucherSections.CONTACT && <Contact />}
            {sectionSelected === EVoucherSections.PAYMENT && <Payments />}
            {sectionSelected === EVoucherSections.QUESTIONARIE && (
                <Questionarie />
            )}
            {sectionSelected === EVoucherSections.TRIP_INFO && <TripInfo />}
        </div>
    )
}
