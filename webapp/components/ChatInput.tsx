import React from 'react'
import Send from '../static/svg/send.svg'
import { connect } from 'react-redux'

class ChatInput extends React.Component {

    render() {
        return <div className="flex flex-col mb-4">
            <label className="block tracking-wide text-gray-700 text-xs ">Precio</label>
            <div className="flex flex-row">
                <span className="flex items-center bg-grey-lighter rounded rounded-r-none pr-3 font-bold text-red-500">USD</span>
                <input type="number" name="price" className="bg-grey-lighter text-grey-darker py-2 font-normal w-3/4 text-grey-darkest border-b border-grey-lighter rounded-l-none font-bold" />
                <span className="flex items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold text-gray-700">
                    <img src={Send} className="w-8 h-8" />
                </span>
            </div>
        </div>;
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatInput)

