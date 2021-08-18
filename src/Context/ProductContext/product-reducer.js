import { Fetch_All, Fetch_Id, Add_Product } from "./product-actions";

const productReducer = (state, action) => {
	switch (action.type) {
		case Add_Product:
			return {
				...state,
				product: [action.payload],
			};
		case Fetch_All:
			break;

		case Fetch_Id:
			break;
		default:
			return state;
	}
};

export default productReducer;
