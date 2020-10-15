import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './app/pages/Home';

function App() {
	return (
		<Switch>
			<Route component={Home} path="/" />
		</Switch>
	);
}

export default App;
