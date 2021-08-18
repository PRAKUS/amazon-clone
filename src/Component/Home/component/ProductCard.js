import React from "react";

const ProductCard = (props) => {
	return (
		<div className={`${props.className} product_container `}>
			{props.children}
		</div>
	);
};

ProductCard.Img = (props) => {
	return (
		<img
			src={props.src}
			className={`${props.className} ${props.sm ? "smProduct" : " "} `}
			alt=''
		/>
	);
};
ProductCard.Price = (props) => {
	return (
		<div className={`${props.className} `}>
			<p>{props.value}</p>
			<p>{props.prevValue}</p>
		</div>
	);
};

ProductCard.defaultProps = {
	className: " ",
};

ProductCard.Img.defaultProps = {
	sm: false,
};

export default ProductCard;
