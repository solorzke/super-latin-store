import React from 'react';
import Navbar from '../components/Nav/Navbar';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';

const LocationPage = () => {
	return (
		<div>
			<Navbar active="Location" />
			<Banner title="Location" subtitle="Office Hours, Location & more." hideBtn={true} />
			<main className="location">
				<section className="location-info">
					<Container>
						<Row>
							<Col>
								<h2>Store</h2>
								<p>Super Latin Store</p>
								<p>30 Wilson Avenue</p>
								<p>Newark, NJ 07105</p>
							</Col>
							<Col>
								<h2>Contact</h2>
								<p>Phone: (999)-999-9999</p>
								<p>Email: superlatinstore@gmail.com</p>
							</Col>
						</Row>
						<Row>
							<Col>
								<h2>Office Hours</h2>
								<p>Monday - Sunday</p>
								<p>9am - 9pm</p>
							</Col>
							<Col>
								<h2>Social Media</h2>
								<a href="https://www.facebook.com/SuperLatinStoreEC/" target="_blank">
									<i class="fab fa-facebook social-media" />
								</a>
								<a href="#">
									<i class="fab fa-twitter-square social-media" />
								</a>
								<a href="#">
									<i class="fab fa-instagram-square social-media" />
								</a>
							</Col>
						</Row>
					</Container>
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default LocationPage;
