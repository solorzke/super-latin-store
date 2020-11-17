import React, { useState, useEffect } from 'react';
import Navbar from '../components/Nav/Navbar';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import Newsletter from '../components/Newsletter/Newsletter';
import { ProductCard } from '../components/Product/Product';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import { Summary } from '../data/Summary';
import { Services } from '../data/Products';
import { Fade, LightSpeed } from 'react-reveal';
import { ServiceBars } from '../components/Tabs/Main';
import { ServiceText, Label } from '../data/Goals';

const HomePage = () => {
	const [ chevron, setChevron ] = useState('left');
	const [ adjust, setAdjust ] = useState(false);
	useEffect(() => {
		window.innerWidth < 500 ? setAdjust(true) : setAdjust(false);
		const handleResize = () => {
			switch (window.innerWidth < 500) {
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
	const servicesPane = [
		<Row>
			<ProductCard data={Services.SEND_MONEY} pos="center center" />
			<ProductCard data={Services.PAY_BILL} pos="center center" />
			<ProductCard data={Services.BOOST_RECHARGE} pos="center center" />
		</Row>,
		<Row>
			<ProductCard data={Services.CASH_CHECKS} pos="center center" />
			<ProductCard data={Services.MONEY_ORDER} pos="center center" />
			<ProductCard data={Services.PACKAGING} pos="center center" />
		</Row>
	];

	return (
		<div>
			<Navbar active="Home" />
			<Banner title="Super Latin Store" subtitle="Newark, NJ" hideBtn={false} />
			<main>
				<rssapp-wall style={{ fontFamily: `Arial, Helvetica, sans-serif` }} id="CReEemRa9lbFqG24" />
			</main>
			<section>
				<LightSpeed left>
					<Container>
						<h1 className="banner-text" style={{}}>
							Featured Services
						</h1>
						<p className="banner-text">Check out new and popular services</p>
						{chevron === 'left' && servicesPane[0]}
						{chevron === 'right' && servicesPane[1]}
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<Pagination size="sm">
								<div onClick={() => setChevron('left')}>
									<Pagination.Item active={chevron === 'left' ? true : false}>
										<i className="fas fa-chevron-left" />
									</Pagination.Item>
								</div>
								<div onClick={() => setChevron('right')}>
									<Pagination.Item active={chevron === 'right' ? true : false}>
										<i className="fas fa-chevron-right" />
									</Pagination.Item>
								</div>
							</Pagination>
						</div>
					</Container>
				</LightSpeed>
			</section>
			<section>
				<Fade left>
					<Container>
						<h2>This is our store</h2>
						<p>This is our business and our profile</p>
						<hr />
						<Row>
							{Summary.about.map((item, index) => {
								return (
									<Col key={index} md={adjust ? 12 : 6}>
										<p className="summary">{item}</p>
									</Col>
								);
							})}
						</Row>
					</Container>
				</Fade>
			</section>
			<ServiceBars label={Label} data={ServiceText} name="piece-light" size={500} />
			<Newsletter />
			<Footer />
		</div>
	);
};

export default HomePage;
