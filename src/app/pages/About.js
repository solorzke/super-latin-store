import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from '../components/Nav/Navbar';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import Button from '../components/Button/Button';
import Bills from '../images/bills.jpg';
import { Services } from '../data/Products';
import { ProductGrid } from '../components/Product/Product';
import { Zoom } from 'react-reveal';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

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
			<Banner title="Super Latin Store" subtitle="About Us" hideBtn={true} />
			<Container>
				<header>
					<ParallaxProvider>
						<Parallax className="custom-class" y={[ -60, 60 ]} tagOuter="figure">
							<div className="quote">
								<h2 className="banner-text">
									We’re a group of creative thinkers who have built a business to change the world.
								</h2>
							</div>
						</Parallax>
					</ParallaxProvider>
				</header>
				<hr />
			</Container>
			<Container>
				<article className="summary">
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
				<Zoom left>
					<ProductGrid data={Services} type="point" />
				</Zoom>
			</Container>
			<div className="wrap">
				<div className="section-bg" style={{ backgroundImage: `url(${Bills})` }}>
					<Container fluid>
						<h1 className="section-heading">Grow your business.</h1>
						<p className="section-heading">
							Today is the day to build the business of your dreams. Share your mission with the world —
							and blow your customers away.
						</p>
						<p className="section-heading">
							<Button label="Learn More" />
						</p>
					</Container>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default AboutPage;
