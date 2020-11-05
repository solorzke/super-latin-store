import React, { useState, useEffect } from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import { Row, Col, Container, Figure } from 'react-bootstrap';

export const ProductCard = ({ data, width = 'auto', height = 500, pos }) => {
	const [ columns, setColumns ] = useState(4);
	const [ tablet, setTablet ] = useState(false);

	useEffect(() => {
		window.innerWidth < 500 ? setColumns(12) : setColumns(4);
		window.innerWidth < 769 && window.innerWidth > 500 ? setTablet(true) : setTablet(false);

		const handleResize = () => {
			switch (window.innerWidth) {
				case window.innerWidth < 500:
					if (columns !== 12) setColumns(12);
					break;
				case window.innerWidth > 500 && window.innerWidth < 769:
					if (columns !== 4) setColumns(4);
					if (!tablet) setTablet(true);
					break;
				case window.innerWidth > 769:
					if (tablet) setTablet(false);
					break;
			}
		};
		window.addEventListener('resize', handleResize);
	});
	const path = data.hasOwnProperty('price') ? '/products/product' : 'products/service';
	return (
		<Col md={columns}>
			<Link to={{ pathname: path, state: data }}>
				<div
					className="product-card"
					style={{
						backgroundImage: `url(${data.image})`,
						width: columns === 4 ? width : 'auto',
						height: columns === 4 ? height : 300,
						backgroundPosition: columns === 4 ? pos : 'center top'
					}}
				>
					<h2>{data.name}</h2>
					<p>{data.tagline}</p>
				</div>
			</Link>
		</Col>
	);
};

export const ProductGrid = ({ data, type, width = 'auto', height = 500, pos = 'center top' }) => {
	const [ fluid, setFluid ] = useState(false);
	const services = Object.keys(data);

	const f = (bool) => {
		setFluid(bool);
	};

	const returnRows = () => {
		let rows = [];
		while (services.length > 0) {
			let row = [];
			for (let i = 0; i < 3; i++) {
				const key = services.pop();
				const gridPoint =
					type === 'point' ? (
						<Point data={data[key]} setFluid={f.bind(this)} />
					) : (
						<ProductCard data={data[key]} width={width} height={height} pos={pos} />
					);
				row.push(gridPoint);
			}
			rows.push(<Row>{row}</Row>);
		}
		return rows;
	};
	return <Container fluid={fluid}>{returnRows()}</Container>;
};

export const Point = ({ data, setFluid }) => {
	const [ columns, setColumns ] = useState(4);
	useEffect(() => {
		window.innerWidth < 414 ? setColumns(12) : setColumns(4);
		const handleResize = () => {
			switch (window.innerWidth < 414) {
				case true:
					if (columns === 4) {
						setColumns(12);
						setFluid(true);
					}
					break;
				case false:
					if (columns === 12) {
						setColumns(4);
						setFluid(false);
					}
					break;
			}
		};
		window.addEventListener('resize', handleResize);
	});

	return (
		<Col md={columns}>
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
	return data.images.map((item, index) => {
		return (
			<div
				className={`preview-image ${active === index ? 'preview-image-active' : ''}`}
				onClick={() => onClick(index)}
			>
				<Figure>
					<Figure.Image alt="171x180" src={item} style={{ maxWidth: '100%', height: 50 }} />
				</Figure>
			</div>
		);
	});
};
