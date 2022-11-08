import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Form from "./components/form/Form";

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={<Form />}
			/>
			<Route
				exact
				path="/home"
				element={<Home />}
			/>
		</Routes>
	);
}

export default App;
