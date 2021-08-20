import React, { useReducer } from "react";
import cartReducer from "./cart-reducer";
import CartContext from "./cart-context";
import {
	Add_Item,
	Delete_All_Item,
	Delete_Item,
	Fetch_Item,
	Fetch_Total_Price,
} from "./cart-actions";
function CartState(props) {
	const initiaState = {
		Items: [],
		TotalPrice: 0,
	};
	const [state, dispatch] = useReducer(cartReducer, initiaState);
	const fetchItems = () => {
		dispatch({
			type: Fetch_Item,
		});
	};
	let ItemCount = state.Items.length;
	//add_to_cart
	const addItems = (cartItem) => {
		console.log("cartadditems", cartItem);
		dispatch({
			type: Add_Item,
			payload: cartItem,
		});
	};
	//delete_from_cart
	const removeItem = (ItemId) => {
		dispatch({
			type: Delete_Item,
			payload: ItemId,
		});
	};
	//delete all_from_cart
	const removeAllItem = () =>
		dispatch({
			type: Delete_All_Item,
		});
	const total = () => {
		dispatch({
			type: Fetch_Total_Price,
		});
	};

	return (
		<CartContext.Provider
			value={{
				state: state,
				addItems,
				removeItem,
				removeAllItem,
				fetchItems,
				ItemCount,
				total,
			}}>
			{props.children}
		</CartContext.Provider>
	);
}

export default CartState;
