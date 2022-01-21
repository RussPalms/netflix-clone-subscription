import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
	cosnt[(movies, setMovies)] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}
	}, [fetchUrl]);

	return (
		<div className="row">
			<h2>{title}</h2>
		</div>
	);
}

export default Row;
