import React from "react";
import "./css/template.css";

function Template(props) {
	return (
		<div
			className={
				props.lg
					? "lg-template template-container"
					: "sm-template  template-container"
			}>
			{props.children}
		</div>
	);
}

Template.Left = (props) => {
	return (
		<div className='left' style={props.style}>
			{props.children}
		</div>
	);
};
Template.Center = (props) => {
	return (
		<div className='main' style={props.style}>
			{props.children}
		</div>
	);
};

Template.Right = (props) => {
	return (
		<div className='right' style={props.style}>
			{props.children}
		</div>
	);
};

export default Template;

Template.defaultaProps = {
	lg: true,
};
