import React from "react";
import "../css/addcart.css";

function AddCart() {
	return (
		<div className='addcart_container'>
			<button className='addcard_btn cart_btn'>Add to Cart</button>
			<button className='addcard_btn buy_btn'>Buy Now</button>
		</div>
	);
}

export default AddCart;
