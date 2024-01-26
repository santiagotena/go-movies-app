import { useState } from "react";

function Movie() {
	const [movie, setMovie] = useState({});


	return(
		<div className="text-center">
			<h2>Movie</h2>
			<hr></hr>
		</div>
	)
}

export default Movie;