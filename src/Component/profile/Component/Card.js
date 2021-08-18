import React from "react";
import { Link } from "react-router-dom";
import "../css/card.css";

function Card(props) {
	return (
		<Link to={props.link} className='pdcard_container'>
			<img className='pdcard_icon' src={props.icon} alt='' />
			<div className='pdcard_tag'>
				<p className='m-0 header1'>{props.header}</p>
				<p className='m-0'>{props.tag}</p>
			</div>
		</Link>
	);
}

export default Card;

Card.defaultProps = {
	link: "/",
};
