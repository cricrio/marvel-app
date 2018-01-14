import React from 'react';
import { connect } from 'react-redux';
import { fetchCharacters } from '../actions';

import CharactersList from '../components/CharacterList';

export class CharactersListPage extends React.Component {
	constructor(props) {
		super(props);
		props.fetchCharacters(1);
	}

	render() {
		const { characters } = this.props;
		return <CharactersList characters={characters} />;
	}
}

const mapStateToProps = (state) => ({
	characters: state.characters
});

export default connect(mapStateToProps, { fetchCharacters })(CharactersListPage);
