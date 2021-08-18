import React from "react";
import "./css/tooltip.css";
function Tooltip(props) {
	return <div className='tooltip-container'>{props.children}</div>;
}

Tooltip.Down = (props) => {
	return <div>{props.children}</div>;
};
Tooltip.Top = (props) => {
	return <div>{props.children}</div>;
};
Tooltip.Left = (props) => {
	return <div>{props.children}</div>;
};
Tooltip.Right = (props) => {
	return <div>{props.children}</div>;
};

export default Tooltip;
