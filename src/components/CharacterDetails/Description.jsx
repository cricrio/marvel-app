import React from 'react';
import PropTypes from 'prop-types';

export default function Description({ description }) {
	return (
		<div className="measure">
			{description === '' ? 'Sorry, there is no description for this character' : description}
		</div>
	);
}

Description.propTypes = {
	description: PropTypes.string
};
