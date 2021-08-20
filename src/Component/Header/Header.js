import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
import "./Header.css";

import cartContext from "../../Context/CartContext/cart-context";

// const Dropdown = (props) => {
// 	<div>{props.children}</div>;
// };

const Header = () => {
	const { ItemCount } = useContext(cartContext);
	const [Item, setItem] = useState(0);
	useEffect(() => {
		setItem(ItemCount);
	}, [ItemCount]);

	return (
		<div className='header'>
			<Link to='/'>
				<img className='header_logo' alt='amazonlogo' src='image/logo.png' />
			</Link>
			<div className='header_address'>
				<div>
					<LocationOnIcon />
				</div>
				<div>
					<small className='hopt-1' style={{ color: "#aebecc" }}>
						Deliver to Prashant
					</small>
					<span className='hopt-2'>Sangseer Kaman</span>
				</div>
			</div>
			<div className='header_search'>
				<select className='header_select'>
					<option>All catrgories</option>
					<option>All catrgories</option>
					<option>All catrgories</option>
					<option>All catrgories</option>
					<option>All catrgories</option>
					<option>All catrgories</option>
				</select>
				<input className='header_searchInput' type='text' />
				<SearchIcon className='header_searchicon' />
			</div>
			<div className='header_nav'>
				<Link to='/login'>
					<div className='header_options'>
						<small className='hopt-1'>Hello Guest</small>
						<span className='hopt-2'>Sign in</span>
					</div>
				</Link>
				<Link to='/order'>
					<div className='header_options'>
						<small className='hopt-1'>Returns</small>
						<span className='hopt-2'>& Orders</span>
					</div>
				</Link>
				<Link to='/prime'>
					<div className='header_options'>
						<small className='hopt-1'>Your</small>
						<span className='hopt-2'>Prime</span>
					</div>
				</Link>
				<Link to='/cart'>
					<div className='header_cart'>
						<span>
							<AddShoppingCartOutlinedIcon className='cart_icon' />
						</span>
						<div className='d-flex flex-column'>
							<small
								className='m-0'
								style={{
									lineHeight: "0.2",
									textAlign: "center",
									color: "orange",
								}}>
								{Item}
							</small>
							<span className='cart-opt m-0'>Cart</span>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Header;
