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
			<Navbar active="Sobre Nosotros" />
			<Banner title="Super Latin Store" subtitle="Sobre Nosotros" hideBtn={true} />
			<Container>
				<header>
					<ParallaxProvider>
						<Parallax className="custom-class" y={y} tagOuter="figure">
							<div className="quote">
								<h2 className="quote-text">
									Con sede en Newark, orgullosamente sirviendo a nuestra comunidad latina 24/7, todo
									el año.
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
						Super Latin Store se estableció hace varios años en Newark, Nueva Jersey, como un lugar para
						ayudar a comunidad latina rica en cultura y respeto. Como compatriotas ecuatorianos, nosotros
						llegar a comprender cuánto nos enorgullecemos del trabajo que realizamos para servir a la
						comunidad, en el más alto nivel de dedicación y cuidado. Nuestra tienda sirve para ofrecerle una
						amplia gama de artículos y servicios, que van desde alimentos, medicinas y ropa, hasta asuntos
						más financieros como giros postales y pagos de facturas.
					</p>
					<p>
						Nuestra tienda está abierta toda la semana desde las 8 a.m. a las 9 de la noche incluidos los
						fines de semana. Nuestro negocio proporciona a la comunidad algunos de los productos latinos más
						populares disponibles, con una amplia lista de opciones que van desde atún, mote, variedad en
						hierbas y remedios medicinales, atún blanco, popular Bebidas ecuatorianas como Guitig, gaseosas,
						frijoles y botanas. También proporcionamos artículos de regalo como peluches, perfumes /
						colonias, joyas, sombreros / gorras, bolsos, gafas y prendas de vestir. Super latina Store
						también está asociada con Boost Mobile como distribuidor local, lo que significa que vendemos
						algunos de los Los últimos teléfonos inteligentes de la industria conectados con la red de Boost
						Mobile y le brindan asistencia para crear o administrar su servicio Boost Mobile. Pasa por
						nuestra tienda para aprender más información sobre cómo abrir una cuenta con Boost Mobile o
						cambiar de proveedor.
					</p>
					<p>
						También brindamos servicios financieros como transacciones de dinero a varios destinos en todo
						el mundo, incluyendo América Central y del Sur, y Europa. Si eres alguien que necesita enviar
						dinero a alguien o realizar un depósito bancario de forma remota, podemos ayudarlo utilizando
						nuestro AFEX con licencia red para conectarlo con instituciones financieras de todo el mundo y
						enviar de forma segura su efectivo ganado con esfuerzo, sano y salvo. Para comenzar, solo traiga
						prueba de identificación y del beneficiario. Aparte de eso, también completamos sus pagos de
						facturación para empresas como PSEG, Cablevision, e Internet para usted sin problemas y a
						tiempo. Necesita pagar su factura mensual por su ¿teléfono prepagado? Simplemente díganos la
						compañía de servicio telefónico con la que está y podemos hacer pagos a ellos para que pueda
						seguir usando su teléfono. ¿Quiere cambiar sus cheques por efectivo? Nosotros puede manejar eso
						también. Visítenos pronto con cualquier cosa que necesite de nosotros, ¡estamos a su
						disposición!
					</p>
				</article>
				<hr />
			</Container>
			<Container>
				<p className="banner-text">En Qué Somos Mejores</p>
				<h2 className="banner-text">Nuestros Servicios</h2>
				<Zoom left>
					<ProductGrid data={Services} type="point" />
				</Zoom>
			</Container>
			<div className="wrap">
				<div className="section-bg" style={{ backgroundImage: `url(${Bills})` }}>
					<Container fluid>
						<h1 className="section-heading">¿Tiene preguntas?</h1>
						<p className="section-heading">
							No dude en contactarnos por correo electrónico con cualquier pregunta que pueda tener y
							probaremos nuestro ¡Es mejor responder pronto!
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
