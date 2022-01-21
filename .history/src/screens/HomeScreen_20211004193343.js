import requests from "../Requests";
import "./HomeScreen.css";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Row from "../components/Row";

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
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default HomeScreen;
