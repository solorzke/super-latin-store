import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../components/Nav/Navbar';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';

const ServicePage = () => {
	const location = useLocation();
	const paragraphs = location.state.paragraphs;
	const images = location.state.images;
	const goals = location.state.goals;
	// Scroll to top if path changes
	useLayoutEffect(
		() => {
			window.scrollTo(0, 0);
		},
		[ location.pathname ]
	);

	return (
		<div>
			<Navbar active={'Products'} />
			<Banner title="Services" subtitle={location.state.name} hideBtn={true} />
			<Container fluid>
				<article>
					<Row style={{ padding: 40, lineHeight: 2, backgroundColor: '#B3C5D7' }}>
						<Col>
							<img src={images[0]} style={{ textAlign: 'center' }} width="auto" height="400" />
						</Col>
						<Col>
							<p style={{ textAlign: 'start' }}>{paragraphs[0]}</p>
						</Col>
					</Row>
					<Row style={{ padding: 40, lineHeight: 2, backgroundColor: '#D8E1E9' }}>
						<Col>
							<p style={{ textAlign: 'start' }}>{paragraphs[1]}</p>
						</Col>
						<Col>
							<img src={images[1]} style={{ textAlign: 'center' }} width="auto" height="400" />
						</Col>
					</Row>
				</article>
			</Container>
			<Footer />
		</div>
	);
};

export default ServicePage;
