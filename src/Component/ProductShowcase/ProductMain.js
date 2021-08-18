import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import Menu2 from "../Menu/Menu2";
import ProductView from "./component/ProductView";
import ProductDescription from "./component/ProductDescription";
import AddCart from "./component/AddCart";
import ProductSlider from "../Home/component/ProductSlider";
import Template from "../Global/Template";
import QAContainer from "../ProductShowcase/component/QAContainer";

import ProductContext from "../../Context/ProductContext/product-context";
import axios from "axios";
function ProductMain() {
	const { product, addProduct } = useContext(ProductContext);
	const location = useLocation();
	let link = location.state.link + location.search;
	useEffect(() => {
		fetchData();
		window.scrollTo(0, 0);
	}, []); //link dependencency is for page refresh.
	async function fetchData() {
		const res = await axios.get(link);
		console.log("res", res);
		addProduct(res.data[0]);
	}
	return (
		<div>
			<Menu2 />

			<div className='home_container '>
				<div>
					<span style={{ textAlign: "center" }}>
						<p className='m-0'>
							<img src='image/add.jpg' alt='' />
						</p>
					</span>
				</div>
				<Template lg={false}>
					<Template.Left>
						<ProductView img={product.product[0]} />
					</Template.Left>
					<Template.Center>
						{console.log(product)}
						<ProductDescription data={product.product[0]} />
					</Template.Center>
					<Template.Right>
						<AddCart />
					</Template.Right>
				</Template>
				<div>
					<ProductSlider
						header={{ title: "Today's Deal", titlelink: "See more" }}
						product={[]}
						link='http://localhost:3002/product?_all'
					/>
				</div>
				<div className='section-container'>
					<QAContainer />
				</div>
			</div>
		</div>
	);
}

export default ProductMain;
