import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters } from './actions';

class App extends Component {
	render() {
		this.props.fetchCharacters();
		return <div className="App" />;
	}
}

export default connect(null, { fetchCharacters })(App);
