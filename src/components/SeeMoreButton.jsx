import React from 'react';

export default function SeeMoreButton({ handleClick, loading }) {
	//only the button if not loading
	if (loading) {
		return null;
	}
	return (
		<button
			className="db center ba  br-pill bg-white bg-animate hover-bg-dark-red hover-white b--dark-red h2"
			onClick={handleClick}
		>
			See More
		</button>
	);
}
