import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Products } from '../../data/Products';

const Navbar = ({ activePath }) => {
	return (
		<Nav className="justify-content-center" activeKey={activePath}>
			<Nav.Item>
				<Nav.Link href={Products[3].path}>{Products[3].name}</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href={Products[4].path}>{Products[4].name}</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href={Products[5].path}>{Products[5].name}</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href={Products[6].path}>{Products[6].name}</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href={Products[7].path}>{Products[7].name}</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href={Products[8].path}>{Products[8].name}</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href={Products[9].path}>{Products[9].name}</Nav.Link>
			</Nav.Item>
			<NavDropdown title="Mas" id="nav-dropdown">
				<Nav.Link href={Products[10].path}>{Products[10].name}</Nav.Link>
				<Nav.Link href={Products[11].path}>{Products[11].name}</Nav.Link>
				<Nav.Link href={Products[12].path}>{Products[12].name}</Nav.Link>
				<Nav.Link href={Products[13].path}>{Products[13].name}</Nav.Link>
				<Nav.Link href={Products[1].path}>{Products[1].name}</Nav.Link>
				<Nav.Link href={Products[2].path}>{Products[2].name}</Nav.Link>
				<Nav.Link href={Products[0].path}>{Products[0].name}</Nav.Link>
				<Nav.Link href={Products[14].path}>{Products[14].name}</Nav.Link>
			</NavDropdown>
		</Nav>
	);
};

export default Navbar;
