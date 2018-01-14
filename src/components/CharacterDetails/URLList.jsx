import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

function URL({ name, url }) {
	return (
		<Link to="url" className="link dim mh2">
			{name}
		</Link>
	);
}

URLList.propTypes = {
	url: PropTypes.string,
	name: PropTypes.string
};

export default function URLList({ urls }) {
	return (
		<div className="mt3">
			<span>If you want to find more about this character:</span>
			{urls.map((url) => <URL name={url.type} url={url.url} key={url.type} />)}
		</div>
	);
}

URLList.propTypes = {
	urls: PropTypes.array
};