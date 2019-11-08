import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { 
  faCheckSquare, 
  faCoffee,
  faHome,
  faClock,
  faClipboard,
  faBell,
  faEllipsisV,
  faCalendar,
  faPlus,
  faMapMarkerAlt,
  faHear,
  faPaperPlane,
  faUser,
  faTrash,
  faMinus
 } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)
class MyApp extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)