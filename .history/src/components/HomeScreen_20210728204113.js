import "../styles/HomeScreen.css";
import Banner from "./Banner";
import Nav from "./Nav";

function HomeScreen() {
	return (
		<div className="homeScreen">
			<Nav />

			<Banner />

			{/* <Row /> */}
		</div>
	);
}

export default HomeScreen;
