import React from 'react'

interface Props {
    children?: any
    className?: string
}

export default (props: Props): JSX.Element => {
    return <div className={props.className}>{props.children}</div>
}
