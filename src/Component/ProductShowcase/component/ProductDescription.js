/* 

    This component is use for giving the
    product details.Same as the amazon productpage middle container. 

*/

import React, { useState, useEffect } from "react";
import "../css/productdes.css";
import Rating from "../../Global/Rating";
import { useLocation } from "react-router";
import axios from "axios";

const SmIcon = (props) => {
	return (
		<div className='sm-icon-container'>
			<img className='sm-icon' src={props.img} alt=' ' />
			<p className='sm-info'>{props.des}</p>
		</div>
	);
};

function ProductDescription(props) {
	const location = useLocation();
	let link = location.state.link + location.search;
	const [data, setdata] = useState([]); //data is declared for the api
	const [header, setheader] = useState(); //It is a description header
	const [description, setdescription] = useState(); //It is an description of item {it create  a table }
	async function fetchData() {
		const res = await axios.get(link);
		setdata(res.data[0]);
	}

	useEffect(() => {
		fetchData();
		HeaderHandler(data.details);
		DescriptionHandler(data.description);
		window.scrollTo(0, 0);
	}, [link]); //link dependencency is for page refresh.
	const HeaderHandler = (detail) => {
		let details = detail;
		try {
			const header = Object.keys(details);
			const value = Object.values(details);

			const elementHeader = header.map((header, i) => {
				return (
					<tr key={i}>
						<td className='font-black'>{header}</td>
						<td className='prodes-detial'>{value[i]}</td>
					</tr>
				);
			});
			setheader(elementHeader);
		} catch (err) {
			setheader();
		}
	};

	const DescriptionHandler = (des) => {
		try {
			const elementDescription = des.map((des, id) => {
				return <li key={id}>{des}</li>;
			});
			setdescription(elementDescription);
		} catch (err) {
			setdescription("no detail Avaialable");
		}
	};

	return (
		<div>
			<header className='prodes_header'>
				<label className='header1'>{data.name}</label>
				<label className='sm-header'>Brands:{data.brand}</label>
				<div className='prodes_rate'>
					<Rating rate={true} value={data.rating}></Rating>
					<p className='ml-1'>{data.noofrating} rating</p>
					<p>| {data.qaNo} answered questions</p>
				</div>
			</header>
			<div className='prodes_price'>
				<table className='d-flex flex-column '>
					<tbody>
						<tr className='text-center'>
							<td className='text-right font-1'>M.R.P:</td>
							<td className='text-left   font-red underline'>{data.mrp}</td>
						</tr>
						<tr>
							<td className='text-right font-1'>Price:</td>
							<td className='text-left font-red'>{data.price}</td>
						</tr>
						<tr>
							<td className='text-right font-1'>You Save:</td>
							<td className='text-left font-red'>
								{parseInt(data.mrp) - parseInt(data.price)} Insclusive of all
								taxes
							</td>
						</tr>
					</tbody>
				</table>
				<div className='d-flex flex-row '>
					<SmIcon
						img='image/icon/icon-amazon-delivered.png'
						des='7 Days Deliver'
					/>
					<SmIcon img='image/icon/icon-returns.png' des='7 Days Replacement' />
					<SmIcon img='image/icon/icon-warranty.png' des='1 year Warranty' />
					<SmIcon
						img='image/icon/No_contact_delivery_final.png'
						des='No contact delivery'
					/>
				</div>
			</div>
			<div className='prodes_about'>
				<p>{data.stock ? "In Stock" : "Out Of Stock"}</p>
				<p>Sold by {data.seller}. and Fullfilled by Amazon</p>
				<table>
					<tbody>{header}</tbody>
				</table>
			</div>
			<div>
				<p className='font-black'>About this item </p>
				<ul className='product_about'>{description}</ul>
			</div>
		</div>
	);
}

export default ProductDescription;
