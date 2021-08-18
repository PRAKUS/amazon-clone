import React, { useRef, useState } from "react";
import "../css/productview.css";
let img = [
	"image/product/img1.jpg",
	"image/product/img7.jpg",
	"image/product/img3.jpg",
	"image/product/img4.jpg",
	"image/product/img5.jpg",
	"image/product/img6.jpg",
];
function ProductView() {
	const select = useRef(null);
	const [data, setData] = useState(0);

	const selector = (id) => {
		let element = select.current;

		for (let i = 0; i < element.children.length; i++) {
			element.children[i].style.boxShadow = "  0px 0px 8px  transparent";
		}
		setData(id);

		element.children[id].style.boxShadow = " 0px 0px 8px  orange ";
	};

	let element = img.map((img, i) => {
		return (
			<li
				key={i}
				onMouseEnter={() => {
					selector(i);
				}}>
				<img style={{ height: "100%" }} src={img} alt='' />
			</li>
		);
	});

	return (
		<div className='pro-container'>
			<div className='pro-smimg'>
				<ul ref={select} className='pro-smimg-list'>
					{element}
				</ul>
			</div>
			<div className='pro-lgimg'>
				<img style={{ height: "100%", width: "100%" }} src={img[data]} alt='' />
			</div>
		</div>
	);
}

export default ProductView;
