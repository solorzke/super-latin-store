import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Banner.css';

const Banner = ({ title, subtitle }) => {
	return (
		<div className="banner-bg">
			<Container fluid>
				<h1 className="banner-text">{title}</h1>
				<h4 className="banner-text">{subtitle}</h4>
			</Container>
		</div>
	);
};

export default Banner;
