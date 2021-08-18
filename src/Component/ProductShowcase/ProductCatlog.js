import React, { useEffect, useState } from "react";
import Rating from "../Global/Rating";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

import "./css/main.css";

const ProductContainer = (props) => {
	return (
		<div className='catlog-card'>
			<div className='catlogImg-container d-flex item-center'>
				<img
					className='catlog-img'
					src={props.product.img}
					alt={props.product.name}
				/>
			</div>

			<div className='d-flex flex-column  '>
				<Link
					to={{
						pathname: `item`,
						search: `?id=${props.product.id}`,
						state: { link: "http://localhost:3002/product" },
					}}>
					<p className='m-0 font-black'>{props.product.name}</p>
					<Rating rate={true} value={props.product.rating} />
					<span className='d-flex flex-row item-baseline'>
						<span className='font-lg'>₹</span>
						<p className='m-0 font-lg'>{props.product.price}</p>
						<p className='m-0 fontDark-sm ml-1 underline'>
							{props.product.mrp}
						</p>
						<p className='m-0 ml-1'>
							Save {parseInt(props.product.mrp) - parseInt(props.product.price)}
						</p>
					</span>
				</Link>
			</div>
		</div>
	);
};

function ProductCatlog() {
	const location = useLocation();
	console.log(location);
	const [data, setdata] = useState([]);
	useEffect(() => {
		axios.get(location.state.link).then((res) => {
			setdata(res.data);
		});
	}, [location.state]);

	return (
		<div className='catlog_container'>
			<div className='pfilter'></div>
			<div className='pmain'>
				{data.map((product, id) => {
					return <ProductContainer key={id} product={product} />;
				})}
			</div>
		</div>
	);
}

export default ProductCatlog;
