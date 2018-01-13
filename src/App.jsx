import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import CharactersList from './containers/CharactersList';
import CharactersDetails from './containers/CharacterDetails';

import Header from './components/Header';
import Footer from './components/Footer';

export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className="cf w-80 pa2-ns center">
					<Switch>
						<Route path="/characters/:id" component={CharactersDetails} />
						<Route path="/" component={CharactersList} />
					</Switch>
				</div>
				<Footer />
			</div>
		);
	}
}
