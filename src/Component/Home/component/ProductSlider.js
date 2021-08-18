import React, { useEffect, useRef, useState } from "react";
import "./css/Product.css";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductSlider(props) {
	let link = props.link;
	const slide = useRef(null);
	const [childerWidth, getChildrenWidth] = useState(200);
	const [currentSlide, getSlideNo] = useState(0);
	const [product, setProduct] = useState([]);
	useEffect(() => {
		fetch();
		getWidth();
	}, []);

	async function fetch() {
		let res = await axios.get(link);
		setProduct(res.data);
	}
	function getWidth() {
		try {
			let childerWidth = slide.current.children[0].offsetWidth;
			getChildrenWidth(childerWidth);
			console.log("chil", childerWidth);
		} catch (err) {
			console.log(err);
		}
	}

	const rightSwipe = () => {
		console.log("item", slide.current.children.length);
		if (
			currentSlide <
			slide.current.children.length /
				parseInt(window.screen.width / childerWidth)
		) {
			let newSlide = currentSlide + 1;
			getSlideNo(newSlide);
			slide.current.style.transitionDuration = "0.5s";
			slide.current.style.transform = `translate(-${
				newSlide * childerWidth
			}px)`;
		}
	};
	const leftSwipe = () => {
		if (currentSlide) {
			let newSlide = currentSlide - 1;
			getSlideNo(newSlide);
			slide.current.style.transitionDuration = "0.5s";
			slide.current.style.transform = `translate(-${
				childerWidth * newSlide
			}px)`;
		}
	};
	console.log(currentSlide);
	const productElement = product.map((product, id) => {
		return (
			<li style={{ backgroundColor: "white" }} key={id}>
				<Link
					to={{
						pathname: `item`,
						search: `?id=${id}`,
						state: { link: "http://localhost:3002/product" },
					}}>
					<ProductCard>
						<ProductCard.Img src={product.img} />
					</ProductCard>
				</Link>
			</li>
		);
	});

	return (
		<div className='productSlider_container'>
			<header className='productSlider_header'>
				<p className='header1'>{props.header.title}</p>
				<Link
					className='sm-header'
					style={{ marginLeft: "10px" }}
					to={{ pathname: "/product", state: { link: link } }}>
					{props.header.titlelink}
				</Link>
			</header>
			<div className='slider_section'>
				<KeyboardArrowLeftIcon onClick={leftSwipe} className='btn btn-left' />
				<KeyboardArrowRightIcon
					onClick={rightSwipe}
					className='btn btn-right'
				/>
				<div className='product_slider'>
					<ul ref={slide} className='product_items'>
						{productElement}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default ProductSlider;
