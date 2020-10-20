import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Jumbotron, Button } from 'react-bootstrap';
import Navbar from '../components/Nav/Navbar';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import { Services } from '../data/Products';
import { ProductGrid } from '../components/Product/Product';

const AboutPage = () => {
	const location = useLocation();
	// Scroll to top if path changes
	useLayoutEffect(
		() => {
			window.scrollTo(0, 0);
		},
		[ location.pathname ]
	);

	return (
		<div>
			<Navbar active="About" />
			<Banner title="This is a title" subtitle="this is a subtitle" />
			<Container>
				<header>
					<h2 className="banner-text">
						We’re a group of creative thinkers who have built a business to change the world.
					</h2>
				</header>
				<hr />
			</Container>
			<Container>
				<article>
					<p>
						Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
						live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,
						a large language ocean. A small river named Duden flows by their place and supplies it with the
						necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly
						into your mouth.
					</p>
					<p>
						Even the all-powerful Pointing has no control about the blind texts it is an almost
						unorthographic life One day however a small line of blind text by the name of Lorem Ipsum
						decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because
						there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little
						Blind Text didn’t listen.
					</p>
					<p>
						She packed her seven versalia, put her initial into the belt and made herself on the way. When
						she reached the first hills of the Italic Mountains, she had a last view back on the skyline of
						her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road,
						the Line Lane.
					</p>
				</article>
				<hr />
			</Container>
			<Container>
				<p className="banner-text">What We Are Best At</p>
				<h2 className="banner-text">Our Services</h2>
				<ProductGrid data={Services} type="point" />
			</Container>
			<Container fluid>
				<Jumbotron>
					<h1 className="banner-text">Grow your business.</h1>
					<p className="banner-text">
						Today is the day to build the business of your dreams. Share your mission with the world — and
						blow your customers away.
					</p>
					<p className="banner-text">
						<Button variant="primary">Learn more</Button>
					</p>
				</Jumbotron>
			</Container>
			<Footer />
		</div>
	);
};

export default AboutPage;
