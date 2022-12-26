import * as React from "react";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import getWeb3 from "../home/getWeb3";
import Manufacturer from "../../contracts/Manufacturer.json";
import Item from "../../contracts/Item.json";
import Ownable from "../../contracts/Ownable.json";
import Qrcode from "qrcode.react";
import "./modal.css";

export default function BasicModal({
	itemName,
	itemSerialNumber,
	itemSource,
	itemDestination
}) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
		setError("");
		setValues("");
	};

	const [error, setError] = useState("");
	const [values, setValues] = useState("");

	const handleCreate = async () => {
		try {
			let web3 = await getWeb3();

			// Use web3 to get the user's accounts.
			const accounts = await web3.eth.getAccounts();
			// Get the contract instance.
			const networkId = await web3.eth.net.getId();

			const manufacturerInstance = new web3.eth.Contract(
				Manufacturer.abi,
				"0x10E9f87a68F5ff58d85488441bF28f1c3eE2421E"
			);

			const itemInstance = new web3.eth.Contract(
				Item.abi,
				"0x10E9f87a68F5ff58d85488441bF28f1c3eE2421E"
			);
			// const ownableInstance = new web3.eth.Contract(
			// 	Ownable.abi,
			// 	Ownable.networks[networkId] && Ownable.networks[networkId].address
			// );
			const data = await manufacturerInstance.methods
				.createItemManufactuter(
					itemSerialNumber,
					itemName,
					itemSource,
					itemDestination,
					web3.utils.toWei("1", "ether")
				)
				.send({ from: accounts[0] });

			console.log("dsd", data);
			alert(data.events.manufacturerItem.returnValues._item);
			setValues(
				`Serial Number: ${data.events.manufacturerItem.returnValues.itemNumber}, Item Name: ${data.events.manufacturerItem.returnValues.itemName}, Source: ${data.events.manufacturerItem.returnValues.itemSource}, Destination: ${data.events.manufacturerItem.returnValues.itemDestination}`
			);
		} catch (error) {
			setError(`Some error occurred , please try again`);
		}
	};

	return (
		<div>
			<button
				className="lbtn"
				onClick={handleOpen}>
				Open
			</button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description">
				<div className="style">
					<span className="heading">Create Item</span>
					<Qrcode
						value={values}
						className="qr"
					/>
					<button
						className="modalButton"
						onClick={handleCreate}>
						Create Item with QR code
					</button>
					{error && <span style={{ color: "red" }}>{error}</span>}
				</div>
			</Modal>
		</div>
	);
}
