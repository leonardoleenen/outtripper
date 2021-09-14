import React from 'react'

const IconGeneralInfo = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block w-5 h-5 mr-2 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
            />
        </svg>
    )
}

const IconQuestion = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block w-5 h-5 mr-2 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    )
}

const IconTripInfo = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block w-5 h-5 mr-2 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
        </svg>
    )
}

const IconPaymentMethods = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block w-5 h-5 mr-2 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
        </svg>
    )
}
export default (): JSX.Element => {
    return (
        <div className="p-4 ">
            <select className="select select-bordered w-full max-w-xs my-4">
                <option>telekinesis</option>
                <option>time travel</option>
                <option>invisibility</option>
            </select>
            <ul className="menu py-4 ">
                <li className="bordered font-bold">
                    <a>
                        <IconGeneralInfo />
                        General Info
                    </a>
                </li>

                <li className="">
                    <a>
                        <IconTripInfo />
                        Trip Info
                    </a>
                </li>

                <li className="">
                    <a>
                        <IconQuestion />
                        Questionarie
                    </a>
                </li>

                <li className="">
                    <a>
                        <IconPaymentMethods />
                        Accept Payment methods
                    </a>
                </li>
            </ul>
            <button className="btn btn-success w-full bottom-0">
                Create New Service
            </button>

            <button className="btn btn-error w-full bottom-0 mt-4">
                Remove
            </button>
        </div>
    )
}
