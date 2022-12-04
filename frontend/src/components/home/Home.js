import React from "react";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import manu from "../home/manu.jpg";
import ret from "../home/retailor.jpg";
import cust from "../home/customer.jpg";
import { useNavigate } from "react-router-dom";
import getWeb3 from "./getWeb3";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Home = () => {
	const [loadMeta, setLoadMeta] = useState(false);
	const handleClickManufacturer = async () => {
		try {
			// Get network provider and web3 instance.
			let web3 = await getWeb3();

			// Use web3 to get the user's accounts.
			const accounts = await web3.eth.getAccounts();

			// Get the contract instance.
			const networkId = await web3.eth.net.getId();
			setLoadMeta(true);
		} catch (error) {
			alert("Couldn't not connect to the metamask or any given provider");
		}
	};

	if (loadMeta === true) {
		return <Navigate to="/page" />;
	}

	return (
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
					data-slide-to="1"></li>
				<li
					data-target="#carouselExampleIndicators"
					data-slide-to="2"></li>
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
					class="btn"
					id="btn-1"
					onClick={handleClickManufacturer}>
					Manufacturer
				</button>
				<button
					class="btn"
					id="btn-2">
					Supplier
				</button>
				<button
					class="btn"
					id="btn-3">
					Customer
				</button>
			</div>
		</div>
	);
};

export default Home;
