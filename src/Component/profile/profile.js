import React from "react";
import Template from "../Global/Template";
import "./css/card.css";
import { Link } from "react-router-dom";
function profile() {
	return (
		<div>
			<Template lg={true}>
				<Template.Center>
					<div className='d-flex flex-column'>
						<div>
							<h2>Login & Security</h2>
						</div>
						<div classname='d-flex'>
							<div className='profileCard'>
								<span className='profileName'>
									<label className='font-1'>Name</label>
									<p className='m-0 font-sm'>Pramod</p>
								</span>
								<Link to='/'>
									<button className='editProfile'>Edit</button>
								</Link>
							</div>
							<div className='profileCard'>
								<span>
									<label className='font-1'>Email</label>
									<p className='m-0 font-sm'>Pramod</p>
								</span>
								<Link to='/'>
									<button className='editProfile'>Edit</button>
								</Link>
							</div>
							<div className='profileCard'>
								<span>
									<label className='font-1'>Mobile Phone Number</label>
									<p className='m-0 font-sm'>Pramod</p>
								</span>

								<Link to='/'>
									<button className='editProfile'>Edit</button>
								</Link>
							</div>
							<div className='profileCard'>
								<span>
									<label className='font-1'>Password</label>
									<p className='m-0 font-sm'>Pramod</p>
								</span>
								<Link to='/'>
									<button className='editProfile'>Edit</button>
								</Link>
							</div>
						</div>
					</div>
				</Template.Center>
			</Template>
		</div>
	);
}

export default profile;
