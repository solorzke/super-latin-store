import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Col } from 'react-bootstrap';
import { Links } from '../../data/Links';
import Logo from '../../images/shape.png';

const Bar = ({ active }) => {
	const [ adjust, setAdjust ] = useState(false);
	useEffect(
		() => {
			window.innerWidth > 993 ? setAdjust(true) : setAdjust(false);
			const handleResize = () => {
				switch (window.innerWidth > 993) {
					case true:
						if (!adjust) setAdjust(true);
						break;
					default:
						if (adjust) setAdjust(false);
						break;
				}
			};
			window.addEventListener('resize', handleResize);
		},
		[ adjust ]
	);

	const NavItems = Links.map((item, index) => {
		return (
			<Nav.Link active={active === item.name ? true : false} href={item.path} key={index}>
				{item.name}
			</Nav.Link>
		);
	});

	const Wrapper = ({ children }) => {
		const Wrapped = () => <Col>{children}</Col>;
		const Unwrapped = () => children;
		return adjust ? <Wrapped /> : <Unwrapped />;
	};

	return (
		<div>
			<div className="light-banner">
				<p>30 Wilson Avenue, Newark, NJ 07105 | Lun - Dom @ 8am - 9pm</p>
			</div>
			<Navbar
				style={{ backgroundColor: '#7392B7', fontFamily: "'Bebas Neue', cursive" }}
				expand="lg"
				variant="dark"
			>
				<Wrapper
					children={
						<Navbar.Brand href="/">
							<span className="nav-brand">
								<img src={Logo} width="50" height="50" alt="Super Latin Store" />Super Latin Store
							</span>
						</Navbar.Brand>
					}
				/>

				{adjust && (
					<Wrapper
						children={
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav className="mx-auto parent">{NavItems}</Nav>
							</Navbar.Collapse>
						}
					/>
				)}

				<Wrapper
					children={
						<Navbar.Toggle
							aria-controls="basic-navbar-nav"
							children={<i style={{ color: '#fff' }} className="fas fa-align-right" />}
						/>
					}
				/>

				{!adjust && (
					<Wrapper
						children={
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav className="mx-auto parent">{NavItems}</Nav>
							</Navbar.Collapse>
						}
					/>
				)}
			</Navbar>
		</div>
	);
};

export default Bar;
