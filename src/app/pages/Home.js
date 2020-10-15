import React from 'react';
import Navbar from '../components/Nav/Navbar';
import Banner from '../components/Banner/Banner'

const HomePage = () => {
	return (
		<>
			<Navbar active="Home" />
			<Banner title="This is a title" subtitle="this is a subtitle" />
		</>
	)
};

export default HomePage;
