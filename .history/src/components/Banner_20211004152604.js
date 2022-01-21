import axios from "./axios";
import { useEffect, useState } from "react";
import "../styles/Banner.css";
import requests from "../../Requests";

function Banner() {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNeflixOriginals);
			setMovie(request.data.results[])
		}
	});

	function truncate(string, n) {
		return string?.length > n ? string.substr(0, n - 1) + "..." : string;
	}

	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url("https://coolbackgrounds.io/images/backgrounds/black/black-contour-f41038db.svg")`,
				backgroundPosition: "center center",
			}}
		>
			<div className="banner__contents">
				<h1 className="banner__title">Movie Name</h1>
				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>
				<h1 className="banner__description">
					{truncate(
						`This is a test description This is a test description This
					is a test description This is a test description This is a
					test description This is a test description This is a test
					description This is a test description This is a test
					description This is a test description This is a test
					description This is a test description This is a test
					description This is a test description This is a test
					description This is a test description This is a test
					description This is a test description This is a test
					description This is a test description This is a test
					description This is a test description This is a test
					description This is a test description This is a test
					description This is a test description This is a test`,
						150
					)}
				</h1>
			</div>

			<div className="banner--fadeBottom" />
		</header>
	);
}

export default Banner;
