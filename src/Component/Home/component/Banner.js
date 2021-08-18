import React, { useEffect, useRef, useState } from "react";
import "./css/banner.css";
import KeyboardArrowRightOutlinedIcon from "@material-ui/icons/KeyboardArrowRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@material-ui/icons/KeyboardArrowLeftOutlined";
import axios from "axios";
import { Link } from "react-router-dom";
const Banner = (props) => {
	const [counter, setCounter] = useState(1);
	const [data, setdata] = useState([]);
	const slide = useRef(null);
	async function fetch() {
		const res = await axios.get("http://localhost:3002/banner");
		setdata(res.data);
	}

	const leftSwipe = () => {
		let img = slide.current;
		if (counter < img.children.length - 1) {
			let newSlider = counter + 1;

			img.style.transition = "all .5s";
			img.style.transform = `translate(-${100 * newSlider}%)`;
			setCounter(newSlider);
		}

		if (counter === img.children.length - 2) {
			setTimeout(() => {
				img.style.transition = "none";
				img.style.transform = `translate(-100%)`;
				setCounter(1);
			}, 502);
		}
	};

	const rightSwipe = () => {
		let img = slide.current;
		if (counter > 0) {
			let newSlider = counter - 1;
			console.log("slider", newSlider);
			img.style.transition = "all .5s";
			img.style.transform = `translate(-${100 * newSlider}%)`;
			setCounter(newSlider);
		}
		if (counter === 1) {
			console.log("counter=0");
			let length = img.children.length - 2;
			setTimeout(() => {
				img.style.transition = "none";
				img.style.transform = `translate(-${100 * length}%)`;
				setCounter(img.children.length - 2);
			}, 502);
		}
	};
	useEffect(() => {
		fetch();

		try {
			let firstChild = slide.current.children[0].cloneNode(true);
			let lastChild =
				slide.current.children[slide.current.children.length - 1].cloneNode(
					true,
				);
			slide.current.insertBefore(lastChild, slide.current.children[0]);
			slide.current.append(firstChild);
			slide.current.style.transform = `translate(-${100}%)`;
		} catch (err) {}
	}, []);
	const BannerElement = data.map((data, id) => {
		return (
			<div key={id} className='carosoule'>
				<Link to={{ pathname: "/product", state: { link: data.link } }}>
					<img className='banner_img' src={data.image} alt='banner' />
				</Link>
			</div>
		);
	});

	return (
		<div className='banner_container'>
			<KeyboardArrowLeftOutlinedIcon
				onClick={rightSwipe}
				className='banner_btn btn-left'
			/>
			<KeyboardArrowRightOutlinedIcon
				onClick={leftSwipe}
				className='banner_btn btn-right'
			/>
			<div ref={slide} className='carsoule_container'>
				{BannerElement}
			</div>
		</div>
	);
};

export default Banner;
