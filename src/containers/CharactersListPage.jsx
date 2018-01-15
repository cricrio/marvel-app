import React from 'react';
import { connect } from 'react-redux';
import { fetchCharacters } from '../actions';

import CharactersList from '../components/CharacterList';
import LoadingSpinner from '../components/LoadingSpinner';
import SeeMoreButton from '../components/SeeMoreButton';
import ErrorMessage from '../components/ErrorMessage';

export class CharactersListPage extends React.Component {
	constructor(props) {
		super(props);
		if (props.page !== 1) {
			props.fetchCharacters(1);
		}
	}

	handleSeeMoreClick = (event) => {
		event.preventDefault();
		this.props.fetchCharacters(this.props.nextPage);
	};

	render() {
		const { characters, loading, error } = this.props;
		return (
			<div>
				<ErrorMessage error={error} />
				<CharactersList characters={characters} />
				<LoadingSpinner loading={loading} />
				<SeeMoreButton handleClick={this.handleSeeMoreClick} loading={loading} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	characters: state.characters,
	loading: state.loading,
	nextPage: state.nextPage,
	error: state.errorList
});

export default connect(mapStateToProps, { fetchCharacters })(CharactersListPage);
