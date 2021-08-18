import React from "react";
import Template from "../Global/Template";
import Card from "./Component/Card";

function LoginDash() {
	return (
		<div>
			<Template lg={true}>
				<Template.Center>
					<h2>Your Account</h2>
					<div className='d-flex'>
						<Card
							icon='image/icon/deliver.png'
							header='Your Orders'
							tag='Track,return,or buy things again'
							link='/order'
						/>
						<Card
							icon='image/icon/lock.png'
							header='Login & security'
							tag='Edit login,name, and mobile number'
							link='/profile'
						/>
						<Card
							icon='image/icon/prime.png'
							header='Prime'
							tag='view benefits and payment setting'
						/>
					</div>
					<div className='d-flex'>
						<Card
							icon='image/icon/location.png'
							header='Your Addresses'
							tag='Edit addresses for orders and gifts'
							link='/address'
						/>
						<Card
							icon='image/icon/Payments.png'
							header='Payments options'
							tag='Edit or add payments methods'
						/>
						<Card
							icon='image/icon/amazon_pay.png'
							header='Amazon Pay balance'
							tag='Add money to your balance'
						/>
					</div>
				</Template.Center>
			</Template>
		</div>
	);
}

export default LoginDash;
