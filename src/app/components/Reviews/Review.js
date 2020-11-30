import React from 'react';
import './Reviews.css';
import Stars from './Star';
import Bounce from 'react-reveal/Bounce';

export default function Review(props) {
	return (
		<Bounce>
			<a href={props.link} target="_blank" rel="noopener noreferrer" className="review text-light">
				<div className="avi">
					<img src={props.image} width="50" alt="Profile .ico" />
				</div>
				<div className="description">
					<div className="name-review">
						<h2 style={{ paddingRight: 10 }} className="fullname">
							{props.fullname}
						</h2>
						<Stars stars={props.stars} />
					</div>
					<p>{props.date}</p>
					<div className="des-text">
						<p>
							<i>"{props.description}"</i>
						</p>
					</div>
				</div>
			</a>
		</Bounce>
	);
}
