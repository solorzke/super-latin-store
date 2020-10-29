import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './app/pages/Home';
import About from './app/pages/About';
import Products from './app/pages/Products';
import Service from './app/pages/Service';
import Product from './app/pages/Product';
import Location from './app/pages/Location';

function App() {
	return (
		<Switch>
			<Route component={About} path="/about" />
			<Route component={Service} path="/products/service" />
			<Route component={Product} path="/products/product" />
			<Route component={Products} path="/products" />
			<Route component={Location} path="/location" />
			<Route component={Home} path="/" />
		</Switch>
	);
}

export default App;
