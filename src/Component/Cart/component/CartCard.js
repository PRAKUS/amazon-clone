import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const initialState = { id: "", name: "", img: "", price: "" };
const CartCard = ({ data, deleteItem }) => {
	const [value, setValue] = useState(1);
	const [product, setProduct] = useState(initialState);

	useEffect(() => {
		setProduct(data);
		if (value === "0") {
			deleteItem();
		}
	}, [value]);

	const valueHandler = (event) => {
		event.persist();
		setValue(event.target.value);
	};

	return (
		<div className='CartCard_container'>
			<span className='d-flex flex-row CardCart_img_container'>
				<img className='CardCart_img' src={product.img} alt={product.name} />
			</span>
			<div className='d-flex flex-column ml-2'>
				<h3 className=''>
					<Link
						to={{
							pathname: `item`,
							search: `?id=${product.id}`,
							state: { link: "http://localhost:3002/product" },
						}}>
						{product.name}
					</Link>
				</h3>
				<small></small>
				<div className='d-flex'>
					<select value={value} onChange={valueHandler}>
						<option value={0}>0 (Delete)</option>
						<option value={1}>1</option>
						<option value={2}>2</option>
						<option value={3}>3</option>
						<option value={4}>4</option>
						<option value={5}>5</option>
						<option value={6}>6</option>
						<option value={7}>7</option>
						<option value={8}>8</option>
						<option value={9}>9</option>
						<option value={10}>10+</option>
					</select>
					<p
						className='m-0 ml-2 font-sm pl-3 cursor'
						style={{ borderLeft: "0.5px solid rgba(226, 226, 226, 0.979)" }}
						onClick={deleteItem}>
						Delete
					</p>
					<p
						className='m-0 ml-2 font-sm pl-3'
						style={{ borderLeft: "0.5px solid rgba(226, 226, 226, 0.979)" }}>
						Save for Later
					</p>
					<p
						className='m-0 ml-2 font-sm pl-3'
						style={{ borderLeft: "0.5px solid rgba(226, 226, 226, 0.979)" }}>
						See more like this
					</p>
				</div>
			</div>
			<span className='ml-auto my-0  font-md'>{product.price}</span>
		</div>
	);
};

export default CartCard;
