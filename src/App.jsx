import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import CharactersList from './containers/CharactersListPage';
import CharactersPage from './containers/CharacterPage';

import NotFound from './components/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';

export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className="cf w-80 pa2-ns center">
					<Switch>
						<Route path="/" exact component={CharactersList} />
						<Route path="/characters/:id" component={CharactersPage} />
						<Route component={NotFound} />
					</Switch>
				</div>
				<Footer />
			</div>
		);
	}
}
