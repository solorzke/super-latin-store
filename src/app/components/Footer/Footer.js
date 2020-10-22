import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
	return (
		<>
			<Navigation />
			<footer>
				<strong>
					<p>&copy; {new Date().getFullYear()} Super Latin Store | All rights reserved</p>
				</strong>
			</footer>
		</>
	);
};

const Navigation = () => {
	return (
		<div className="navigation-footer">
			<Container fluid>
				<Row>
					<div className="col-md-3 align-items-start d-flex flex-column">
						<i className="fas fa-shipping-fast brand footer-brand" />
						<h6 style={{ width: '60%', paddingTop: 10, paddingBottom: 10 }}>
							Fast Express Shipping Across Multiple Locations!
						</h6>
						<Row>
							<Col>
								<a href="mailto:marcoasolorzano@gmail.com">
									<i className="far fa-envelope footer-icon" />
								</a>
								<Link to="#">
									<i className="fas fa-phone footer-icon" />{' '}
								</Link>
								<a href="https://www.facebook.com" target="_blank">
									<i className="fab fa-facebook-f footer-icon" />{' '}
								</a>
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
										<Link>
											How To Order
										</Link>
									</td>
									<td>
										<Link>Location</Link>
									</td>
								</tr>
								<tr>
									<td>
										<Link>Shipping Costs</Link>
									</td>
									<td>
										<Link>Message Me</Link>
									</td>
								</tr>
								<tr>
									<td />
									<td>
										<Link>Contact Shipping Co.</Link>
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
					<Col md={{span: 5}}>
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
