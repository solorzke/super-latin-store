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
			<Container>
				<h2 className="banner-text">Monthly Newsletter</h2>
				<p className="banner-text">
					Sign Up to receive updates from our shop, including new tea selections and upcoming events
				</p>
				<div
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						display: 'flex',
						marginRight: '25%',
						marginLeft: '25%'
					}}
				>
					<InputGroup size="sm">
						<FormControl
							placeholder="Sign Up with your email address"
							aria-label="Recipient's email address"
							aria-describedby="basic-addon2"
							ref={INPUT_EMAIL}
						/>
						<InputGroup.Append>
							<Button variant="outline-secondary">Subscribe</Button>
						</InputGroup.Append>
					</InputGroup>
				</div>
			</Container>
		</section>
	);
};

export default Newsletter;
