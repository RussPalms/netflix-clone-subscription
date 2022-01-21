import { useState } from "react";
import "../styles/Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
    cosnt [movies, setMovies] = useState([]);

    useE

	return (
		<div className="row">
			<h2>{title}</h2>
		</div>
	);
}

export default Row;
