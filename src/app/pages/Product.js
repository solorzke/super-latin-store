import React from 'react';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Nav/Navbar';
import Footer from '../components/Footer/Footer';
import { ProductGrid } from '../components/Product/Product';
import { Products } from '../data/Products';

const ProductPage = () => {
	const data = useLocation().state;
	return (
		<div>
			<Navbar active="Products" />
			<main>
				<Container fluid>
					<Row>
						<Col>
							<div>
								<Figure>
									<Figure.Image width={'100%'} height={180} alt="171x180" src={data.image} />
									<Figure.Caption>
										Nulla vitae elit libero, a pharetra augue mollis interdum.
									</Figure.Caption>
								</Figure>
							</div>
						</Col>
						<Col>
							<h1>hdhd</h1>
						</Col>
					</Row>
				</Container>
			</main>
			<Footer />
		</div>
	);
};

export default ProductPage;
