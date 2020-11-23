import React, { useLayoutEffect, useState, useEffect } from 'react';
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
	const [ adjust, setAdjust ] = useState(false);
	const [ y, setY ] = useState([ -60, 60 ]);
	// Scroll to top if path changes
	useLayoutEffect(
		() => {
			window.scrollTo(0, 0);
		},
		[ location.pathname ]
	);

	const sendMessage = () => (window.location = 'mailto:superlatinstore@outlook.com');

	useEffect(() => {
		const handleResize = () => {
			switch (window.innerWidth < 768) {
				case true:
					if (!adjust) {
						setY([ -10, 10 ]);
						setAdjust(true);
					}
					break;
				case false:
					if (adjust) {
						setY([ -60, 60 ]);
						setAdjust(false);
					}
					break;
			}
		};
		handleResize();
		window.addEventListener('resize', handleResize);
	});

	return (
		<div>
			<Navbar active="About" />
			<Banner title="Super Latin Store" subtitle="About Us" hideBtn={true} />
			<Container>
				<header>
					<ParallaxProvider>
						<Parallax className="custom-class" y={y} tagOuter="figure">
							<div className="quote">
								<h2 className="quote-text">
									Based in Newark, Proudly Serving To Our Latin Community 24/7, All Year Round.
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
						Super Latin Store was established several years ago in Newark, NJ as a spot to help serve to the
						latin community that's rich in both culture and respect. As fellow Ecuadorians ourselves, we
						come to understand how much pride we take in the work we put into to serve to the community, at
						the highest level of dedication and care. Our store serves to provide you with a wide array of
						items and services, ranging from food, medicine and clothing, to more financial matters like
						money orders and bill payments.
					</p>
					<p>
						Our store is open all week long from 8 A.M. to 9 P.M. including the weekends. Our business
						provides the community with some of the most popular latin goods available, with a wide list of
						options ranging from tuna, mote, variety in medicinal herbs and remedies, albacore, popular
						Ecuadorian drinks like Guitig, soda, beans, and snacks. We also provide gift items such as
						plushies, perfumes/colognes, jewelery, hats/caps, bags, glasses, and clothing items. Super Latin
						Store is also partnered with Boost Mobile as a local distributor, meaning we sell some of the
						latest smart phones in the industry hooked up with Boost Mobile's network and provide you
						assistance with creating or managing your Boost Mobile service. Stop by our store to learn more
						information about opening an account with Boost Mobile, or switching carriers.
					</p>
					<p>
						We also provide financial services such as money transactions to various destinations across the
						world including Central and South America, and Europe. Whether you're someone who needs to send
						money to someone or make a bank deposit remotely, we can assist you using our licensed AFEX
						network to connect you with any financial institutions around the world and securely send your
						hard earned cash, safe and sound. Just bring proof of ID and of the beneficiary to get started.
						Aside from that, we also complete your billing payments for companies such as PSEG, Cablevision,
						and Internet for you with no hassle and on time. Need to pay off your monthly bill for your
						prepaid phone? Just tell us the phone service company you're with and we can make direct
						payments to them so you can continue using your phone. Want to exchange your checks for cash? We
						can handle that too. Pay us a visit soon with anything you need from us, we're there for you!
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
						<h1 className="section-heading">Have Questions?</h1>
						<p className="section-heading">
							Please feel free to contact us via email with any questions you may have and we'll try our
							best to get back to you soon!
						</p>
						<p className="section-heading">
							<Button label="Send Message" onClick={() => sendMessage()} />
						</p>
					</Container>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default AboutPage;
