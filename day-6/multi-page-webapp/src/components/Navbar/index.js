import React from 'react';
import { Nav, NavMenu, NavLink } from './NavbarElements';

const Navbar = () => {
	<>
		<Nav>
			<NavMenu>
				<NavLink to='/about' activeStyle> About </NavLink>
				<NavLink to='/contact' activeStyle> Contact </NavLink>
				<NavLink to='/blogs' activeStyle> Blogs </NavLink>
				<NavLink to='/sign-up' activeStyle> Sign Up </NavLink>
			</NavMenu>
		</Nav>
	</>
};

export default Navbar;
