import {
	Add_Item,
	Delete_All_Item,
	Delete_Item,
	Fetch_Total_Price,
} from "./cart-actions";

const cartReducer = (state, action) => {
	switch (action.type) {
		case Add_Item:
			return {
				...state,
				Items: [...state.Items, action.payload],
			};

		case Delete_Item:
			return {
				...state,
				Items: state.Items.filter((Items) => Items.id !== action.payload),
			};
		case Delete_All_Item:
			return {
				Items: [],
				TotalPrice: 0,
			};
		case Fetch_Total_Price: {
			let totalprice = 0.0;
			let items = state.Items;
			for (let i = 0; i < items.length; i++) {
				totalprice = parseFloat(totalprice) + parseFloat(items[i].price);
			}
			console.log(totalprice);
			return {
				...state,
				TotalPrice: parseFloat(totalprice).toFixed(2),
			};
		}
		default:
			return state;
	}
};

export default cartReducer;
