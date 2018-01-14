import React from 'react';
import PropTypes from 'prop-types';

export default function List({ name, items }) {
	return (
		<article className="w-45">
			<h2 className="ttc">{name}</h2>
			<ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
				{items.map((item) => (
					<li className="ph3 pv3 bb b--light-silver" key={item.name}>
						{' '}
						{item.name}
					</li>
				))}
			</ul>
		</article>
	);
}

List.propTypes = {
	name: PropTypes.string,
	items: PropTypes.array
};
