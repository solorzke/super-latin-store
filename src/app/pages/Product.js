import React, { useLayoutEffect, useEffect, useState } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Nav/Navbar';
import Footer from '../components/Footer/Footer';
import { PreviewSlider } from '../components/Product/Product';

const ProductPage = () => {
	const [ currentImage, setCurrentImage ] = useState(0);
	const [ adjust, setAdjust ] = useState(false);
	const data = useLocation().state;
	const length = data.price.length;
	const price_range = length >= 2 ? `${data.price[0]} - ${data.price[length - 1]}` : data.price[0].toString();
	const onClick = (index) => setCurrentImage(index);

	useEffect(() => {
		window.innerWidth < 850 ? setAdjust(true) : setAdjust(false);
		const handleResize = () => {
			switch (window.innerWidth > 850) {
				case true:
					if (!adjust) setAdjust(true);
					break;
				case false:
					if (adjust) setAdjust(false);
					break;
			}
		};
		window.addEventListener('resize', handleResize);
	});

	// Scroll to top if path changes
	useLayoutEffect(
		() => {
			window.scrollTo(0, 0);
		},
		[ useLocation().pathname ]
	);

	const ProductInfo = () => {
		return (
			<div className="product-info pb-5">
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
		);
	};

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
									<div className="col-md-12 flex-row d-flex justify-content-center">
										<PreviewSlider data={data} onClick={onClick.bind(this)} active={currentImage} />
									</div>
								</Row>
							</div>
						</Col>
						{!adjust && (
							<Col>
								<ProductInfo />
							</Col>
						)}
					</Row>
					{adjust && <ProductInfo />}
				</Container>
			</main>
			<Footer />
		</div>
	);
};

export default ProductPage;
