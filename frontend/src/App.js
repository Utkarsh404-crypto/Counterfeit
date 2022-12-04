import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Form from "./components/form/Form";
import Pages from "./components/pages/Pages";

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={<Form />}
			/>{" "}
			<Route
				exact
				path="/home"
				element={<Home />}
			/>{" "}
			<Route
				exact
				path="/page"
				element={<Pages />}
			/>{" "}
		</Routes>
	);
}

export default App;
