import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Nav, NavMenu, NavLink } from './NavbarElements';

const Navbar = () => {
	return (<div>
		<Nav>
			<NavMenu>
				<NavLink to='/about' activestyle='true'> About </NavLink>
				<NavLink to='/contact' activestyle='true'> Contact </NavLink>
				<NavLink to='/blogs' activestyle='true'> Blogs </NavLink>
				<NavLink to='/sign-up' activestyle='true'> Sign Up </NavLink>
			</NavMenu>
		</Nav>
	</div>);
};

export default Navbar;
