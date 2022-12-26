import React from "react";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import manu from "../home/images/manu.jpg";
import ret from "../home/images/retailor.jpg";
import cust from "../home/images/customer.jpg";
import getWeb3 from "./getWeb3";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Home = () => {
	var valueM = sessionStorage.getItem("boolM");
	var valueS = sessionStorage.getItem("boolS");
	var valueC = sessionStorage.getItem("boolC");
	var value = sessionStorage.getItem("bool");
	var userInfo = localStorage.getItem("userInfo");
	const [loadMeta, setLoadMeta] = useState(false);
	const [error, setError] = useState("");
	const [errorBtnM, setErrorBtnM] = useState("");
	const [errorBtnS, setErrorBtnS] = useState("");
	const [errorBtnC, setErrorBtnC] = useState("");

	const handleClickManufacturer = async () => {
		try {
			// Get network provider and web3 instance.
			let web3 = await getWeb3();
			sessionStorage.setItem("boolM", true);
			setLoadMeta(true);
		} catch (error) {
			setError(
				"Couldn't connect to the metamask or any given provider , try again"
			);
		}
	};
	const handleClickSupplier = async () => {
		try {
			// Get network provider and web3 instance.
			let web3 = await getWeb3();
			sessionStorage.setItem("boolS", true);
			setLoadMeta(true);
		} catch (error) {
			setError(
				"Couldn't connect to the metamask or any given provider , try again"
			);
		}
	};
	const handleClickCustomer = async () => {
		try {
			// Get network provider and web3 instance.
			let web3 = await getWeb3();
			sessionStorage.setItem("boolC", true);
			setLoadMeta(true);
		} catch (error) {
			setError(
				"Couldn't connect to the metamask or any given provider , try again"
			);
		}
	};

	const handleErrorManu = () => {
		setErrorBtnM("Close the session and then try again!");
	};
	const handleErrorSupp = () => {
		setErrorBtnS("Close the session and then try again!");
	};
	const handleErrorCust = () => {
		setErrorBtnC("Close the session and then try again!");
	};

	if (loadMeta === true && userInfo !== undefined) {
		sessionStorage.setItem("bool", true);
		return <Navigate to="/page" />;
	}

	return (
		<>
			{error && (
				<span
					className="texts"
					style={{ color: "red", fontSize: "22px" }}>
					{error}
				</span>
			)}
			<div
				id="carouselExampleIndicators"
				class="carousel slide"
				data-ride="carousel">
				<ol class="carousel-indicators">
					<li
						data-target="#carouselExampleIndicators"
						data-slide-to="0"
						class="active"></li>
					<li
						data-target="#carouselExampleIndicators"
						data-slide-to="1"
						class="active"></li>
					<li
						data-target="#carouselExampleIndicators"
						data-slide-to="2"
						class="active"></li>
				</ol>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img
							class="d-block w-100"
							src={manu}
							alt="First slide"
						/>
					</div>

					<div class="carousel-item">
						<img
							class="d-block w-100"
							src={ret}
							alt="Second slide"
						/>
					</div>
					<div class="carousel-item">
						<img
							class="d-block w-100"
							src={cust}
							alt="Third slide"
						/>
					</div>
				</div>
				<a
					class="carousel-control-prev"
					href="#carouselExampleIndicators"
					role="button"
					data-slide="prev">
					<span
						class="carousel-control-prev-icon"
						aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a
					class="carousel-control-next"
					href="#carouselExampleIndicators"
					role="button"
					data-slide="next">
					<span
						class="carousel-control-next-icon"
						aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
				<div className="font">Who Are You?</div>
				<div className="center">
					<button
						className="btn"
						id="btn-1"
						onClick={
							value !== valueM ? handleErrorManu : handleClickManufacturer
						}>
						Manufacturer
						{errorBtnM && (
							<div
								className="error"
								style={{ color: "red" }}>
								{errorBtnM}
							</div>
						)}
					</button>
					<button
						className="btn"
						id="btn-2"
						onClick={value !== valueS ? handleErrorSupp : handleClickSupplier}>
						Supplier
						{errorBtnS && (
							<div
								className="error"
								style={{ color: "red" }}>
								{errorBtnS}
							</div>
						)}
					</button>

					<button
						className="btn"
						id="btn-3"
						onClick={value !== valueC ? handleErrorCust : handleClickCustomer}>
						Customer
						{errorBtnC && (
							<div
								className="error"
								style={{ color: "red" }}>
								{errorBtnC}
							</div>
						)}
					</button>
				</div>
			</div>
		</>
	);
};

export default Home;
