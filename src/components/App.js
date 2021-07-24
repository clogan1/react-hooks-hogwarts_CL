import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";
import FilterNav from "./FilterNav";

function App() {
	//const [currentHogsArr, setHogsArr] = useState(hogs)
	//const allHogs = [...currentHogsArr]
	const [filterGreased, setFilterGreased] = useState(false)

	const displayHogs = hogs.filter(hog => (filterGreased ?  hog.greased : true))
	

	return (
		<div className="App">
			<Nav />
			<FilterNav filterGreased={filterGreased} setFilterGreased={setFilterGreased}/>
			<HogContainer hogs={displayHogs}/>
		</div>
	);
}

export default App;
