import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Banner.css';
import Button from '../Button/Button';

const Banner = ({ title, subtitle }) => {
	return (
		<div className="banner-bg">
			<Container fluid>
				<h1 className="banner-text">{title}</h1>
				<h4 className="banner-text">{subtitle}</h4>
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<Button label="Learn More" />
				</div>
			</Container>
		</div>
	);
};

export default Banner;
