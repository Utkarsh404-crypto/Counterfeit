import * as Components from "./Components.js";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../form/images/logo.jpg";
import "./form.css";

const Form = () => {
	const navigate = useNavigate();
	const [signIn, toggle] = useState(true);
	const [username, setName] = useState();
	const [email, setEmail] = useState();
	const [mobileNo, setMobileNo] = useState();
	const [password, setPassword] = useState();
	const [confirmpassword, setConfirmpassword] = useState();
	const [error, setError] = useState("");
	const [successMessage, setSuccessMessage] = useState("");

	const handleSignUp = async (e) => {
		e.preventDefault();
		if (!username || !email || !mobileNo || !password || !confirmpassword) {
			setError("*Please provide all the credentials");
			return;
		}

		if (password !== confirmpassword) {
			setError("*Password doesn't match");
			return;
		}

		try {
			const config = {
				headers: {
					"Content-Type": "application/json"
				}
			};
			const { data } = await axios.post(
				"http://localhost:8080/api/user/signup",
				{ username, email, mobileNo, password },
				config
			);
			setSuccessMessage("Registration Successful");
			setError("");

			localStorage.setItem("usersInfo", JSON.stringify(data));
		} catch (error) {
			setError("*Something went wrong");
		}
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		if (!email || !password) {
			setError("*Please fill all the details");
			return;
		}
		try {
			const config = {
				headers: {
					"Content-Type": "application/json"
				}
			};

			const { data } = await axios.post(
				"http://localhost:8080/api/user/login",
				{ email, password },
				config
			);

			localStorage.setItem("userInfo", JSON.stringify(data));

			navigate("/home");
		} catch (error) {
			setError("*Please provide correct credentials");
		}
	};

	return (
		<div>
			<Components.Container>
				<Components.SignUpContainer signinIn={signIn}>
					<Components.Form>
						<Components.Title> Create Account </Components.Title>{" "}
						<Components.Input
							type="text"
							placeholder="Name"
							onChange={(e) => setName(e.target.value)}
						/>{" "}
						<Components.Input
							type="email"
							placeholder="Email"
							onChange={(e) => setEmail(e.target.value)}
						/>{" "}
						<Components.Input
							type="number"
							placeholder="Mobile No."
							onChange={(e) => setMobileNo(e.target.value)}
						/>{" "}
						<Components.Input
							type="password"
							placeholder="Password"
							onChange={(e) => setPassword(e.target.value)}
						/>{" "}
						<Components.Input
							type="password"
							placeholder="Confirm Password"
							onChange={(e) => setConfirmpassword(e.target.value)}
						/>{" "}
						<Components.Button onClick={handleSignUp}>
							{" "}
							Sign Up{" "}
						</Components.Button>{" "}
						{successMessage && (
							<span style={{ color: "green" }}> {successMessage} </span>
						)}{" "}
						{error && <span style={{ color: "red" }}> {error} </span>}{" "}
					</Components.Form>{" "}
				</Components.SignUpContainer>{" "}
				<Components.SignInContainer signinIn={signIn}>
					<img
						id="logo"
						alt=""
						src={logo}
					/>{" "}
					<Components.Form>
						<Components.Title> Sign in </Components.Title>{" "}
						<Components.Input
							type="email"
							placeholder="Email"
							onChange={(e) => setEmail(e.target.value)}
						/>{" "}
						<Components.Input
							type="password"
							placeholder="Password"
							onChange={(e) => setPassword(e.target.value)}
						/>{" "}
						<Components.Anchor href="#">
							{" "}
							Forgot your password ?{" "}
						</Components.Anchor>{" "}
						<Components.Button onClick={handleLogin}>
							{" "}
							Sign in{" "}
						</Components.Button>{" "}
						{error && <span style={{ color: "red" }}> {error} </span>}{" "}
					</Components.Form>{" "}
				</Components.SignInContainer>{" "}
				<Components.OverlayContainer signinIn={signIn}>
					<Components.Overlay signinIn={signIn}>
						<Components.LeftOverlayPanel
							signinIn={signIn}
							className="leftPanelImg">
							<Components.Title id="welcomebackTitle">
								{" "}
								Welcome Back!{" "}
							</Components.Title>{" "}
							<Components.Paragraph className="paragraph">
								To keep connected with us please login with your personal info{" "}
							</Components.Paragraph>{" "}
							<Components.GhostButton onClick={() => toggle(true)}>
								Sign In{" "}
							</Components.GhostButton>{" "}
						</Components.LeftOverlayPanel>{" "}
						<Components.RightOverlayPanel
							signinIn={signIn}
							className="rightPanelImg">
							<Components.Title id="helloTitle"> Hello! </Components.Title>{" "}
							<Components.Paragraph>
								Enter your personal details and start a journey with us{" "}
							</Components.Paragraph>{" "}
							<Components.GhostButton onClick={() => toggle(false)}>
								Sign Up{" "}
							</Components.GhostButton>{" "}
						</Components.RightOverlayPanel>{" "}
					</Components.Overlay>{" "}
				</Components.OverlayContainer>{" "}
			</Components.Container>{" "}
		</div>
	);
};

export default Form;
