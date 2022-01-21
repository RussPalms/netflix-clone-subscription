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
			\
		</div>
	);
}

export default HomeScreen;
