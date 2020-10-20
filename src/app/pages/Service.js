import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from '../components/Nav/Navbar';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';

const ServicePage = () => {
	const location = useLocation();
	const paragraphs = location.state.paragraphs;
	const goals = location.state.goals;
	// Scroll to top if path changes
	useLayoutEffect(
		() => {
			window.scrollTo(0, 0);
		},
		[ location.pathname ]
	);

	return (
		<div>
			<Navbar active={'Products'} />
			<Banner title="This is a title" subtitle="This is a subtitle" />
			<Container>
				<article>
					{paragraphs.map((item, index) => (
						<p style={{ textAlign: 'start' }} key={index}>
							{item}
						</p>
					))}
				</article>
			</Container>
			<Container>
				<h1>Our Goals</h1>
				<ul>{goals.map((item, index) => <li key={index}>{item}</li>)}</ul>
			</Container>
			<Footer />
		</div>
	);
};

export default ServicePage;
