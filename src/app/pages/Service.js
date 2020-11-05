import React, { useLayoutEffect, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../components/Nav/Navbar';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';

const ServicePage = () => {
	const location = useLocation();
	const paragraphs = location.state.paragraphs;
	const images = location.state.images;
	const [ adjust, setAdjust ] = useState(false);

	// Scroll to top if path changes
	useLayoutEffect(
		() => {
			window.scrollTo(0, 0);
		},
		[ location.pathname ]
	);

	useEffect(() => {
		window.innerWidth < 950 ? setAdjust(true) : setAdjust(false);
		const handleResize = () => {
			switch (window.innerWidth < 950) {
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

	return (
		<div>
			<Navbar active={'Products'} />
			<Banner title="Services" subtitle={location.state.name} hideBtn={true} />
			<Container fluid>
				<article>
					<Row style={{ padding: 40, lineHeight: 2, backgroundColor: '#B3C5D7' }}>
						<Col md={adjust ? 12 : 6}>
							<img src={images[0]} className="img-fluid service-img" />
						</Col>
						<Col md={adjust ? 12 : 6}>
							<p style={{ textAlign: 'start' }}>{paragraphs[0]}</p>
						</Col>
					</Row>
					<Row style={{ padding: 40, lineHeight: 2, backgroundColor: '#D8E1E9' }}>
						<Col md={adjust ? 12 : 6}>
							<p style={{ textAlign: 'start' }}>{paragraphs[1]}</p>
						</Col>
						<Col md={adjust ? 12 : 6}>
							<img src={images[1]} className="img-fluid service-img" />
						</Col>
					</Row>
				</article>
			</Container>
			<Footer />
		</div>
	);
};

export default ServicePage;
