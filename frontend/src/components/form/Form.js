import * as Components from "./Components.js";
import React from "react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import logo from "./logo.jpg";
import "./form.css";
import { AlertTitle } from "@mui/material";
import { Alert } from "@mui/material";

const Form = () => {
	const toast = useToast();
	const [signIn, toggle] = React.useState(true);
	const [username, setName] = useState();
	const [email, setEmail] = useState();
	const [mobileNo, setMobileNo] = useState();
	const [password, setPassword] = useState();
	const [confirmpassword, setConfirmpassword] = useState();
	const [load, setLoad] = useState(false);

	const handleSubmit = async () => {
		if (!username || !email || !mobileNo || !password || !confirmpassword) {
			toast({
				title: "Please fill the details",
				status: "warning",
				duration: 3000,
				isClosable: true
			});

			return;
		}

		if (password !== confirmpassword) {
			toast({
				title: "Password do not match",
				status: "error",
				duration: 3000,
				isClosable: true
			});
			return;
		}

		try {
			const config = {
				headers: {
					"Content-type": "application/json"
				}
			};
			const { data } = await axios.post(
				"http://localhost:8080/api/user/signup",
				{ username, email, mobileNo, password },
				config
			);
			console.log("hello", data);
			setLoad(true);
			toast({
				title: "Registration Successful",
				description: "We've created your account for you.",
				status: "success",
				duration: 3000,
				isClosable: true
			});

			localStorage.setItem("usersInfo", JSON.stringify(data));
		} catch (error) {
			console.log(error.message);
			alert("error");
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
						/>
						<Components.Input
							type="email"
							placeholder="Email"
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Components.Input
							type="number"
							placeholder="Mobile No."
							onChange={(e) => setMobileNo(e.target.value)}
						/>
						<Components.Input
							type="password"
							placeholder="Password"
							onChange={(e) => setPassword(e.target.value)}
						/>
						<Components.Input
							type="password"
							placeholder="Confirm Password"
							onChange={(e) => setConfirmpassword(e.target.value)}
						/>
						<Components.Button onClick={handleSubmit}>
							{" "}
							Sign Up{" "}
						</Components.Button>{" "}
					</Components.Form>{" "}
				</Components.SignUpContainer>

				<Components.SignInContainer signinIn={signIn}>
					<img
						id="logo"
						src={logo}
					/>
					<Components.Form>
						<Components.Title> Sign in </Components.Title>{" "}
						<Components.Input
							type="email"
							placeholder="Email"
						/>
						<Components.Input
							type="password"
							placeholder="Password"
						/>
						<Components.Anchor href="#">
							{" "}
							Forgot your password ?{" "}
						</Components.Anchor>{" "}
						<Components.Button> Sign in </Components.Button>{" "}
					</Components.Form>{" "}
				</Components.SignInContainer>

				<Components.OverlayContainer signinIn={signIn}>
					<Components.Overlay signinIn={signIn}>
						<Components.LeftOverlayPanel signinIn={signIn}>
							<Components.Title id="welcomebackTitle">
								{" "}
								Welcome Back!{" "}
							</Components.Title>{" "}
							<Components.Paragraph>
								To keep connected with us please login with your personal info{" "}
							</Components.Paragraph>{" "}
							<Components.GhostButton onClick={() => toggle(true)}>
								Sign In{" "}
							</Components.GhostButton>{" "}
						</Components.LeftOverlayPanel>

						<Components.RightOverlayPanel signinIn={signIn}>
							<Components.Title id="helloTitle"> Hello! </Components.Title>{" "}
							<Components.Paragraph>
								Enter your personal details and start a journey with us{" "}
							</Components.Paragraph>{" "}
							<Components.GhostButton onClick={() => toggle(false)}>
								Sign Up{" "}
							</Components.GhostButton>{" "}
						</Components.RightOverlayPanel>
					</Components.Overlay>{" "}
				</Components.OverlayContainer>
			</Components.Container>
		</div>
	);
};

export default Form;
