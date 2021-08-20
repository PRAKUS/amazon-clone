import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../css/addcart.css";
import cartContext from "../../../Context/CartContext/cart-context";
function AddCart(props) {
	const { addItems } = useContext(cartContext);
	const addCartHandler = () => {
		console.log("addCart", props.data);
		addItems(props.data);
	};
	return (
		<div className='addcart_container'>
			<Link
				to={{
					pathname: `cart`,
				}}
				onClick={addCartHandler}>
				<button className='addcard_btn cart_btn'>Add to Cart</button>
			</Link>
			<button className='addcard_btn buy_btn'>Buy Now</button>
		</div>
	);
}

export default AddCart;
