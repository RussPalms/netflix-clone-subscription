import axios from "../axios";
import { useEffect, useState } from "react";
import "../styles/Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
	const [movies, setMovies] = useState([]);

	const base_url = "https://image.tmdb.org/t/p/original/";

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}

		fetchData();
	}, [fetchUrl]);

	// console.log(movies);

	return (
		<div className="row">
			<h2>{title}</h2>

			{movies.map((movie) => (
				<img
					src={`${base_url}${
						isLargRow ? movie.poster_path : movie.backdrop_path
					}`}
					alt=""
				/>
			))}
		</div>
	);
}

export default Row;
