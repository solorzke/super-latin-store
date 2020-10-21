import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Banner.css';
import Button from '../Button/Button';
import Stormfront from '../../images/store.jpg';

const Banner = ({ title, subtitle }) => {
	return (
		<div className="wrap">
			<div className="banner-bg" style={{ backgroundImage: `url(${Stormfront})` }}>
				<Container fluid>
					<h1 className="banner-heading">
						<strong>{title}</strong>
					</h1>
					<h4 className="banner-heading">
						<strong>{subtitle}</strong>
					</h4>
					<div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
						<Button label="Learn More" />
					</div>
				</Container>
			</div>
		</div>
	);
};

export default Banner;
