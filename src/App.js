import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/Header";
import Menu from "./Component/Menu/Menu";
import Home from "./Component/Home/Home";
import Cart from "./Component/Cart/Cart";
import LoginDash from "./Component/profile/login";
import Order from "./Component/order/Order";
import Profile from "./Component/profile/profile";
import Address from "./Component/profile/Address";
import Main from "./Component/ProductShowcase/ProductMain";
import ProductCatlog from "./Component/ProductShowcase/ProductCatlog";

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Menu />

				<Switch>
					<Route path='/' component={Home} exact />
					<Route path='/home' component={Home} />
					<Route path='/product' component={ProductCatlog} exact />
					<Route path='/item' component={Main} exact />
					<Route path='/cart' component={Cart} />
					<Route path='/login' component={LoginDash} />
					<Route path='/order' component={Order} />
					<Route path='/profile' component={Profile} />
					<Route path='/address' component={Address} />
					<Route path='/cart' component={Cart} />
					<Route path='*'>
						<div className='d-flex item-center'>
							<h3>No page found</h3>
						</div>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
