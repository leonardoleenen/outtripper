import React from 'react'
import { UIEVoucher } from '../../../stores/evoucher.store'

export default (): JSX.Element => {
    const service = UIEVoucher.useState(s => s.eVoucher?.service)
    return (
        <div>
            <div className="flex">adsfads</div>
        </div>
    )
}
