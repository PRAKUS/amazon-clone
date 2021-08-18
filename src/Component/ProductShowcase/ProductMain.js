import React from "react";
import Menu2 from "../Menu/Menu2";
import ProductView from "./component/ProductView";
import ProductDescription from "./component/ProductDescription";
import AddCart from "./component/AddCart";
import ProductSlider from "../Home/component/ProductSlider";
import Template from "../Global/Template";
import QAContainer from "../ProductShowcase/component/QAContainer";

function ProductMain() {
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
						<ProductView />
					</Template.Left>
					<Template.Center>
						<ProductDescription />
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
