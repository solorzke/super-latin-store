import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';

export const ProductCard = ({ data, width = 'auto', height = 500 }) => {
	return (
		<Col>
			<Link to={{ pathname: '/products/service', state: data }}>
				<div
					className="product-card"
					style={{ backgroundImage: `url(${data.image})`, width: width, height: height }}
				>
					<h2>{data.name}</h2>
					<p>{data.description}</p>
				</div>
			</Link>
		</Col>
	);
};

export const ProductGrid = ({ data, type, width = 'auto', height = 500 }) => {
	const services = Object.keys(data);
	const returnRows = () => {
		let rows = [];
		while (services.length > 0) {
			let row = [];
			for (let i = 0; i < 3; i++) {
				const key = services.pop();
				const gridPoint =
					type === 'point' ? (
						<Point data={data[key]} />
					) : (
						<ProductCard data={data[key]} width={width} height={height} />
					);
				row.push(gridPoint);
			}
			rows.push(<Row>{row}</Row>);
		}
		return rows;
	};
	return <Container>{returnRows()}</Container>;
};

export const Point = ({ data }) => {
	return (
		<Col>
			<Link to={{ pathname: '/products/service', state: data }}>
				<div className="product-grid-point">
					<img src={data.image} height="50" width="50" alt={data.name} />
					<h4>{data.name}</h4>
					<p>{data.description}</p>
				</div>
			</Link>
		</Col>
	);
};
