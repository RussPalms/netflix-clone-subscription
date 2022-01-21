import requests from "../Requests";
import "../styles/HomeScreen.css";
import Banner from "./Banner";
import Nav from "./Nav";
import Row from "./Row";

function HomeScreen() {
	return (
		<div className="homeScreen">
			<Nav />

			<Banner />

			<Row
				title="NETFLIX ORIGINALS"
				fetchUrl={requests.fetchNeflixOriginals}
				isLargeRow
			/>
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Documentaries" fetchUrl={requests.fetchDocume} />
		</div>
	);
}

export default HomeScreen;
