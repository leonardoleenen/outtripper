import React from 'react'
import { UIEVoucher } from '../../../../stores/evoucher.store'

export default (): JSX.Element => {
    const voucher = UIEVoucher.useState(s => s)

    return (
        <div>
            <div className="prose">
                <h2>Contact Info</h2>
                <p>
                    In this section you could configure important contact
                    information for your customers
                </p>
            </div>
            <form className="mt-8 p-8 card bg-base-200">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">
                            Emergency phone number
                        </span>
                    </label>
                    <input
                        type="text"
                        value={voucher.emergencyPhone}
                        placeholder="+180009932"
                        className="input "
                    />
                </div>
                <div className="form-control pt-4">
                    <label className="label">
                        <span className="label-text">Contact Phone Number</span>
                    </label>
                    <input
                        type="text"
                        value={voucher.contactPhone}
                        onChange={e =>
                            UIEVoucher.update(s => {
                                s.contactPhone = e.target.value
                            })
                        }
                        placeholder="+180009932"
                        className="input "
                    />
                </div>
                <div className="form-control pt-4">
                    <label className="label">
                        <span className="label-text">
                            Operator phone number
                        </span>
                    </label>
                    <input
                        type="text"
                        value={voucher.operatorPhone}
                        placeholder="+180009932"
                        className="input "
                    />
                </div>
                <div className="form-control pt-4">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="text"
                        value={voucher.email}
                        placeholder="john@doe.com"
                        className="input "
                    />
                </div>
            </form>
        </div>
    )
}
