import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css';
import '../../../Responsive.css';
import Button from '../Button/Button';
import Stormfront from '../../images/store.jpg';
import { Bounce } from 'react-reveal';

const Banner = ({ title, subtitle, hideBtn }) => {
	const BannerButton = () => {
		return (
			<div className="banner-btn">
				<Button label="Learn More" />
			</div>
		);
	};
	return (
		<div className="wrap">
			<div className="banner-bg" style={{ backgroundImage: `url(${Stormfront})` }}>
				<Container fluid>
					<Bounce right>
						<h1 className="banner-heading">
							<strong>{title}</strong>
						</h1>
						<h4 className="banner-heading">
							<strong>{subtitle}</strong>
						</h4>
						{!hideBtn ? <BannerButton /> : <div />}
					</Bounce>
				</Container>
			</div>
		</div>
	);
};

export default Banner;
