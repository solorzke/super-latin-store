import React, { useEffect, useState, useRef } from 'react';
import { FormControl, InputGroup, Button, Container } from 'react-bootstrap';
import './Newsletter.css';

const Newsletter = () => {
	const [ email, setEmail ] = useState(0);
	const INPUT_EMAIL = useRef(null);

	useEffect(() => {
		setEmail(INPUT_EMAIL.current.value);
	});

	return (
		<section className="newsletter">
			<Container fluid>
				<h2 className="banner-text">Boletín Mensual</h2>
				<p className="banner-text">
					Regístrese para recibir actualizaciones de nuestra tienda, incluidas nuevas selecciones de té y
					próximos eventos
				</p>
				<div className="newsletter-form">
					<InputGroup size="sm">
						<FormControl
							placeholder="Regístrese con su dirección de correo electrónico"
							aria-label="Recipient's email address"
							aria-describedby="basic-addon2"
							ref={INPUT_EMAIL}
						/>
						<InputGroup.Append>
							<Button variant="outline-secondary">Suscribir</Button>
						</InputGroup.Append>
					</InputGroup>
				</div>
			</Container>
		</section>
	);
};

export default Newsletter;
