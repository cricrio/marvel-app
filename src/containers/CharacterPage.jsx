import React from 'react';
import { connect } from 'react-redux';

import { fetchOneCharacter } from '../actions';

import CharacterDetails from '../components/CharacterDetails/';

class CharacterPage extends React.Component {
	constructor(props) {
		super(props);
		props.fetchOneCharacter(props.match.params.id);
	}

	render() {
		const { character } = this.props;
		return <CharacterDetails character={character} />;
	}
}

const mapStateToProps = (state) => ({
	character: state.character
});

export default connect(mapStateToProps, { fetchOneCharacter })(CharacterPage);
