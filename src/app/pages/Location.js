import React, { useState } from 'react';
import Navbar from '../components/Nav/Navbar';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import ModalImage from '../components/Modal/Modal';
import Reviews from '../components/Reviews/Reviews';

const LocationPage = () => {
	const [ show, setShow ] = useState(false);
	return (
		<div>
			<Navbar active="Ubicación" />
			<Banner title="Ubicación" subtitle="Horas de oficina, ubicación y más." hideBtn={true} />
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
								<h2>Contacto</h2>
								<p>
									Telefono:
									<a href="tel:+9739913030">(973)-991-3030</a>
								</p>
								<p>
									Email: <a href="mailto:superlatinstore@outlook.com">superlatinstore@outlook.com</a>
								</p>
							</Col>
						</Row>
						<Row>
							<Col>
								<h2>Horas de Oficina</h2>
								<p>Lunes - Domingo</p>
								<p>8am - 9pm</p>
							</Col>
							<Col>
								<h2>Redes Sociales</h2>
								<a
									href="https://www.facebook.com/SuperLatinStoreEC/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i class="fab fa-facebook social-media" />
								</a>
								<a href="https://www.instagram.com/superlatinstorellc">
									<i class="fab fa-instagram-square social-media" />
								</a>
								<a href="#" onClick={() => setShow(true)}>
									<i class="fas fa-qrcode social-media" />
								</a>
								<ModalImage show={show} onHide={() => setShow(false)} />
							</Col>
						</Row>
					</Container>
				</section>
			</main>
			<Reviews />
			<Footer />
		</div>
	);
};

export default LocationPage;
