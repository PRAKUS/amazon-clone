import React from "react";
import { Link } from "react-router-dom";
import "./css/Card.css";
const profile = {
	pic: "image/12.jpg",
	name: "Something",
	date: "2015",
};
const Thumbnails = (props) => {
	return (
		<Link to={props.link} className='thumbnails_container'>
			<div className='thumbnails-pic'>
				<img src={props.img} alt='' />
			</div>
			<p className='thumbnails_des'>{props.des}</p>
		</Link>
	);
};

const SmProfileCard = (props) => {
	return (
		<div className='smProfile_container'>
			<img className='smProfilePic' src={props.profile.pic} alt='profile pic' />
			<div className='d-flex flex-column'>
				<h2 className='m-0'>Hi,{props.profile.name}</h2>
				<small>Customer since {props.profile.date}</small>
			</div>
		</div>
	);
};
const Card = (props) => {
	return (
		<div
			className={`${props.className} ${props.fluid ? "card-fluid" : " "}`}
			style={props.style}>
			{props.children}
		</div>
	);
};
Card.Header = (props) => {
	return (
		<div className={props.className} style={props.style}>
			{props.children}
		</div>
	);
};
Card.Body = (props) => {
	return (
		<div className={`   ${props.className}`} style={props.style}>
			{props.children}
		</div>
	);
};
Card.Footer = (props) => {
	return (
		<div className={` + ${props.className}`} style={props.style}>
			{props.children}
		</div>
	);
};
Card.Img = (props) => {
	return (
		<div className={`bigpic_container ${props.className}`} style={props.style}>
			<img alt={props.des} src={props.img} />
		</div>
	);
};

const Card1 = (props) => {
	return (
		<Card>
			<Card.Header>
				<SmProfileCard profile={profile} />
			</Card.Header>
			<Card.Body style={{ paddingBottom: "0.5em" }}>
				<div className='d-flex'>
					<Thumbnails img='image/12.jpg' des='Your order'></Thumbnails>
					<Thumbnails
						img='image/12.jpg'
						des='Mobiles and Accessories'></Thumbnails>
				</div>
				<div className='d-flex'>
					<Thumbnails img='image/12.jpg' des='Fashion'></Thumbnails>
					<Thumbnails img='image/12.jpg' des='Grocery'></Thumbnails>
				</div>
			</Card.Body>
		</Card>
	);
};

const Card2 = (props) => {
	return (
		<Card>
			<Card.Header>
				<h2 className='m-0'>{props.header}</h2>
			</Card.Header>
			<Card.Body>
				<Card.Img img={props.img} />
			</Card.Body>
			<Card.Footer>see more</Card.Footer>
		</Card>
	);
};

Card.defaultProps = {
	className: "card_container",
	fluid: false,
};
Card.Header.defaultProps = {
	className: "card-header   ",
};
Card.Footer.defaultProps = {
	className: "card-footer ",
	link: "/",
};
Card.Body.defaultProps = {
	className: " card-body",
	link: "/",
};
Card.Img.defaultProps = {
	className: " ",
};
export { Card1, SmProfileCard, Card2, Card };
