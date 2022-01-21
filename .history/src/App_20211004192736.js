import React from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import {BrowserRouter as Router, Switch, Route}

function App() {
	return (
		<div className="app">
			<HomeScreen />
		</div>
	);
}

export default App;
