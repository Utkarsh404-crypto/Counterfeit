import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import logo from "../form/logo.jpg";
import qr from "../pages/qr.jpg";
import "./pages.css";

const Pages = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}>
						{/* <BiMenu /> */}
					</IconButton>
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
					<Button
						color="inherit"
						id="logoutBtn">
						Logout
					</Button>
				</Toolbar>
			</AppBar>
			<div className="formContainer">
				<form
					method="post"
					action="/"
					id="form"
					class="validate">
					<div class="form-field">
						<label for="Product Name">Product Name</label>
						<input
							className="input"
							type="text"
							name="productName"
							id="productName"
							placeholder="Product Name"
							required
						/>
					</div>
					<div class="form-field">
						<label for="Serial Number">Serial Number</label>
						<input
							type="number"
							name="serialNumber"
							id="serialNumber"
							placeholder="Serial Number"
							required
						/>
					</div>

					<div class="form-field">
						<label for="source">Source</label>
						<input
							type="text"
							name="sourceName"
							id="sourceName"
							placeholder="Source"
							required
						/>
					</div>
					<div class="form-field">
						<label for="destination">Destination</label>
						<input
							type="text"
							name="destinationName"
							id="destinationName"
							placeholder="Destination"
							required
						/>
					</div>
					<div class="form-field">
						<label for=""></label>
						<input
							id="submitBtn"
							type="submit"
							value="Create Item"
						/>
					</div>
				</form>
				<div className="qrContainer">
					<span>
						<img src={qr} />
					</span>
				</div>
			</div>

			<div className="footerContainer">
				<footer>
					<h5>Powered by Counterfeit</h5>
					<p>&#169; Copyright 2022</p>
				</footer>
			</div>
		</Box>
	);
};

export default Pages;
