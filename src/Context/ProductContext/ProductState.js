import React, { useReducer } from "react";
import ProductContext from "./product-context";
import productReducer from "./product-reducer";

import { Fetch_All, Fetch_Id, Add_Product } from "./product-actions";

const initialState = {
	product: [],
};

const ProductState = (props) => {
	const [State, productDispatch] = useReducer(productReducer, initialState);

	const fetchAll = (link) => {
		productDispatch({
			type: Fetch_All,
			payload: link,
		});
	};
	const fetchOne = (link) => {
		productDispatch({
			type: Fetch_Id,
			payload: link,
		});
	};
	const addProduct = (product) => {
		productDispatch({
			type: Add_Product,
			payload: product,
		});
	};

	return (
		<ProductContext.Provider
			value={{ product: State, fetchAll, fetchOne, addProduct }}>
			{props.children}
		</ProductContext.Provider>
	);
};
export default ProductState;
