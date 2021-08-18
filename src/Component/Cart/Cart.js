import React from "react";
import CartCard from "./component/CartCard";
import "./css/cart.css";

function Cart() {
	return (
		<div className='home_container p-2'>
			<div className='cart_conainer'>
				<div className='cart_main'>
					<div className='cart_header'>
						<div>
							<h2 className='m-0'>Shopping Cart</h2>
							<small>Deselect all</small>
						</div>
						<div>
							<p className='text-right m-0 font-sm'>Price</p>
						</div>
					</div>
					<CartCard />
				</div>
				<div className='cart_ads'>b</div>
			</div>
		</div>
	);
}

export default Cart;
