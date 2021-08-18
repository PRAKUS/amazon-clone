import React from "react";
import Template from "../Global/Template";
import "./css/card.css";

const AddAddress = (props) => {
	return (
		<div className='d-flex item-center AdressCard flex-column '>
			<img src='image/icon/plus.png' alt='' />
			<h2 className='font-1'>Add address</h2>
		</div>
	);
};
const AddressCard = (props) => {
	let header = (
		<div className='d-flex Address_header '>
			{" "}
			<p className='m-0 font-sm'>Default:</p>
			<p className='m-0 fontDark-sm'>Amazon</p>
		</div>
	);
	return (
		<div className='AdressCard'>
			{props.header ? header : ""}
			<div className='Address_body '>
				<p className='m-0 sm-header'>Pramod Thapa</p>
				<p className='m-0 font-md-dark '>
					Excel Engineer College Boys Hostel Salem-kochi highway 544 SANKARI,
					TAMIL NADU 637303 India
				</p>
				<p className='m-0 font-md-dark'>Phone Number:{props.phoneNumber}</p>
			</div>
			<div className='d-flex Address_fotter'>
				<p className='m-0'>Edit</p>
				<p className='m-0'>Remove</p>
			</div>
		</div>
	);
};

function Address(props) {
	return (
		<div>
			<Template lg={true}>
				<Template.Center>
					<h2>Your Addresses</h2>
					<div className='d-flex' style={{ flexWrap: "wrap" }}>
						<AddAddress />
						<AddressCard header={true} />
						<AddressCard />
						<AddressCard />
						<AddressCard />
						<AddressCard />
					</div>
				</Template.Center>
			</Template>
		</div>
	);
}

export default Address;
