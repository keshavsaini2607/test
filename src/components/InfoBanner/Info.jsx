import React from 'react'
import './Info.css'

const Info = ({containerStyle, heading, description}) => {
    return (
        <div className={containerStyle=== 'row' ? 'rowInfoContainer' : 'infoContainer'}>
            <h1>{heading}</h1>
            <span>{description}</span>
        </div>
    )
}

export default Info
