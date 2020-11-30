import React from 'react';
import './Reviews.css';
import Review from './Review';
import { Reviewers } from '../../data/Reviews';

const Reviews = () => {
	return (
		<div className="reviews-container">
			<h1 className="text-center pt-3">Opiniones</h1>
			{Object.keys(Reviewers).map((item, index) => {
				return (
					<Review
						key={index}
						link={Reviewers[item].link}
						image={Reviewers[item].image}
						fullname={Reviewers[item].name}
						description={Reviewers[item].review}
						stars={Reviewers[item].stars}
						date={Reviewers[item].date}
					/>
				);
			})}
			<div className="arrow-div">
				<div className="arrow-down" />
			</div>
		</div>
	);
};

export default Reviews;
