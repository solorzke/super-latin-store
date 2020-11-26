import React, { useLayoutEffect, useEffect, useState } from 'react';
import { Container, Row, Col, Badge, Breadcrumb, Nav } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';
import Navbar from '../components/Nav/Navbar';
import ProductNav from '../components/Nav/Products';
import Footer from '../components/Footer/Footer';
import { PreviewSlider } from '../components/Product/Product';
import { Products } from '../data/Products';

const ProductPage = () => {
	const getProduct = ({ product }) => {
		let obj = null;
		for (let item of Products) {
			const path = item.path.substring(18);
			if (path === product) {
				obj = item;
				break;
			}
		}
		return obj !== null ? obj : Products[0];
	};
	const [ currentImage, setCurrentImage ] = useState(0);
	const [ adjust, setAdjust ] = useState(false);
	const params = useParams();
	const product = params.hasOwnProperty('product') ? getProduct(params) : Products[0];
	const length = product.price.length;
	const price_range =
		length >= 2 ? `${product.price[0]} - ${product.price[length - 1]}` : product.price[0].toString();
	const onClick = (index) => setCurrentImage(index);

	useEffect(() => {
		window.innerWidth < 850 ? setAdjust(true) : setAdjust(false);
		const handleResize = () => {
			switch (window.innerWidth > 850) {
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

	// Scroll to top if path changes
	useLayoutEffect(
		() => {
			window.scrollTo(0, 0);
		},
		[ useLocation().pathname ]
	);

	const ProductInfo = () => {
		return (
			<div className="product-info pb-5">
				<h1>{product.name}</h1>
				<h2>{!price_range.includes('Varía') ? `$${price_range}` : `Precio: ${price_range}`}</h2>
				<p>
					{product.description}
					<div style={{ borderBottom: '1px solid #000', width: '90%', paddingTop: 10 }} />
				</p>
				<ul className="product-ul">{product.points.map((item, index) => <li>{item}</li>)}</ul>
				<Badge
					variant={product.available ? 'success' : 'danger'}
					style={{ fontFamily: "'Bebas Neue', cursive", padding: 10 }}
				>
					{product.available ? 'Disponible' : 'Agotado'}
				</Badge>
			</div>
		);
	};

	return (
		<div>
			<Navbar active="Productos" />
			<Breadcrumb>
				<Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
				<Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
			</Breadcrumb>
			<ProductNav activePath={product.path} />
			<main className="product-div">
				<Container fluid>
					<Row>
						<Col>
							<div className="product-img-div mt-2">
								<img src={product.images[currentImage]} alt={product.alt} className="product-img" />
							</div>
							<div>
								<Row>
									<div className="col-md-12 flex-row d-flex justify-content-center my-3">
										<PreviewSlider
											data={product}
											onClick={onClick.bind(this)}
											active={currentImage}
										/>
									</div>
								</Row>
							</div>
						</Col>
						{!adjust && (
							<Col>
								<ProductInfo />
							</Col>
						)}
					</Row>
					{adjust && <ProductInfo />}
				</Container>
			</main>
			<Footer />
		</div>
	);
};

export default ProductPage;
