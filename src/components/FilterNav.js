import React, { useState } from 'react'

function FilterNav({filterGreased, setFilterGreased}) {
    return (
        <div className="leftNav">
            <label for="dropdown">Sort by: </label>
            <select id="dropdown">
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>
            <br></br>
            <br></br>
            <input type="checkbox" name="greaseFilter" onChange={setFilterGreased} value={filterGreased}></input>
            <label>  Greased Hogs</label>

            
        </div>
    )
}

export default FilterNav
