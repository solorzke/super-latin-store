import React from 'react';
import { Navbar, Nav, Col } from 'react-bootstrap';
import { Links } from '../../data/Links';

const Bar = ({ active }) => {
	const NavItems = Links.map((item, index) => {
		return (
			<Nav.Link active={active === item.name ? true : false} href={item.path} key={index}>
				{item.name}
			</Nav.Link>
		);
	});

	return (
		<Navbar style={{ backgroundColor: '#7392B7', fontFamily: "'Bebas Neue', cursive" }} expand="lg" variant="dark">
			<Col>
				<Navbar.Brand href="/">
					<span style={{ fontSize: 30 }}>
						<i className="fas fa-shipping-fast brand" /> Super Latin Store
					</span>
				</Navbar.Brand>
			</Col>
			<Col>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mx-auto parent">{NavItems}</Nav>
				</Navbar.Collapse>
			</Col>
			<Col className="text-right">
				<Navbar.Toggle
					aria-controls="basic-navbar-nav"
					children={<i style={{ color: '#fff' }} className="fas fa-align-right" />}
				/>
			</Col>
		</Navbar>
	);
};

export default Bar;
