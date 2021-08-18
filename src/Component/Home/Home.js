import React from "react";
import Banner from "./component/Banner";
import { Card1, Card2, Card } from "./component/Card";
import ProductSlider from "./component/ProductSlider";

import "./home.css";

const Home = (props) => {
	return (
		<div className='home_container '>
			<Banner />
			<div className='content-container'>
				<div className=' section-container '>
					<Card1 des='data'></Card1>
					<Card2
						header='Up to 70% off | Electronics clearance store'
						img='image/bigpic.jpg'
					/>
					<Card2 header='Oxygen concentrators' img='image/product1.jpg' />
					<Card fluid={true}>
						<Card.Header>
							<h2 className='m-0 '>Shop On the Amazon App</h2>
						</Card.Header>
						<Card.Body>
							Fast, convenient and secure | Over 17 crore products in your
							pocket
						</Card.Body>
						<Card.Footer>Download Amazon App</Card.Footer>
					</Card>
				</div>
				<div className=' section-container  ' style={{ marginTop: "2px" }}>
					<ProductSlider
						header={{ title: "Today's Deal", titlelink: "see more" }}
						link='http://localhost:3002/product?_all'
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
