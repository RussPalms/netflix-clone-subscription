import React from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="app">
			<HomeScreen />

			<Router>
				<div>
					<Switch>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/users">
							<Users />
						</Route>
						<Route path="/home">
							<Home />
						</Route>
					</Switch>
				</div
			</Router>
		</div>
	);
}

export default App;
