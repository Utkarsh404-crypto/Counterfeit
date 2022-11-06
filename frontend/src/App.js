import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Form from "./components/form/Form";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Form />}
				/>
				<Route
					path="/home"
					element={<Home />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
