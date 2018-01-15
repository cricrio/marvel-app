import React from 'react';

export default function ErrorMessage({ error }) {
	if (error) {
		return (
			<section className="vh-75 baskerville">
				<header className="tc ph5 lh-copy">
					<h1 className="f1 f-headline-l code mb1 fw9 dib tracked-tight">{error}</h1>
					<h2 className="tc f1-l fw1 mt0">Sorry,something went wrong</h2>
				</header>
			</section>
		);
	}
	return null;
}
