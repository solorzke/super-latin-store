import React from 'react';
import Navbar from '../components/Nav/Navbar';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import Newsletter from '../components/Newsletter/Newsletter';
import { ProductCard } from '../components/Product/Product';
import { Container, Row, Col } from 'react-bootstrap';
import { Summary } from '../data/Summary';
import { Services } from '../data/Products';
import { Fade } from 'react-reveal';

const HomePage = () => {
	return (
		<div>
			<Navbar active="Home" />
			<Banner title="Super Latin Store" subtitle="Newark, NJ" />
			<section>
				<Container>
					<h1 className="banner-text">Featured Services</h1>
					<p className="banner-text">Check out new and popular services</p>
					<Row>
						<ProductCard data={Services.SEND_MONEY} />
						<ProductCard data={Services.PAY_BILL} />
						<ProductCard data={Services.BOOST_RECHARGE} />
					</Row>
				</Container>
			</section>
			<section>
				<Fade left>
					<Container>
						<h2>This is our store</h2>
						<p>This is our business and our profile</p>
						<hr />
						<Row>{Summary.about.map((item, index) => <Col key={index}>{item}</Col>)}</Row>
					</Container>
				</Fade>
			</section>
			<Newsletter />
			<Footer />
		</div>
	);
};

export default HomePage;
