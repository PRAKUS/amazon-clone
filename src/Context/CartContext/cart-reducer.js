import { Add_Item, Delete_All_Item, Delete_Item } from "./cart-actions";

const cartReducer = (state, action) => {
	switch (action.type) {
		case Add_Item:
			return {};
		case Delete_Item:
			return {};
		case Delete_All_Item:
			return {};
		default:
			return state;
	}
};

export default cartReducer;
