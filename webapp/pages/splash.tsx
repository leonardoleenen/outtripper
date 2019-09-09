import React from 'react'
import '../styles/index.scss'

class Splash extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className="h-screen splash">
      <label className="m-auto">
        OutTripper
      </label>
      <p className="mx-auto">.: Your Booking Chart App :. </p>
    </div>
  }
}

export default Splash 