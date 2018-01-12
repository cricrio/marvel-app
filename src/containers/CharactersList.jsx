import React from 'react';
import { connect } from 'react-redux';

function Character({ character }) {
	return (
		<article className="fl w-100 w-50-m w-25-ns pa2-ns ma3-ns shadow-5">
			<img
				className="db w-100 h5 br2 br--top"
				src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
			/>
			<div className="pa2 ph3-ns pb3-ns h3">
				<h1 className="f5">{character.name}</h1>
			</div>
		</article>
	);
}
export function CharactersList({ characters }) {
	return (
		<div className="cf w-80 pa2-ns center">
			{characters && characters.map((character) => <Character key={character.id} character={character} />)}
		</div>
	);
}

const mapStateToProps = (state) => ({
	characters: state.characters
});

export default connect(mapStateToProps)(CharactersList);
