import React from 'react';
import PropTypes from 'prop-types';

import URLList from './URLList';
import List from './List';
import Description from './Description';

export default function CharacterDetails({ character }) {
	if (!character) {
		return null;
	}
	return (
		<div>
			<h1 className="f3 black athelas">{character.name}</h1>
			<div>
				<img className="w5 v-top" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
				<div className="dib w-60 center pl4">
					<Description description={character.description} />
					<URLList urls={character.urls} />
				</div>
			</div>
			<section className="mt2 flex justify-between">
				<List name="comics" items={character.comics.items} />
				<List name="series" items={character.series.items} />
			</section>
		</div>
	);
}

CharacterDetails.propTypes = {
	character: PropTypes.object
};
