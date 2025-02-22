import React from 'react';
import './Button.css';

const Button = ({ label, onClick }) => {
	return (
		<button id="btn" className="slide_from_left" onClick={onClick}>
			{label}
		</button>
	);
};

export default Button;
