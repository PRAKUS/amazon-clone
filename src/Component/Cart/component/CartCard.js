import React from "react";
import { useState } from "react";

function CartCard(props) {
	const [value, setValue] = useState(1);
	const valueHandler = (event) => {
		event.persist();
		setValue(event.target.value);
	};
	return (
		<div className='CartCard_container'>
			<span className='d-flex flex-row item-center'>
				<input type='checkbox' />
				<img className='CardCart_img' src={props.img} alt='' />
			</span>
			<div className='d-flex flex-column ml-2'>
				<h3 className='m-0'>{props.productName}</h3>
				<small></small>
				<div className='d-flex'>
					<select value={value} onChange={valueHandler}>
						<option vlaue={0}>0 (Delete)</option>
						<option vlaue={1}>1</option>
						<option vlaue={2}>2</option>
						<option vlaue={3}>3</option>
						<option vlaue={4}>4</option>
						<option vlaue={5}>5</option>
						<option vlaue={6}>6</option>
						<option vlaue={7}>7</option>
						<option vlaue={8}>8</option>
						<option vlaue={9}>9</option>
						<option vlaue={10}>10+</option>
					</select>
					<p
						className='m-0 ml-2 font-sm pl-3'
						style={{ borderLeft: "0.5px solid rgba(226, 226, 226, 0.979)" }}>
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
			<span className='ml-auto my-0  font-md'>{props.price}</span>
		</div>
	);
}

export default CartCard;
