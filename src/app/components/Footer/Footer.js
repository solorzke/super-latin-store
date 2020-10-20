import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
	return (
		<>
			<Navigation />
			<footer>
				<p>&copy; {new Date().getFullYear()} Super Latin Store | All rights reserved</p>
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
					<Col md={{ span: 4, offset: 5 }}>
						<Table borderless responsive="md">
							<thead>
								<tr>
									<th className="banner-title">Services</th>
									<th className="banner-title">Contact</th>
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
				</Row>
			</Container>
		</div>
	);
};

export default Footer;
