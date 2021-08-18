/* 

    This component is use for giving the
    product details.Same as the amazon productpage middle container. 

*/

import React from "react";
import "../css/productdes.css";
import Rating from "../../Global/Rating";

const SmIcon = (props) => {
	return (
		<div className='sm-icon-container'>
			<img className='sm-icon' src={props.img} alt=' ' />
			<p className='sm-info'>{props.des}</p>
		</div>
	);
};

function ProductDescription(props) {
	try {
		const data = props.data; //data is declared for the api
		const productDetail = data.details;
		const productDes = data.description;

		const value = Object.values(productDetail);
		const header = Object.keys(productDetail);

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
						<SmIcon
							img='image/icon/icon-returns.png'
							des='7 Days Replacement'
						/>
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
						<tbody>
							{value.map((value, i) => {
								return (
									<tr key={i}>
										<td className='font-black'>{header[i]}</td>
										<td className='prodes-detial'>{value}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
				<div>
					<p className='font-black'>About this item </p>
					<ul className='product_about'>
						{productDes.map((des, id) => {
							return <li key={id}>{des}</li>;
						})}
					</ul>
				</div>
			</div>
		);
	} catch {
		return <div>loading</div>;
	}
}

export default ProductDescription;
