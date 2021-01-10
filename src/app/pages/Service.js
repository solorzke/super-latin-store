import React, { useLayoutEffect, useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { Services } from '../data/Products';
import Navbar from '../components/Nav/Navbar';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import MoneyTransfer1 from '../images/money-transfer/1.png';
import MoneyTransfer2 from '../images/money-transfer/2.png';
import MoneyTransfer3 from '../images/money-transfer/3.png';
import Recharge1 from '../images/recharges/1.png';
import Bills1 from '../images/bills/1.png';
import Packaging1 from '../images/packaging/1.png';

const ServicePage = () => {
	const getService = ({ service }) => {
		let obj = null;
		const keys = Object.keys(Services);
		for (let key of keys) {
			const item = Services[key];
			const path = item.path.substring(18);
			console.log(path);
			if (path === service) {
				obj = item;
				break;
			}
		}
		return obj !== null ? obj : Services.SEND_MONEY;
	};
	const params = useParams();
	const location = useLocation();
	const service = params.hasOwnProperty('service') ? getService(params) : Services.PACKAGING;
	const paragraphs = service.paragraphs;
	const images = service.images;
	const [ adjust, setAdjust ] = useState(false);

	// Scroll to top if path changes
	useLayoutEffect(
		() => {
			window.scrollTo(0, 0);
		},
		[ location.pathname ]
	);

	useEffect(
		() => {
			window.innerWidth < 950 ? setAdjust(true) : setAdjust(false);
			const handleResize = () => {
				switch (window.innerWidth < 950) {
					case true:
						if (!adjust) setAdjust(true);
						break;
					default:
						if (adjust) setAdjust(false);
						break;
				}
			};
			window.addEventListener('resize', handleResize);
		},
		[ adjust ]
	);

	const renderChild = () => {
		switch (service.name) {
			case 'Enviar Dinero':
				return <MoneyTransfers adjust={adjust} />;
			case 'Recargas':
				return <Recharges adjust={adjust} />;
			case 'Paqueteria':
				return <Packaging adjust={adjust} />;
			case 'Pagar Facturas':
				return <Bills adjust={adjust} />;
			default:
				return <Default adjust={adjust} name={service.name} images={images} paragraphs={paragraphs} />;
		}
	};

	return (
		<>
			<Navbar active={'Productos'} />
			<Banner title="Services" subtitle={service.name} hideBtn={true} />
			<Container fluid>
				<article>{renderChild()}</article>
			</Container>
			<Footer />
		</>
	);
};

const Default = ({ adjust, name, images, paragraphs }) => {
	return (
		<>
			<Row className="service-article-row-1">
				<Col md={adjust ? 12 : 6}>
					<img src={images[0]} className="img-fluid service-img" alt={name} />
				</Col>
				<Col md={adjust ? 12 : 6}>
					<p style={{ textAlign: 'start' }}>{paragraphs[0]}</p>
				</Col>
			</Row>
			<Row className="service-article-row-2">
				<Col md={adjust ? 12 : 6}>
					<p style={{ textAlign: 'start' }}>{paragraphs[1]}</p>
				</Col>
				<Col md={adjust ? 12 : 6}>
					<img src={images[1]} className="img-fluid service-img" alt={name} />
				</Col>
			</Row>
		</>
	);
};

const MoneyTransfers = ({ adjust }) => {
	return (
		<>
			<Row className="service-article-row-1">
				<Col md={adjust ? 12 : 6}>
					<Carousel wrap={false}>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={MoneyTransfer1}
								alt="First slide"
								style={{ height: 300, width: '100%' }}
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={MoneyTransfer2}
								alt="Third slide"
								style={{ height: 300, width: '100%' }}
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={MoneyTransfer3}
								alt="Third slide"
								style={{ height: 300, width: '100%' }}
							/>
						</Carousel.Item>
					</Carousel>
				</Col>
				<Col md={adjust ? 12 : 6}>
					<p style={{ textAlign: 'start' }}>
						Enviamos dinero a todo el mundo a traves de nuestra afiliada AFEX/Ria Money Tranfer la cual es
						una prestigiosa compania que garantiza la entrega rapida y segura a su seres queridos. Le
						proporcionamos a nuestros clientes la informacion necesaria para poder hacer la remesa de manera
						correcta. Contamos con agencias y Bancos a nivel mundial que le permiten recibir su dinero.{' '}
					</p>
					<p style={{ textAlign: 'start' }}>
						No solo hacemos entrega hacia agencias, usted puede realizar depositos bancarios que van directo
						a su cuenta. Ademas usted escoge si desea el dinero en dolares o en la moneda local. Siempre
						pensando en complacer su necesidad.
					</p>
				</Col>
			</Row>
		</>
	);
};

const Recharges = ({ adjust }) => {
	return (
		<Row className="service-article-row-1">
			<Col md={adjust ? 12 : 5}>
				<img src={Recharge1} className="img-fluid service-img" alt={'Recharges'} />
			</Col>
			<Col md={adjust ? 12 : 7}>
				<p style={{ textAlign: 'start' }}>
					Ofrecemos Recargas Nacionales de Boss Revolution, Solo Pin, amigo si pin, y mas., las cuales le
					permiten hacer llamadas internacionales desde su telefono mobile hacia diferentes paises. Este
					metodo le remplazo a la tarjetas de llamadas tradicionales. Puede realizar recargas desde $1 en
					adelante y nosotros le explicamos como se utilizan. Ademas realizamos recargas internacionales hacia
					cualquier pais por ejemplo: claro, Movistar, cnt, telcell, tigo, Digicel, orange, etc., estas
					recargas van desde saldo normal al telefono mobile de su pais y tambien paquetes de recargas que
					contiene internet.
				</p>
			</Col>
		</Row>
	);
};

const Bills = ({ adjust }) => {
	return (
		<Row className="service-article-row-1">
			<Col md={adjust ? 12 : 5}>
				<img src={Bills1} className="img-fluid service-img" alt={'Bills'} />
			</Col>
			<Col md={adjust ? 12 : 7}>
				<p style={{ textAlign: 'start' }}>
					Facilitamos el pago de cuentas basicas, a traves de nuestro servicio el cual le permite 
					pagar a tiempo y que no sea interrumpido su servicio. Aceptamos cash al momento del pago. 
					Entre los pagos temenos PS&G, Optimum, Macys card, Verizon communications, y mas.. 
				</p>
				<p>
					Hoy en dia el telefono celular es un servicio indispensable en la vida cotidiana y si necesita 
					hacer el pago de su cuenta ya sea pre-paid o post-paid, nosotros realizamos el pago de cualquier 
					compania Telefonica que necesite. 
				</p>
			</Col>
		</Row>
	);
};

const Packaging = ({ adjust }) => {
	return (
		<>
			<Row className="service-article-row-1">
				<Col md={adjust ? 12 : 6}>
					<img src={Packaging1} className="img-fluid service-img" alt={'Packaging'} />
				</Col>
				<Col md={adjust ? 12 : 6}>
					<p style={{ textAlign: 'start' }}>
						Ofecemos Paqueteria a cualquier parte de Ecuador por medio de nuestra asociada Geomil Group,
						confie en nosotros y su paquete llegara rapido y Seguro.
					</p>
					<ul>
						<li>Paquetes de 4 libras por $ $16.00</li>
						<li>Paquetes de 8 libras por $24.00</li>
						<li>Salidas de Paquetes todos los dias.</li>
					</ul>
				</Col>
			</Row>
		</>
	);
};

export default ServicePage;
