import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css';
import '../../../Responsive.css';
import Button from '../Button/Button';
import Stormfront from '../../images/store.jpg';
import { Bounce } from 'react-reveal';
import { useHistory } from 'react-router-dom';

const Banner = ({ title, subtitle, hideBtn }) => {
	const history = useHistory();
	const routeChange = () => history.push('/about');

	const BannerButton = () => {
		return (
			<div className="banner-btn">
				<Button label="Aprende Más" onClick={() => routeChange()} />
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
