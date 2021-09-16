import React from 'react'
import { UIConfigureServiceStore } from '../../../../stores/configure.store'
import { UIEVoucher } from '../../../../stores/evoucher.store'

export default (): JSX.Element => {
    const serviceSelected = UIConfigureServiceStore.useState(
        s => s.serviceSelected
    )
    return (
        <div>
            <div className="prose">
                <h2>General Info</h2>
                <p>
                    In this section you could configure all general information
                    about your service like Service Name, Service description
                    and other relevant information
                </p>
            </div>
            <form className="mt-8 p-8 card bg-base-200">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service name</span>
                    </label>
                    <input
                        value={serviceSelected?.name}
                        type="text"
                        placeholder="service name"
                        className="input "
                    />
                </div>
                <div className="form-control pt-4">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input
                        type="text"
                        placeholder="description"
                        className="input "
                    />
                </div>
                <div className="form-control pt-4">
                    <label className="label">
                        <span className="label-text">Your bio</span>
                    </label>
                    <textarea
                        className="textarea h-24"
                        placeholder="Bio"
                    ></textarea>
                </div>
            </form>
        </div>
    )
}
