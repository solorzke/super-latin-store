import React, { useState, useEffect } from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import { Row, Col, Container, Figure } from 'react-bootstrap';

export const ProductCard = ({ data, width = 'auto', height = 500, pos }) => {
	const path = data.hasOwnProperty('price') ? '/products/product' : 'products/service';
	return (
		<Col>
			<Link to={{ pathname: path, state: data }}>
				<div
					className="product-card"
					style={{
						backgroundImage: `url(${data.image})`,
						width: width,
						height: height,
						backgroundPosition: pos
					}}
				>
					<h2>{data.name}</h2>
					<p>{data.description}</p>
				</div>
			</Link>
		</Col>
	);
};

export const ProductGrid = ({ data, type, width = 'auto', height = 500, pos = 'center top' }) => {
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
						<ProductCard data={data[key]} width={width} height={height} pos={pos} />
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

export const PreviewSlider = ({ data, onClick, active }) => {
	const changeStyle = (index) => {
		const style = {
			active: {
				boxShadow: '0 0 10px #F08700',
				border: 'none'
			}
		};
		return active === index ? style.active : {};
	};
	return data.images.map((item, index) => {
		return (
			<Col key={index}>
				<div className="preview-image" onClick={() => onClick(index)} style={changeStyle(index)}>
					<Figure>
						<Figure.Image alt="171x180" src={item} style={{ maxWidth: '100%', height: 100 }} />
					</Figure>
				</div>
			</Col>
		);
	});
};
