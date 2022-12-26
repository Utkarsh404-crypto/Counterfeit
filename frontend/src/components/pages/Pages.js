import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import BasicModal from "../Modal/BasicModal";
import Typography from "@mui/material/Typography";
import logo from "../form/images/logo.jpg";
import back from "../pages/images/back.jpg";
import "./pages.css";

const Pages = () => {
	const [itemName, setItemName] = useState("");
	const [itemSerialNumber, setItemSerialNumber] = useState();
	const [itemSource, setItemSource] = useState("");
	const [itemDestination, setItemDestination] = useState("");

	const handleItemName = (e) => {
		setItemName(e.target.value);
	};

	const handleItemSerialNumber = (e) => {
		setItemSerialNumber(e.target.value);
	};

	const handleItemSource = (e) => {
		setItemSource(e.target.value);
	};

	const handleItemDestination = (e) => {
		setItemDestination(e.target.value);
	};

	return (
		<>
			<Box>
				<AppBar position="static">
					<Toolbar>
						<Typography
							variant="h6"
							component="div"
							sx={{ flexGrow: 1 }}>
							<img
								id="logo"
								alt=""
								src={logo}
							/>{" "}
						</Typography>
						<a
							color="inherit"
							id="logoutBtn">
							Logout
						</a>
					</Toolbar>
				</AppBar>
				<img
					src={back}
					className="backImg"
				/>
				<div className="itemContainer">
					<div className="lContainer">
						<b className="texts">Create Item</b>
						<input
							type="text"
							placeholder="Item Name"
							id="itemName"
							onChange={handleItemName}
							className="lInput"
						/>
						<input
							type="number"
							placeholder="Serial Number"
							id="sno"
							onChange={handleItemSerialNumber}
							className="lInput"
						/>
						<input
							type="text"
							placeholder="Source"
							id="source"
							onChange={handleItemSource}
							className="lInput"
						/>
						<input
							type="text"
							placeholder="Destination"
							id="destination"
							onChange={handleItemDestination}
							className="lInput"
						/>
						<BasicModal
							itemName={itemName}
							itemSerialNumber={itemSerialNumber}
							itemSource={itemSource}
							itemDestination={itemDestination}
						/>
					</div>
				</div>
				<div className="footerContainer">
					<footer>
						<h5>Powered by Counterfeit</h5>
						<p>&#169; Copyright 2022</p>
					</footer>
				</div>
			</Box>
		</>
	);
};

export default Pages;
