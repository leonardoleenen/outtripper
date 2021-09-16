import React from 'react'
import { UIEVoucher } from '../../../stores/evoucher.store'

export default (): JSX.Element => {
    const voucher = UIEVoucher.useState(s => s)

    return (
        <div className="prose">
            <h3>Do you have any inquire?</h3>
            <div className="bg-base-200 font-thin  rounded-lg">
                <div className="m-4">
                    <p>For Emergency: {voucher.emergencyPhone}</p>
                </div>
            </div>
        </div>
    )
}
