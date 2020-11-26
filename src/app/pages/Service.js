import React, { useLayoutEffect, useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../components/Nav/Navbar';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import { Services } from '../data/Products';

const ServicePage = () => {
	const getService = ({ service }) => {
		let obj = null;
		const keys = Object.keys(Services);
		for (let key of keys) {
			const item = Services[key];
			const path = item.path.substring(18);
			console.log(path);
			if (path === service) {
				obj = item;
				break;
			}
		}
		return obj !== null ? obj : Services.SEND_MONEY;
	};
	const params = useParams();
	const location = useLocation();
	const service = params.hasOwnProperty('service') ? getService(params) : Services.PACKAGING;
	const paragraphs = service.paragraphs;
	const images = service.images;
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
			<Navbar active={'Productos'} />
			<Banner title="Services" subtitle={service.name} hideBtn={true} />
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
