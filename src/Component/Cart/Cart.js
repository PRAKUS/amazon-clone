import React, { useContext, useEffect, useState } from "react";
import CartCard from "./component/CartCard";
import "./css/cart.css";
import cartContext from "../../Context/CartContext/cart-context";

function Cart() {
	const { state, removeItem, removeAllItem, total } = useContext(cartContext);
	const [product, setproduct] = useState([]);

	useEffect(() => {
		setproduct(state.Items);
		total();
	}, [state.Items]);

	return (
		<div className='home_container p-2'>
			<div className='cart_conainer'>
				<div className='cart_main'>
					<div className='cart_header'>
						<div>
							<h2 className='m-0'>Shopping Cart</h2>
							<small
								className='cursor'
								onClick={() => {
									removeAllItem();
								}}>
								Remove all
							</small>
						</div>
						<div>
							<p className='text-right m-0 font-sm'>Price</p>
						</div>
					</div>
					{product.map((product, id) => {
						return (
							<CartCard
								key={id}
								data={product}
								deleteItem={() => {
									removeItem(product.id);
								}}
							/>
						);
					})}
					<div className='d-flex flex-row content-between'>
						<p className='m-0'>total:</p>
						<p className='text-right m-0' style={{ color: "orange" }}>
							{state.TotalPrice}
						</p>
					</div>
				</div>
				<div className='cart_ads'>b</div>
			</div>
		</div>
	);
}

export default Cart;
