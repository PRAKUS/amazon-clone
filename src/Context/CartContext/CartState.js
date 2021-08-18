import React, { useReducer } from "react";
import cartReducer from "./cart-reducer";
import CartContext from "./cart-context";
import { Add_Item, Delete_All_Item, Delete_Item } from "./cart-actions";
function CartState(props) {
	const initiaState = {
		itemCount: 0,
		Cart: [],
	};
	const [state, dispatch] = useReducer(cartReducer, initiaState);

	//add_to_cart
	const addItems = (cartItem) => {
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

	return (
		<CartContext
			value={{
				itemcount: state.itemCount,
				cart: state.Cart,
				addItems,
				removeItem,
				removeAllItem,
			}}>
			{props.children}
		</CartContext>
	);
}

export default CartState;
