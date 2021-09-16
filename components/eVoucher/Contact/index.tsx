import React from 'react'
import { UIEVoucher } from '../../../stores/evoucher.store'


export default (): JSX.Element => {
    const voucher = UIEVoucher.useState(s => s)

    return (
        <div className="prose">
            <h3>Do you have any inquire?</h3>
            <div className="bg-base-200 font-thin  rounded-lg">
                <p className="p-4">For Emergency: {voucher.emergencyPhone}</p>
            </div>

            <div className="bg-base-200 font-thin  rounded-lg ">
                <p className="p-4">Contact Phone: {voucher.contactPhone}</p>
            </div>

            <div className="bg-base-200 font-thin  rounded-lg ">
                <p className="p-4">Operator Phone: {voucher.operatorPhone}</p>
            </div>
            <div className="bg-base-200 font-thin  rounded-lg ">
                <p className="p-4">Email: {voucher.email}</p>
            </div>


        </div>
    )
}
