import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchOneCharacter } from '../actions';

function Description({ description }) {
	return (
		<div className="measure">
			{description === '' ? 'Sorry, there is no description for this character' : description}
		</div>
	);
}

function List({ name, items }) {
	return (
		<article className="w-45">
			<h2 className="ttc">{name}</h2>
			<ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
				{items.map((item) => <li class="ph3 pv3 bb b--light-silver"> {item.name}</li>)}
			</ul>
		</article>
	);
}

const getFromUrls = (param, urls) => urls.filter((url) => url.type === param)[0];

function URL({ name, url }) {
	return (
		<Link to="url" className="link dim mh2">
			{name}
		</Link>
	);
}

function URLs({ urls }) {
	return (
		<div className="mt3">
			<span>If you want to find more about this character:</span>
			{urls.map((url) => <URL name={url.type} url={url.url} />)}
		</div>
	);
}

class CharacterDetails extends React.Component {
	constructor(props) {
		super(props);
		props.fetchOneCharacter(props.match.params.id);
	}

	render() {
		const { character } = this.props;
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
						<URLs urls={character.urls} />
					</div>
				</div>
				<section className="mt2 flex justify-between">
					<List name="comics" items={character.comics.items} />
					<List name="series" items={character.series.items} />
				</section>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	character: state.character
});

export default connect(mapStateToProps, { fetchOneCharacter })(CharacterDetails);
