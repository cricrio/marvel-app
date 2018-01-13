import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCharacters } from '../actions';

function Character({ character }) {
	return (
		<article className="w-100 w-50-m w-25-ns pa2-ns ma3-ns shadow-5">
			<img
				className="db w-100 h5 br2 br--top"
				src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
			/>
			<div className="pa2 ph3-ns pb3-ns h3">
				<Link to={`/characters/${character.id}`} className="link dim f3 black athelas tc">
					{character.name}
				</Link>
			</div>
		</article>
	);
}
export class CharactersList extends React.Component {
	constructor(props) {
		super(props);
		props.fetchCharacters();
	}

	render() {
		const { characters } = this.props;
		return (
			<div className="flex flex-wrap justify-center">
				{characters && characters.map((character) => <Character key={character.id} character={character} />)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	characters: state.characters
});

export default connect(mapStateToProps, { fetchCharacters })(CharactersList);
