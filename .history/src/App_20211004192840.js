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
						<Route>
							<Users />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
