import React from "react";
import { Link } from "react-router-dom";
import Template from "../Global/Template";
import { Card } from "../Home/component/Card";
import "./css/orderCard.css";

function Order(props) {
	return (
		<div>
			<Template lg={true}>
				<Template.Center>
					<div>
						<p className='header1'>Your Order</p>
					</div>
					<Card className='orderCard_container'>
						<Card.Header className='orderCard_header '>
							<div className='d-flex flex-row py-2 '>
								<span>
									<p className='font-sm'>ORDER PLACED</p>
									<p>{props.date}</p>
								</span>
								<span className='ml-4'>
									<p className='font-sm'>TOTAL</p>
									<p>{props.totalamount}</p>
								</span>
								<span className='ml-4'>
									<p className='font-sm'>SHIP TO</p>
									<p>{props.UserName}</p>
								</span>
							</div>
						</Card.Header>
						<Card.Body className='p-2'>
							<h2 className='m-0'>Delivered {props.deliveredDate}</h2>
							<div className='d-flex flex-row pt-2 '>
								<img className='order_img' src='image/12.jpg' alt='' />
								<div className='d-flex flex-column ml-2'>
									<span>
										<p className='font-md m-0'>
											AOSONG DHT22 Digital Temperature and Humidity Sensor
											Module AM2302
										</p>
										<p className='font-xs m-0'>Returned closed on </p>
									</span>
									<Link to='/' className='order-btn reorder reorder mt-1'>
										Buy it again
									</Link>
								</div>
								<div className='ml-auto'>
									<Link to='/' className='order-btn review-btn'>
										Write a product review
									</Link>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Template.Center>
			</Template>
		</div>
	);
}

export default Order;
