import React, { useState } from 'react';
import { Container, Row, Col, Table, Figure, Image, Modal } from 'react-bootstrap';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { Services } from '../../data/Products';
import Logo from '../../images/sls.png';
import USA from '../../images/usa.png';
import ESP from '../../images/spain.png';
import QR from '../../images/qrcode.png';
import './Footer.css';

const Footer = () => {
	return (
		<div>
			<Navigation />
			<footer>
				<strong>
					<p>&copy; {new Date().getFullYear()} Super Latin Store | All rights reserved</p>
				</strong>
			</footer>
		</div>
	);
};

const ModalImage = (props) => {
	return (
		<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">QR Code</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="img-modal">
					<img src={QR} height="100%" width="50%" alt="www.superlatinstore.com" />
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide} label="Close" />
			</Modal.Footer>
		</Modal>
	);
};

const Navigation = () => {
	const [ show, setShow ] = useState(false);

	return (
		<div className="navigation-footer">
			<Container fluid>
				<Row>
					<div className="col-md-3 align-items-start d-flex flex-column">
						<Figure>
							<Figure.Image
								width={100}
								height={100}
								alt="logo"
								src={Logo}
								style={{
									backgroundColor: '#fff',
									borderRadius: 5
								}}
							/>
						</Figure>
						<h6 style={{ width: '60%', paddingTop: 10, paddingBottom: 10 }}>
							Fast &amp; Quality Service To Everyone!
						</h6>
						<h6>Connect With Us</h6>
						<Row>
							<Col>
								<a href="mailto:superlatinstore@outlook.com">
									<i className="far fa-envelope footer-icon" />
								</a>
								<a href="tel:+9739913030">
									<i className="fas fa-phone footer-icon" />{' '}
								</a>
								<a href="https://www.facebook.com/SuperLatinStoreEC/" target="_blank">
									<i className="fab fa-facebook-f footer-icon" />{' '}
								</a>
								<a href="https://www.instagram.com/superlatinstorellc" target="_blank">
									<i className="fab fa-instagram footer-icon" />{' '}
								</a>
								<a href="#" onClick={() => setShow(true)}>
									<i className="fas fa-qrcode footer-icon" />{' '}
								</a>
								<ModalImage show={show} onHide={() => setShow(false)} />
							</Col>
						</Row>
						<Row style={{ paddingTop: 10 }}>
							<Col>
								<Link to="/">
									<Image src={USA} style={{ width: 20, height: 20 }} />
									<p>Eng</p>
								</Link>
							</Col>
							<Col>
								<Link to="/">
									<Image src={ESP} style={{ width: 20, height: 20 }} />
									<p>Esp</p>
								</Link>
							</Col>
						</Row>
					</div>
					<Col md={{ span: 4 }}>
						<Table borderless responsive="md">
							<thead>
								<tr>
									<th className="banner-title heading-font">Services</th>
									<th className="banner-title heading-font">Contact</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<Link to={Services.BOOST_RECHARGE.path}>{Services.BOOST_RECHARGE.name}</Link>
									</td>
									<td>
										<Link to="/location">Location</Link>
									</td>
								</tr>
								<tr>
									<td>
										<Link to={Services.CASH_CHECKS.path}>{Services.CASH_CHECKS.name}</Link>
									</td>
									<td>
										<Link to="/location">Office Hours</Link>
									</td>
								</tr>
								<tr>
									<td>
										<Link to={Services.MONEY_ORDER.path}>{Services.MONEY_ORDER.name}</Link>
									</td>
									<td>
										<Link to="/location">Get Directions</Link>
									</td>
								</tr>
								<tr>
									<td>
										<Link to={Services.PAY_BILL.path}>{Services.PAY_BILL.name}</Link>
									</td>
								</tr>
								<tr>
									<td>
										<Link to={Services.PACKAGING.path}>{Services.PACKAGING.name}</Link>
									</td>
								</tr>
								<tr>
									<td>
										<Link to={Services.SEND_MONEY.path}>{Services.SEND_MONEY.name}</Link>
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
					<Col md={{ span: 5 }}>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12094.36566737324!2d-74.1550022!3d40.7270102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd7e65b01b4f091cd!2sSuper%20Latin%20Store%20LLC!5e0!3m2!1sen!2sus!4v1603314544128!5m2!1sen!2sus"
							width="100%"
							height="100%"
							frameBorder="0"
							style={{ border: 0 }}
							allowFullScreen=""
							aria-hidden="false"
							tabIndex="0"
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Footer;
