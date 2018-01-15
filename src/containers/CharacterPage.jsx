import React from 'react';
import { connect } from 'react-redux';

import { fetchOneCharacter } from '../actions';

import CharacterDetails from '../components/CharacterDetails/';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

class CharacterPage extends React.Component {
	constructor(props) {
		super(props);
		props.fetchOneCharacter(props.match.params.id);
	}

	render() {
		const { character, loading, error } = this.props;
		return (
			<div>
				<ErrorMessage error={error} />
				<CharacterDetails character={character} />
				<LoadingSpinner loading={loading} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	character: state.character,
	loading: state.loading,
	error: state.errorDetails
});

export default connect(mapStateToProps, { fetchOneCharacter })(CharacterPage);
