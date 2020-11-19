import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

const Navbar = ({ activePath }) => {
	return (
		<Nav className="justify-content-center" activeKey={activePath}>
			<Nav.Item>
				<Nav.Link href="/products/product/medicine">Medicine &amp; Herbs</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/products/product/jewels">Jewels</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/products/product/perfumes">Perfumes/Colognes</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/products/product/masks">Masks</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/products/product/humitas">Humitas</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/products/product/albacora">Albacora</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/products/product/calling-cards">Calling Cards</Nav.Link>
			</Nav.Item>
			<NavDropdown title="More" id="nav-dropdown">
				<Nav.Link href="/products/product/beverages">Beverages</Nav.Link>
				<Nav.Link href="/products/product/copies">Copies</Nav.Link>
				<Nav.Link href="/products/product/electronics">Electronics</Nav.Link>
				<Nav.Link href="/products/product/smart-phones">Smart Phones</Nav.Link>
				<Nav.Link href="/products/product/snacks">Snacks</Nav.Link>
				<Nav.Link href="/products/product/groceries">Groceries</Nav.Link>
				<Nav.Link href="/products/product/toys">Toys</Nav.Link>
				<Nav.Link href="/products/product/apparel">Apparel</Nav.Link>
			</NavDropdown>
		</Nav>
	);
};

export default Navbar;
