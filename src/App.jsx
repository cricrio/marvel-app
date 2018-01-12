import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters } from './actions';
import CharactersList from './containers/CharactersList';
class App extends Component {
	render() {
		this.props.fetchCharacters();
		return (
			<div className="App">
				<CharactersList />
			</div>
		);
	}
}

export default connect(null, { fetchCharacters })(App);
