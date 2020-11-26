import React, { useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Nav/Navbar';
import Footer from '../components/Footer/Footer';
import { Services, Products } from '../data/Products';
import { Nav } from 'react-bootstrap';
import { ProductGrid } from '../components/Product/Product';
import { Container } from 'react-bootstrap';
// import Newsletter from '../components/Newsletter/Newsletter';

const ProductsPage = () => {
	const location = useLocation();
	const [ tab, setTab ] = useState('products');

	// Scroll to top if path changes
	useLayoutEffect(
		() => {
			window.scrollTo(0, 0);
		},
		[ location.pathname ]
	);

	return (
		<div>
			<Navbar active="Productos" />
			<header style={{ padding: 30 }}>
				<h1 className="banner-text">Our {tab.charAt(0).toUpperCase() + tab.slice(1)}</h1>
				<div className="categories">
					<Nav activeKey={tab} onSelect={(selectedTab) => setTab(selectedTab)}>
						<Nav.Item>
							<Nav.Link eventKey="products">
								<p className={tab === 'products' ? 'tab' : 'none'}>Products</p>
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="services">
								<p className={tab === 'services' ? 'tab' : 'none'}>Services</p>
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</div>
			</header>
			<Container>
				{tab === 'services' && <ProductGrid data={Services} type="card" pos="50% 25%" />}
				{tab === 'products' && <ProductGrid data={Products} type="card" pos="50% 25%" />}
			</Container>
			{/* <Newsletter /> */}
			<Footer />
		</div>
	);
};

export default ProductsPage;
