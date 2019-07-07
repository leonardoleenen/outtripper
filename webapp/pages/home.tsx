import React from 'react'

class Home extends React.Component {
    

    render() {
        const h1 = React.createElement('h1',{className: 'text-red'},'Titulo')
        const el =  React.createElement('div', null,h1)
        return el
    }
}

export default Home