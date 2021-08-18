import React from "react";
import "./css/Rating.css";

const Star = (props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			enableBackground='new 0 0 24 24'
			height='24px'
			viewBox='0 0 24 24'
			width='24px'
			fill={props.fill}>
			<g>
				<rect fill=' none' height='24' width='24' />
				<path
					stroke={props.stroke}
					d='M14.43,10l-1.47-4.84c-0.29-0.95-1.63-0.95-1.91,0L9.57,
                        10H5.12c-0.97,0-1.37,1.25-0.58,1.81l3.64,2.6l-1.43,
                        4.61 c-0.29,
                        0.93,
                        0.79,
                        1.68,
                        1.56,
                        1.09L12,
                        17.31l3.69,
                        2.81c0.77,
                        0.59,
                        1.85-0.16,
                        1.56-1.09l-1.43-4.61l3.64-2.6 c0.79-0.57,
                        0.39-1.81-0.58-1.81H14.43z'
				/>
			</g>
		</svg>
	);
};

function Rating(props) {
	let rate = props.rate;
	let value = props.value;
	let star = [];
	if (rate) {
		if (value > 5) {
			value = 5;
		}
		if (value < 0) {
			value = 0;
		}

		for (let i = 0; i < value; i++) {
			star.push(<Star key={"gold" + i} fill='gold' stroke='gold' />);
		}
		if (star.length < 5) {
			for (let i = value; i < 5; i++) {
				star.push(<Star key={"gold" + i} fill='white' stroke='gold' />);
			}
		}
	}
	return <div className='rating-container'>{star}</div>;
}

export default Rating;
