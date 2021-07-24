import React, { useState } from 'react'

function HogCard({hogData}) {
    const [toggleDetails, setToggleDetails] = useState(false)

    function handleToggleDetails(){
        setToggleDetails(!toggleDetails)
    }

    function renderHogDetails(){
        let isGreased = hogData.greased
        return (
            <ul>
                <li>Specialty: {hogData.specialty}</li>
                <li>Weight: {hogData.weight}</li>
                <li>Greased: {isGreased ? "Yes" : "No"}</li>
                <li>Highest Medal: {hogData["highest medal achieved"]}</li>
            </ul>
        )
    }

    return (
        <li className="pigTile">
            <img src={hogData.image}></img>
            <h3>{hogData.name}</h3>
            <button onClick={handleToggleDetails}>{toggleDetails ? "Hide Detals" : "Show Details"}</button> 
            {toggleDetails? renderHogDetails() : null}
        </li>
    )
}

export default HogCard