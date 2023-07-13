import React from 'react';
import { useLocation } from 'react-router-dom';
import { Tabs, Tab } from '@mui/material';

const LinkTab = (props) => {
	return (<Tab component='a' {...props}/>);
}

const Navbar = () => {
	const links = [
		{ label: 'To-Do', link: '/to-do' },
		{ label: 'Weather', link: '/weather' },
		{ label: 'Book Search', link: '/book-search' }
	]
	const location = useLocation().pathname;
	// console.log(location);
	const value = links.findIndex(({ link }) => link === location) + 1;

	return (
		<nav style={{
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap',
			justifyContent: 'space-between'
		}}>
			<Tab component='a' label='All In One' href='/' />
			<Tabs value={value} aria-label='nav tabs example'>
				<LinkTab style={{ display: 'none' }} />
				{ links.map(({label, link}, i) => <LinkTab label={label} href={link} key={i}/>) }
			</Tabs>
		</nav>
	);
};

export default Navbar;
