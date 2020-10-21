import React, { useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Nav/Navbar';
import Footer from '../components/Footer/Footer';
import Newsletter from '../components/Newsletter/Newsletter';
import { Services, Products } from '../data/Products';
import { Nav } from 'react-bootstrap';
import { ProductGrid } from '../components/Product/Product';
import { Container } from 'react-bootstrap';

const ProductsPage = () => {
	const location = useLocation();
	const [ tab, setTab ] = useState('services');
	// Scroll to top if path changes
	useLayoutEffect(
		() => {
			window.scrollTo(0, 0);
		},
		[ location.pathname ]
	);

	return (
		<div>
			<Navbar active="Products" />
			<header style={{ padding: '5%' }}>
				<h1 className="banner-text">Our Offerings</h1>
				<div className="categories">
					<Nav activeKey={tab} onSelect={(selectedTab) => setTab(selectedTab)}>
						<Nav.Item>
							<Nav.Link eventKey="products">Products</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="services">Services</Nav.Link>
						</Nav.Item>
					</Nav>
				</div>
			</header>
			<Container>
				{tab === 'services' && <ProductGrid data={Services} type="card" />}
				{tab === 'products' && <ProductGrid data={Products} type="card" pos="center top" />}
			</Container>
			<Newsletter />
			<Footer />
		</div>
	);
};

export default ProductsPage;
