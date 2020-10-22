import React, { useLayoutEffect, useState } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Nav/Navbar';
import Footer from '../components/Footer/Footer';
import { PreviewSlider } from '../components/Product/Product';

const ProductPage = () => {
	const [ currentImage, setCurrentImage ] = useState(0);
	const data = useLocation().state;
	const length = data.price.length;
	const price_range = length >= 2 ? `${data.price[0]} - ${data.price[length - 1]}` : data.price[0].toString();
	const onClick = (index) => setCurrentImage(index);

	// Scroll to top if path changes
	useLayoutEffect(
		() => {
			window.scrollTo(0, 0);
		},
		[ useLocation().pathname ]
	);

	return (
		<div>
			<Navbar active="Products" />
			<main className="product-div">
				<Container fluid>
					<Row>
						<Col>
							<div className="product-img-div">
								<img src={data.images[currentImage]} alt={data.alt} className="product-img" />
							</div>
							<div>
								<Row>
									<PreviewSlider data={data} onClick={onClick.bind(this)} active={currentImage} />
								</Row>
							</div>
						</Col>
						<Col>
							<div className="product-info">
								<h1>{data.name}</h1>
								<h2>{!price_range.includes('Varies') ? `$${price_range}` : `Price: ${price_range}`}</h2>
								<p>
									{data.description}
									<div style={{ borderBottom: '1px solid #000', width: '90%', paddingTop: 10 }} />
								</p>
								<Badge
									variant={data.available ? 'success' : 'danger'}
									style={{ fontFamily: "'Bebas Neue', cursive", padding: 10 }}
								>
									{data.available ? 'Available' : 'Sold Out'}
								</Badge>
							</div>
						</Col>
					</Row>
				</Container>
			</main>
			<Footer />
		</div>
	);
};

export default ProductPage;
