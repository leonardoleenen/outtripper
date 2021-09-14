import React from 'react'

export default (): JSX.Element => {
    return (
        <div className="p-4 ">
            <select className="select select-bordered w-full max-w-xs my-4">
                <option>telekinesis</option>
                <option>time travel</option>
                <option>invisibility</option>
            </select>
            <ul className="menu py-4 ">
                <li className="bordered disabled">
                    <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block w-5 h-5 mr-2 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                            ></path>
                        </svg>
                        Item is disabled
                    </a>
                </li>
                <li className="bordered">
                    <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block w-5 h-5 mr-2 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                            ></path>
                        </svg>
                        It has border
                    </a>
                </li>
                <li className="hover-bordered">
                    <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block w-5 h-5 mr-2 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                            ></path>
                        </svg>
                        It shows border on hover
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
