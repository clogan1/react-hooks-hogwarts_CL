import React from 'react'
import HogCard from './HogCard'

function HogContainer({ hogs }) {
    return (
        <ul>
            {hogs.map((hog, index) => {
                return(<HogCard hogData={hog} key={index}/>)
            })
            } 
        </ul>
    )
}

export default HogContainer